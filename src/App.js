import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader"; // adjust path if you put it elsewhere

// Pages
import Home from "./pages/Home";
import Product from "./pages/Product";
import Services from "./pages/Services";
import About from "./pages/About";
// import WhyUs from './pages/WhyUs';
import Contact from "./pages/Contact";
// import Login from './pages/Login';
// import Signup from './pages/Signup';
// import Dashboard from './pages/Dashboard';

// Styles
import "./styles/App.css";
import logo from "../src/assets/primaryLGS_logo/onlylogo.jpg"; // adjust relative path
// import logo from "../src/assets/final_LGSTech_logo_w2-removebg-preview-sidebaar.PNG";
import Nadita2024 from "./pages/News/Nadita2024";
import Nadita2023 from "./pages/News/Nadita2023";
import News from "./pages/News/News";
import GecolsaProject from "./pages/stories/Gecolsa";
import FoleyCAT from "./pages/stories/FoleyCAT";
import PonPowerNorwayEquipment from "./pages/stories/PonPowerNorwayEquipment";
import PonPowerNetherlands from "./pages/stories/PonPowerNetherlands";
import StoryPage from "./pages/stories/StoryPage";
import Blogs from "./pages/Blogs";
import ScrollToTop from "./components/ScrollToTop";
import HelpCenter from "./pages/HelpCenter";
import Terms from "./pages/Terms";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import UnderDevelopment from "./pages/UnderDevelopment";
import Unsubscribe from "./pages/Unsubscribe";
import D365SecurityPage from "./pages/whatsnew/D365Security";
import DatamigrationBest from "./pages/whatsnew/DatamigrationBest";
import Dynamics365Implementation from "./pages/whatsnew/Dynamics365Implementation";
import D365DataMigration from "./pages/products/D365DataMigration";
import NAXT2012toNAXT365Solution from "./pages/products/NAXT2012toNAXT365Solution";
import LegacyApplication from "./pages/products/LegacyApplication";
import AX2012UpgradeSolution from "./pages/products/AX2012UpgradeSolution";
import TimesheetManagement from "./pages/products/TimesheetManagement";
import FixedAssets from "./pages/products/FixedAssets";
import AzureDevOps from "./pages/products/AzureDevOps";

function App() {
  const [ready, setReady] = useState(false);

  // you can replace this with actual data/load detection if needed
  const handleFinish = () => {
    setReady(true);
  };

  return (
    <>
      <Preloader logoSrc={logo} pieceSize={18} />

      <Router>
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/news/nadita2024" element={<Nadita2024 />} />
          <Route path="/news/nadita2023" element={<Nadita2023 />} />
          <Route path="/news" element={<News />} />
          <Route path="/stories/gecolsa" element={<GecolsaProject />} />
          <Route path="/stories/folyCAT" element={<FoleyCAT />} />
          <Route
            path="/stories/pon-Norway-CAT"
            element={<PonPowerNorwayEquipment />}
          />
          <Route
            path="/stories/pon-Netherlands-CAT"
            element={<PonPowerNetherlands />}
          />
          <Route path="/stories" element={<StoryPage />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/help" element={<HelpCenter />} />

          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/blank" element={<UnderDevelopment />} />
          <Route path="/unsubscribe" element={<Unsubscribe />} />
          <Route path="/d365-security" element={<D365SecurityPage />} />
          <Route
            path="/data-migration-best-practices"
            element={<DatamigrationBest />}
          />
          <Route
            path="/d365-implementation-services"
            element={<Dynamics365Implementation />}
          />
          <Route
            path="/d365-data-migration-product"
            element={<D365DataMigration />}
          />
          <Route
            path="/NAXT2012-to-NAXT365-product"
            element={<NAXT2012toNAXT365Solution />}
          />
          <Route
            path="/Legacy-application-product"
            element={<LegacyApplication />}
          />
          <Route
            path="/AX2012-upgrade-product"
            element={<AX2012UpgradeSolution />}
          />
          <Route
            path="/timesheeet-management-product"
            element={<TimesheetManagement />}
          />
          <Route
            path="/fixed-assests-stock-product"
            element={<FixedAssets />}
          />
          <Route
            path="/Azure-devops-project-management-product"
            element={<AzureDevOps />}
          />

          {/*
           
            
            <Route path="/why-us" element={<WhyUs />} />
            
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
            */}
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
