import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white">
      <div className="footer-container">
        <div className="footer-contact">
          <p>Email: <a href="mailto:ulmanfilip@gmail.com">ulmanfilip@gmail.com</a></p>
          <p>Telefon: <a href="tel:+420987457879">+420 725 501 910</a></p>
        </div>
        <div className="footer-message">
          <p>Máte dotazy nebo zájem o spolupráci? Rád se s vámi spojím!</p>
        </div>
      </div>
      <p className="footer-copyright">© {new Date().getFullYear()} DobrýWeb. Všechna práva vyhrazena.</p>
    </footer>
  );
};

export default Footer;