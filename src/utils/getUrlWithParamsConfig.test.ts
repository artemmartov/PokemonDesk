import getUrlWithParamsConfig from './getUrlWithParamsConfig';

describe('getUrlWithParamsConfig', () => {
  test('Должна принимать два аргумерта GET_POKEMONS и пустой объект, на выходе получить объект с полями pathname, protocol, host', () => {
    const url = getUrlWithParamsConfig('getPokemon', { name: 'Picachu' });
    expect(url).toEqual({
      protocol: 'http',
      host: 'zar.hosthot.ru',
      pathname: '/api/v1/pokemons',
      query: { name: 'Picachu' },
    });
  });

  test('Должна принимать два аргумерта GET_POKEMONS и id, на выходе получить объект с полями pathname, protocol, host', () => {
    const url = getUrlWithParamsConfig('getOnePokemon', { id: 25 });
    expect(url).toEqual({
      protocol: 'http',
      host: 'zar.hosthot.ru',
      pathname: '/api/v1/pokemon/25',
      query: {},
    });
  });
});
