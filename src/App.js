import React from 'react';
import './App.css';
import './Responsive.css';
import Footer from './components/layouts/Footer.js';
import Home from './components/pages/Home/Home.js';
import Projects from './components/pages/Home/Projects.js';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Projects/:projectname" element={<Projects />} />
        </Routes>
        <Footer />
        <a href="#header" className="back-to-top"><i className="icofont-simple-up"></i></a>
      </BrowserRouter>
    </div>
  );
}

export default App;
