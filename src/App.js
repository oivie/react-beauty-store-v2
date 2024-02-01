import React, { useRef, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import gsap from 'gsap';
import Main from './Main';
import Catalogue from './Catalogue';
import About from './About';
import Footer from './Footer';

function App() {
  const navRef = useRef(null); 

  useEffect(() => {
    // Ensure the initial state before the animation starts
    gsap.set(navRef.current.children, { autoAlpha: 0, x: -100 });
  
    // Animate to the final state
    gsap.to(navRef.current.children, {
      duration: 1.5,
      autoAlpha: 1, // End with fully opaque
      x: 0, // End at their natural position
      stagger: 0.2,
      ease: "power1.out",
    });
  }, []);
  

  return (
    <div>
      <Router>
        <nav ref={navRef} className='container'> 
          <Link to='/main' className='link'>Main</Link>
          <Link to='/catalogue' className='link'>Catalogue</Link>
          <Link to='/about' className='link'>About Us</Link>
        </nav>

        <Routes>
          <Route path='/' element={<Main />} />
          <Route path='/main' element={<Main />} />
          <Route path='/catalogue' element={<Catalogue />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Router>

      <Footer />
    </div>
  );
}

export default App;
