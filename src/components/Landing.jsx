import React from 'react';
import logo from '../assets/images/logo.jpg'
import '../assets/css/style.css'

const Landing = () => {
  return (
    <div id="landingpage">
    <img id='logo' src={logo} alt="Logo" />
    </div>
  );
};

export default Landing;