import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.scss';
import { ReactComponent as PokemonLogoSvg } from './assets/Logo.svg';

interface IMenu {
  id: number;
  value: string;
  link: string;
}

const MENU: IMenu[] = [
  {
    id: 1,
    value: 'Home',
    link: '/',
  },
  {
    id: 2,
    value: 'Pokedex',
    link: '/pokedex',
  },
  {
    id: 3,
    value: 'Legendaries',
    link: '/legendariess',
  },
  {
    id: 4,
    value: 'Documentation',
    link: '/documentation',
  },
];

const Header = () => {
  return (
    <header className={s.root}>
      <section className={s.wrap}>
        <div className={s.pokemonLogo}>
          <PokemonLogoSvg />
        </div>
        <div className={s.menuWrap}>
          {MENU.map(({ value, link, id }) => (
            <NavLink to={link} className={s.menuLink} key={id} activeClassName={s.activeLink}>
              {value}
            </NavLink>
          ))}
        </div>
      </section>
    </header>
  );
};

export default Header;
