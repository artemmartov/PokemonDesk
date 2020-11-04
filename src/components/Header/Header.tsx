import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <section className="header__content">
        <div className="header__logo" />

        <ul className="header-items">
          <li className="header-item">
            <Link to="/">Home</Link>
          </li>
          <li className="header-item">Pokedex</li>
          <li className="header-item">Legendaries</li>
          <li className="header-item">Documentation</li>
        </ul>
      </section>
    </header>
  );
};

export default Header;
