import { useState } from "react";
import { FrappeProvider } from "frappe-react-sdk";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer/Footer";
import WebApplicationsPage from "./pages/WebApplicationsPage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import EcommerceSolutionsPage from "./pages/EcommerceSolutionsPage";
import RealEstateAccountingPage from "./pages/RealEstateAccountingPage";
import VisaTravelManagementPage from "./pages/VisaTravelManagementPage";
import ClinicDiagnosticCenter from "./pages/ClinicDiagnosticCenter";

function App() {
  const getSiteName = () => {
    if (
      window.frappe?.boot?.versions?.frappe &&
      (window.frappe.boot.versions.frappe.startsWith("15") ||
        window.frappe.boot.versions.frappe.startsWith("16"))
    ) {
      return window.frappe?.boot?.sitename ?? import.meta.env.VITE_SITE_NAME;
    }
    return import.meta.env.VITE_SITE_NAME;
  };

  return (
    <BrowserRouter>
      <FrappeProvider
        socketPort={import.meta.env.VITE_SOCKET_PORT}
        siteName={getSiteName()}
      >
        {/* Navbar */}
        <Navbar />

        {/* Routes */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/web-applications" element={<WebApplicationsPage />} />
          <Route path="/ecommerce-solutions" element={<EcommerceSolutionsPage />} />
          <Route path="/real-estate-accounting" element={<RealEstateAccountingPage />} />
          <Route path="/visa-travel-management" element={<VisaTravelManagementPage/>} />
          <Route path="/clinic-management" element={<ClinicDiagnosticCenter/>}/>
          <Route path="/contact-us" element={<ContactPage />} />
          <Route path="/about-us" element={<AboutPage />} />
        </Routes>

        {/* Footer */}
        <Footer />
      </FrappeProvider>
    </BrowserRouter>
  );
}

export default App;
