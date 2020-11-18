import React, { useState, useMemo } from 'react';
import s from './PokedexPage.module.scss';
import PokemonCard from './PokemonCard';
import Heading from '../../components/Heading';
import { Head } from '../../components/Heading';
import useData from '../../hook/getData';

const PokedexPage = () => {
  const [searchValue, setSearchValue] = useState('');
  const [query, setQuery] = useState({});

  const { data, isLoading, isError } = useData('getPokemon', query, searchValue);
  if (isLoading) {
    return <div>loading...</div>;
  }

  if (isError) {
    return <div>ошибка</div>;
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setQuery((s) => ({
      ...s,
      name: e.target.value,
    }));
  };

  return (
    <div className={s.root}>
      {data?.length && (
        <Heading size={Head.h1} className={s.title}>
          {data.total} <span className={s.bold}>Pokemons</span> for you to choose our favourite
        </Heading>
      )}
      <div>
        <input type="text" value={searchValue} onChange={handleSearchChange} />
      </div>
      <div className={s.cardWrapper}>
        {data?.map((el, index) => (
          <PokemonCard key={index + el} pokemon={el} />
        ))}
      </div>
    </div>
  );
};

export default PokedexPage;
