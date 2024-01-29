import React from 'react';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import './header.css';

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hola Soy</h5>
        <h1>Brayan Zorro</h1>
        <h4>Desarrollador Full-stack</h4>
        <CTA />
        <a href="#contact" className="email">
          zorrobrayan0@gmail.com
        </a>
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
