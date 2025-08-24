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
import Subscription from './pages/Subscription';
import About from './pages/About';
// import WhyUs from './pages/WhyUs';
import Contact from './pages/Contact';
// import Login from './pages/Login';
// import Signup from './pages/Signup';
// import Dashboard from './pages/Dashboard';

// Styles
import './styles/App.css';
import logo from '../src/assets/LGS_portrait.png'; // adjust relative path

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
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/subscription" element={<Subscription />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
             <Route path="/services" element={<Services />} />
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
