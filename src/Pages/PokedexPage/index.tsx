import React, { useState, useEffect } from 'react';
import s from './PokedexPage.module.scss';
import PokemonCard from './PokemonCard';
import Heading from '../../components/Heading';
import { Head } from '../../components/Heading';

const PokedexPage: React.FC = () => {
  const [totalPokemons, setTotalPokemon] = useState(null);
  const [pokemons, setPokemons] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  useEffect(() => {
    const getPokemons = async () => {
      setIsLoading(true);
      try {
        const response = await fetch('http://zar.hosthot.ru/api/v1/pokemons');
        const data = await response.json();
        setTotalPokemon(data.total);
        setPokemons(data.pokemons);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getPokemons();
  }, []);

  if (isLoading) {
    return <div>loading...</div>;
  }

  if (isError) {
    return <div>ошибка</div>;
  }
  return (
    <>
      <div className={s.root}>
        {totalPokemons && (
          <Heading size={Head.h1} className={s.title}>
            {totalPokemons} <span className={s.bold}>Pokemons</span> for you to choose our favourite
          </Heading>
        )}

        <div className={s.cardWrapper}>
          {pokemons.map((el) => (
            <PokemonCard key={el.id} pokemon={el} />
          ))}
        </div>
      </div>
    </>
  );
};

export default PokedexPage;
