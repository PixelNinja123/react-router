import React from 'react';
import { Link } from 'react-router-dom';
import navStyles from './Nav.module.css';
import brandLogo from './images/logo.svg';
import requestSvg from './images/measuring.svg';
import calcSvg from './images/calculation.svg';

const Navigation = () => {
  return (
    <header className={navStyles.header}>
      <div className={navStyles.brand}>
        <img src={brandLogo} alt="Brand Logo" />
      </div>
      <ul className={navStyles.menu}>
        <li><Link to="/">Services</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/faq">FAQ</Link></li>
        <li><Link to="/contacts">Contacts</Link></li>
      </ul>
      <div className={navStyles.actions}>
        <button className={navStyles.requestBtn}>
          <img src={requestSvg} alt="Request" className={navStyles.icon} />
          Make Request
        </button>
        <button className={navStyles.calcBtn}>
          <img src={calcSvg} alt="Calculate" className={navStyles.icon} />
          Calculation
        </button>
      </div>
    </header>
  );
};

export default Navigation;
