import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/style.css'

const Header = () => {
  return (
     <header>
         <Link to="/"> <h1 id="header">WILLIE JOHN'S AIRBRUSH</h1></Link>
       </header>
  );
};

export default Header;