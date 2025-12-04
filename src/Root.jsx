import React from 'react';
import Navbar from './Component/Navbar';
import About from './Component/About';
import Home from './Component/Home';
import Skills from './Component/Skills';
import Project from './Component/Project';
import Contact from './Component/Contact';
import Footer from './Component/Footer';
import Education from './Component/Education';

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Home></Home>
      <About></About>
      <Education></Education>
      <Skills></Skills>
      <Project></Project>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default Root;