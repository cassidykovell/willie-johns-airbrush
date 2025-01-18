import React from "react";

const Footer = () => {
  const handleEmailClick = () => {
    window.location.href = "mailto:wjsairbrush@gmail.com";
  };

  return (
    <footer className="footer">
      <div className="social-media">
        <a className="tag" onClick={handleEmailClick} style={{ cursor: "pointer" }}>
          <i className="fas fa-envelope" style={{ fontSize: "3rem" }}></i>
        </a>
      </div>
    </footer>
  );
};

export default Footer;