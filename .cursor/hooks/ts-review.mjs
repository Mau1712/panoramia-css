import { spawnSync } from "node:child_process";
import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { setTimeout as delay } from "node:timers/promises";

const MAX_ERROR_LINES = 40;
const LOCAL_LOOP_CAP = 2;

function readPayload() {
  try {
    const raw = readFileSync(0, "utf8").trim();
    if (!raw) return {};
    return JSON.parse(raw);
  } catch {
    return {};
  }
}

function normalizeWorkspaceRoot(root) {
  if (!root || typeof root !== "string") return process.cwd();
  // Cursor sometimes sends POSIX-style Windows paths: /c:/Users/...
  return root.replace(/^\/([A-Za-z]):\//, "$1:/");
}

function resolveTscBin(cwd) {
  const localTsc = path.join(cwd, "node_modules", "typescript", "bin", "tsc");
  if (existsSync(localTsc)) return localTsc;
  return null;
}

function runTypecheck(cwd) {
  const localTsc = resolveTscBin(cwd);

  if (localTsc) {
    return spawnSync(process.execPath, [localTsc, "-b", "--pretty", "false"], {
      cwd,
      encoding: "utf8",
      timeout: 120_000,
    });
  }

  const npxCmd = process.platform === "win32" ? "npx.cmd" : "npx";
  return spawnSync(npxCmd, ["tsc", "-b", "--pretty", "false"], {
    cwd,
    encoding: "utf8",
    timeout: 120_000,
    env: {
      ...process.env,
      npm_config_loglevel: "error",
    },
  });
}

function buildFollowup(tscOutput) {
  const lines = tscOutput
    .split(/\r?\n/)
    .map((line) => line.trimEnd())
    .filter(Boolean)
    .slice(0, MAX_ERROR_LINES);

  return [
    "Automated TypeScript review found errors after the last agent turn.",
    "Fix them now without asking for confirmation.",
    "Prioritize broken imports/module resolution, missing declarations, and implicit any.",
    "After the fixes, run `npx tsc -b --pretty false` and leave the project typecheck clean.",
    "",
    "tsc output:",
    "```",
    lines.join("\n"),
    "```",
  ].join("\n");
}

async function main() {
  const payload = readPayload();

  // Only continue the agent when it finished successfully.
  if (payload.status && payload.status !== "completed") {
    process.stdout.write("{}\n");
    await delay(50);
    return;
  }

  const loopCount = Number(payload.loop_count ?? 0);
  if (loopCount >= LOCAL_LOOP_CAP) {
    process.stdout.write("{}\n");
    await delay(50);
    return;
  }

  const workspaceRoot = normalizeWorkspaceRoot(
    Array.isArray(payload.workspace_roots) && payload.workspace_roots[0]
      ? payload.workspace_roots[0]
      : process.cwd(),
  );

  const result = runTypecheck(workspaceRoot);
  const combined = `${result.stdout ?? ""}${result.stderr ?? ""}`.trim();

  if (result.status === 0) {
    process.stdout.write("{}\n");
    await delay(50);
    return;
  }

  // Fail open if tsc itself crashed without useful diagnostics.
  if (!combined) {
    process.stdout.write("{}\n");
    await delay(50);
    return;
  }

  process.stdout.write(
    `${JSON.stringify({ followup_message: buildFollowup(combined) })}\n`,
  );
  // Small delay helps Windows hook runners capture stdout before process exit.
  await delay(80);
}

await main();
