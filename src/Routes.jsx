import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
import NotFound from "pages/NotFound";
import EmployerPartnershipCenter from './pages/employer-partnership-center';
import SuccessStoriesGallery from './pages/success-stories-gallery';
import Homepage from './pages/homepage-employment-bridge-platform';
import CountryLandingPages from './pages/country-landing-pages-localized-entry-points';
import WorkerRegistrationHub from './pages/worker-registration-hub';
import AboutUsAuthorityTrustBuilding from './pages/about-us-authority-trust-building';

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your route here */}
        <Route path="/" element={<AboutUsAuthorityTrustBuilding />} />
        <Route path="/employer-partnership-center" element={<EmployerPartnershipCenter />} />
        <Route path="/success-stories-gallery" element={<SuccessStoriesGallery />} />
        <Route path="/homepage-employment-bridge-platform" element={<Homepage />} />
        <Route path="/country-landing-pages-localized-entry-points" element={<CountryLandingPages />} />
        <Route path="/worker-registration-hub" element={<WorkerRegistrationHub />} />
        <Route path="/about-us-authority-trust-building" element={<AboutUsAuthorityTrustBuilding />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;
