// src/layout/Nav.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Nav.module.css';
import logo from './images/logo.svg';
import measuringIcon from './images/measuring.svg'; // Импортируем изображение
import calculationIcon from './images/calculation.svg'; // Импортируем изображение

const Nav = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img src={logo} alt="Logo" />
      </div>
      <ul className={styles.navLinks}>
        <li><Link to="/">Services</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/about">About us</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/faq">FAQ</Link></li>
        <li><Link to="/contacts">Contacts</Link></li>
      </ul>
      <div className={styles.navButtons}>
        <button className={styles.requestButton}>
          <img src={measuringIcon} alt="Measuring" className={styles.buttonIcon} />
          Make request
        </button>
        <button className={styles.calculationButton}>
          <img src={calculationIcon} alt="Calculation" className={styles.buttonIcon} />
          Calculation
        </button>
      </div>
    </nav>
  );
};

export default Nav;
