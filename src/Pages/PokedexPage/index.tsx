import React, { useState } from 'react';
import s from './PokedexPage.module.scss';
import PokemonCard from './PokemonCard';
import Heading from '../../components/Heading';
import { Head } from '../../components/Heading';
import useData from '../../hook/getData';
import { IPokemons, PokemonRequest } from '../../interface/Pokedex';
import useDebounce from '../../hook/useDebounce';

interface IQuery {
  [name: string]: string;
}

const PokedexPage: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [query, setQuery] = useState<IQuery>({});
  const debounceValue = useDebounce(searchValue, 500);
  const { data, isLoading, isError } = useData<IPokemons>('getPokemon', query, [debounceValue]);
  console.log('data', data);

  if (isError) {
    return <div>ошибка</div>;
  }

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
    setQuery((s: IQuery) => ({
      ...s,
      name: e.target.value,
    }));
  };

  return (
    <div className={s.root}>
      {!isLoading && data ? (
        <>
          <Heading size={Head.h1} className={s.title}>
            <div>
              {(data as any).total} <span className={s.bold}>Pokemons</span> for you to choose our favourite{' '}
            </div>
          </Heading>
          <div className={s.input}>
            <input type="text" value={searchValue} onChange={handleSearchChange} />
          </div>
          <div className={s.cardWrapper}>
            {(data as any).pokemons.map((el: PokemonRequest, index: number | string) => (
              <PokemonCard key={index} pokemon={el} />
            ))}
          </div>
        </>
      ) : null}
    </div>
  );
};

export default PokedexPage;
