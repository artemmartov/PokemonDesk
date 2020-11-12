import React from 'react';
import Heading from '../../../components/Heading';
import { Head } from '../../../components/Heading';

import s from './PokemonCard.module.scss';

interface IPokemon {
  key: number;
  pokemon: {
    name_clean: string;
    abilities: string[];
    stats: {
      hp: number;
      attack: number;
      defense: number;
      'special-attack': number;
      'special-defense': number;
      speed: number;
    };
    types: string[];
    img: string;
    name: string;
    base_experience: number;
    height: number;
    id: number;
    is_default: boolean;
    order: number;
    weight: number;
  };
}

const PokemonCard: React.FC<IPokemon> = ({ pokemon }) => {
  return (
    <div className={s.root}>
      <div className={s.infoWrap}>
        <Heading size={Head.h1} className={s.titleName}>
          {pokemon.name_clean}
        </Heading>
        <div className={s.statWrap}>
          <div className={s.statItem}>
            <div className={s.statValue}>52</div>
            {pokemon.stats.attack}
          </div>
          <div className={s.statItem}>
            <div className={s.statValue}>43</div>
            {pokemon.stats.defense}
          </div>
        </div>
        <div className={s.labelWrap}>
          {pokemon.types.map((el) => (
            <span key={el} className={s.label}>
              {el}
            </span>
          ))}
        </div>
      </div>
      <div className={s.pictureWrap}>
        <img src={pokemon.img} alt={pokemon.name_clean} />
      </div>
    </div>
  );
};

export default PokemonCard;
