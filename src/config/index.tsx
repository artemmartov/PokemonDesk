export const config = {
  client: {
    server: {
      protocol: 'http',
      host: 'zar.hosthot.ru',
    },
    endpoint: {
      getPokemon: {
        method: 'GET',
        url: {
          pathname: '/api/v1/pokemons',
        },
      },
      getOnePokemon: {
        method: 'GET',
        url: {
          pathname: '/api/v1/pokemon/{id}',
        },
      },
    },
  },
};

export default config;
