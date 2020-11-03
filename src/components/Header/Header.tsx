import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <ul className="header-items">
        <li>
          <img src="#" alt="pokemon" />
        </li>
        <li>Home</li>
        <li>Pokedex</li>
        <li>Legendaries</li>
        <li>Documentation</li>
      </ul>
    </header>
  );
};

export default Header;
