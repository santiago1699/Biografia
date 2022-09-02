import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-info">
        <h1>Santiago Alejandro Castro</h1>
        <p>Buenos Aires</p>
        <p> Capital Federal</p>
      </div>
      <div className="footer-contact">
        <h3>Contáctame</h3>
        <p>Y pongámonos manos a la obra</p>
        <br></br>
        <p>castrosantiago349@gmail.com</p>
      </div>
      <div className="footer-sns">
        <div className="design-by">Design By Santiago Alejandro Castro</div>
        <div className="sns-links">
          <a href="www.linkedin.com/in/santiago-castro-a960151a9" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin linkedin"></i>
          </a>
          <a href="https://twitter.com/SantiagoC_800" target="_blank" rel="noreferrer">
            <i className="fab fa-twitter twitter"></i>
          </a>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
