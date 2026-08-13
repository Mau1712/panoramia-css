export const pxToRem = (px: number) => `${px / 16}rem`;

/** Escala 50..900 derivada de un color base (500 = base) vía color-mix. */
export const createColorScale = (base: string) =>
  ({
    50: `color-mix(in srgb, ${base} 8%, white)`,
    100: `color-mix(in srgb, ${base} 16%, white)`,
    200: `color-mix(in srgb, ${base} 30%, white)`,
    300: `color-mix(in srgb, ${base} 50%, white)`,
    400: `color-mix(in srgb, ${base} 75%, white)`,
    500: base,
    600: `color-mix(in srgb, ${base} 85%, black)`,
    700: `color-mix(in srgb, ${base} 70%, black)`,
    800: `color-mix(in srgb, ${base} 55%, black)`,
    900: `color-mix(in srgb, ${base} 40%, black)`,
  }) as const;
