import React from 'react';
import s from './Home.module.scss';
import Button from '../../components/Button/index';
import Parallax from './components/Parallax';
import { Head } from '../../components/Heading';
import Heading from '../../components/Heading';
import { navigate } from 'hookrouter';
import { LinkEnum } from '../../routes';

const HomePage = () => {
  return (
    <div className={s.root}>
      <div className={s.wrapper}>
        <div className={s.textBlock}>
          <Heading size={Head.h1} className={s.title}>
            Find<span className={s.titleSpan}> all your favorite</span> Pokemon
          </Heading>
          <p className={s.subtitle}>You can know the type of Pokemon, its strengths, disadvantages and abilities</p>

          <Button green onClick={() => navigate(LinkEnum.POKEDEX)}>
            See pokemons
          </Button>
        </div>
        <Parallax />
      </div>
    </div>
  );
};

export default HomePage;
