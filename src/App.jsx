import { useState } from 'react';
import './App.css';
import Forme from './components/Forme';
import Footer from './components/Footer';
import { Routes, Route } from 'react-router';
import Creditoption from './components/Creditoption';

function Home() {
  return (
    <>
      <svg
        style={{ marginLeft: 202, marginTop: 24, marginBottom: 28 }}
        width={148}
        height={40}
        fill="#e50914"
        viewBox="0 0 111 30"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        role="img"
        className="default-ltr-cache-4wvxq9-StyledBrandLogo ev1dnif2"
      >
        <g>
          <path d="M105.06233,14.2806261 L110.999156,30 C..." />
        </g>
      </svg>
      <Forme />
      <Footer />
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup/creditoption" element={<Creditoption />} />
    </Routes>
  );
}

export default App;
