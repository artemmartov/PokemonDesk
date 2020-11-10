import React from 'react';
import { A, usePath } from 'hookrouter';
import s from './Header.module.scss';
import cn from 'classnames';
import { GENERAL_MENU } from '../../routes';
import { ReactComponent as PokemonLogoSvg } from './assets/Logo.svg';

const Header: React.FC = () => {
  const path = usePath();
  return (
    <header className={s.root}>
      <section className={s.wrap}>
        <div className={s.pokemonLogo}>
          <PokemonLogoSvg />
        </div>
        <div className={s.menuWrap}>
          {GENERAL_MENU.map(({ title, link }) => (
            <A href={link} className={cn(s.menuLink, { [s.activeLink]: link === path })} key={title}>
              {title}
            </A>
          ))}
        </div>
      </section>
    </header>
  );
};

export default Header;
