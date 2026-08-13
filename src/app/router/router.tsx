import { Navigate, Route, Routes } from "react-router-dom";
import { AboutUsPage } from "@features/aboutUs";
import { ContactPage } from "@features/contact";
import { CurrentProjectsPage } from "@features/currentProjects";
import { HomePage } from "@features/home";
import { LandHoldingsPage } from "@features/landHoldings";
import { ShellLayout } from "@features/shell";
import {
  LogisticsTrackPage,
  LuxuryTrackPage,
  ResidentialTrackPage,
  TrackRecordPage,
} from "@features/trackRecord";

export const AppRouter = () => {
  return (
    <Routes>
      <Route element={<ShellLayout />}>
        <Route index element={<HomePage />} />
        <Route path="about-us" element={<AboutUsPage />} />
        <Route path="track-record" element={<TrackRecordPage />} />
        <Route
          path="track-record/residential"
          element={<ResidentialTrackPage />}
        />
        <Route
          path="track-record/logistics"
          element={<LogisticsTrackPage />}
        />
        <Route path="track-record/luxury" element={<LuxuryTrackPage />} />
        <Route path="current-projects" element={<CurrentProjectsPage />} />
        <Route
          path="current-projects/urban-logistics"
          element={<Navigate to="/current-projects" replace />}
        />
        <Route path="land-holdings" element={<LandHoldingsPage />} />
        <Route path="contact" element={<ContactPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
