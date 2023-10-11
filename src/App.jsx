import { useState } from 'react';
import './App.css';
import About from './About/About';
import {Routes, Route, Link } from 'react-router-dom';
import Home from './Home/Home';
import Projects from './Projects/Projects';
import Header from './Header/Header';

function App() {
  const [curPageName, setCurPageName] = useState("Home");

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Projects" element={<Projects />} />
      </Routes>
    </>
  );
}

export default App;
