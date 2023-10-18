import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import About from './About/About';
import Home from './Home/Home';
import Projects from './Projects/Projects';
import Header from './Header/Header';
import Footer from './Footer/Footer';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to '/Home' when the app starts
    navigate('/Home');
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Projects" element={<Projects />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
