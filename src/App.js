import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Header from './components/Header';
import Footer from './components/Footer';
import Preloader from './components/Preloader'; // adjust path if you put it elsewhere

// Pages
import Home from './pages/Home';
import Product from './pages/Product';
import Services from './pages/Services';
import About from './pages/About';
// import WhyUs from './pages/WhyUs';
import Contact from './pages/Contact';
// import Login from './pages/Login';
// import Signup from './pages/Signup';
// import Dashboard from './pages/Dashboard';

// Styles
import './styles/App.css';
import logo from '../src/assets/LGS_portrait.png'; // adjust relative path
import Nadita2024 from './pages/News/Nadita2024';
import Nadita2023 from './pages/News/Nadita2023';
import News from './pages/News/News';
import GecolsaProject from './pages/stories/Gecolsa';
import FoleyCAT from './pages/stories/FoleyCAT';
import PonPowerNorwayEquipment from './pages/stories/PonPowerNorwayEquipment';
import PonPowerNetherlands from './pages/stories/PonPowerNetherlands';
import StoryPage from './pages/stories/StoryPage';
import Blogs from './pages/Blogs';
import ScrollToTop from './components/ScrollToTop';
import HelpCenter from './pages/HelpCenter';
import Terms from './pages/Terms';
import PrivacyPolicy from './pages/PrivacyPolicy';
import UnderDevelopment from './pages/UnderDevelopment';
import Unsubscribe from './pages/Unsubscribe';


function App() {
  const [ready, setReady] = useState(false);

  // you can replace this with actual data/load detection if needed
  const handleFinish = () => {
    setReady(true);
  };

  return (
    <>
      {!ready && (
        <Preloader
          logoSrc={logo}
          duration={2500}
          pieceSize={18}
          onFinish={handleFinish}
        />
      )}
      {ready && (
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
             <Route path="/stories/folyCAT" element={<FoleyCAT/>} />
             <Route path="/stories/pon-Norway-CAT" element={<PonPowerNorwayEquipment/>} />
             <Route path="/stories/pon-Netherlands-CAT" element={<PonPowerNetherlands/>} />
             <Route path="/stories" element={<StoryPage/>} />
             <Route path="/blogs" element={<Blogs/>} />
            <Route path="/help" element={<HelpCenter />} />
            
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/blank" element={<UnderDevelopment />} />
            <Route path="/unsubscribe" element={<Unsubscribe />} />

             
      
            {/*
           
            
            <Route path="/why-us" element={<WhyUs />} />
            
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
            */}
          </Routes>
          <Footer />
        </Router>
      )}
    </>
  );
}

export default App;
