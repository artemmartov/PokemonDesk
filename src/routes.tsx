import React from 'react';
import HomePage from './Pages/HomePage';
import NotFound from './Pages/NotFound';
import PokedexPage from './Pages/PokedexPage';

interface IAccMenu {
  [n: string]: () => JSX.Element;
}

interface IGeneralMenu {
  title: string;
  link: string;
  component: () => JSX.Element;
}

export const GENERAL_MENU: IGeneralMenu[] = [
  {
    title: 'Home',
    link: '/',
    component: () => <HomePage />,
  },
  {
    title: 'Pokedex',
    link: '/pokedex',
    component: () => <PokedexPage />,
  },
  {
    title: 'Legendaries',
    link: '/legendaries',
    component: () => <HomePage />,
  },
  {
    title: 'Documentation',
    link: '/documentation',
    component: () => <HomePage />,
  },
];

const routes = GENERAL_MENU.reduce((acc: IAccMenu, item) => {
  acc[item.link] = item.component;
  return acc;
}, {});

export default routes;
