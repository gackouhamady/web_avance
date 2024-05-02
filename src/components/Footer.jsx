import '../styles/Footer.css'
import React from 'react';

function Footer() {
  return (
    <footer className='footer'>
      <p>&copy; {new Date().getFullYear()} Tous droits réservés.</p>
    </footer>
  );
}

export default Footer;
