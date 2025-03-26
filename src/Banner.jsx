import React from 'react';
import { useLocation } from 'react-router-dom';
import './Banner.css';

function Banner() {
  const location = useLocation();
  let image = '';
  let title = '';

  // Podle cesty nastavíme obrázek a titulek
  switch (location.pathname) {
    case '/':
      image = '/images/home.jpg';
      title = 'DobrýWeb';
      break;
    case '/about':
      image = '/images/about.jpg';
      title = 'O mně';
      break;
    case '/contact':
      image = '/images/contact.jpg';
      title = 'Kontaktujte mně';
      break;
    default:
      image = '/images/home.jpg'; // výchozí obrázek, pokud cesta nesedí
      title = 'DobrýWeb';
      break;
  }

  return (
    <div className="banner-container">
      <img src={image} alt={title} className="banner" />
      <div className="banner-text">
        <h1>{title}</h1>
      </div>
    </div>
  );
}

export default Banner;