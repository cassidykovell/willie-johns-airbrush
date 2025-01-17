import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav>
      <ul>
        <Link to="/"><li className="noline">ABOUT ME</li></Link>
        <Link to="/portfolio"><li className="noline">PORTFOLIO</li></Link>
        <Link to="contact"><li className="noline">CONTACT ME</li></Link>
      </ul>
    </nav>
  );
};

export default Nav;