import './App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import About from './About/About';
import Home from './Home/Home';
import Projects from './Projects/Projects';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import { Helmet } from 'react-helmet';

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to '/Home' when the app starts
    navigate('/Home');
    document.title = "Aaron Locklear Portfolio";
  }, []);

  return (
    <>
      <Helmet>
        <meta name="description" content="This portfolio, built with React, emphasizes the use of React Router and modular component design. It showcases my web development skills and design aesthetics in a cohesive presentation." />
      </Helmet>
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
