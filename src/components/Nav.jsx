import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/style.css'

const NAv = () => {
  return (
    <nav>
      <ul>
        <Link to="/aboutme"><li className="noline">ABOUT ME</li></Link>
        <Link to="/portfolio"><li className="noline">PORTFOLIO</li></Link>
        <Link to="/contact"><li className="noline">CONTACT ME</li></Link>
      </ul>
    </nav>
  );
};

export default NAv;