import { Navigate, Route, Routes } from "react-router-dom";
import { useLocalizedPath } from "@app/i18n";
import { AboutUsPage } from "@features/aboutUs";
import { ContactPage } from "@features/contact";
import { CurrentProjectsPage } from "@features/currentProjects";
import { HomePage } from "@features/home";
import { LandHoldingsPage } from "@features/landHoldings";
import { NotFoundPage, ShellLayout } from "@features/shell";
import {
  LogisticsTrackPage,
  LuxuryTrackPage,
  ResidentialTrackPage,
  TrackRecordPage,
} from "@features/trackRecord";

const LocaleAwareRedirect = ({ to }: { to: string }) => {
  const localize = useLocalizedPath();
  return <Navigate to={localize(to)} replace />;
};

const appPageRoutes = (
  <>
    <Route index element={<HomePage />} />
    <Route path="about-us" element={<AboutUsPage />} />
    <Route path="track-record" element={<TrackRecordPage />} />
    <Route path="track-record/residential" element={<ResidentialTrackPage />} />
    <Route path="track-record/logistics" element={<LogisticsTrackPage />} />
    <Route path="track-record/luxury" element={<LuxuryTrackPage />} />
    <Route path="current-projects" element={<CurrentProjectsPage />} />
    <Route
      path="current-projects/urban-logistics"
      element={<LocaleAwareRedirect to="/current-projects" />}
    />
    <Route path="land-holdings" element={<LandHoldingsPage />} />
    <Route path="contact" element={<ContactPage />} />
    <Route path="*" element={<NotFoundPage />} />
  </>
);

export const AppRouter = () => {
  return (
    <Routes>
      <Route element={<ShellLayout />}>{appPageRoutes}</Route>
      <Route path="en" element={<ShellLayout />}>
        {appPageRoutes}
      </Route>
    </Routes>
  );
};
