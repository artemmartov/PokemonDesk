import React from 'react';
import NotFound from '../src/Pages/NotFound';
import './index.scss';
import { useRoutes } from 'hookrouter';
import routes from './routes';

const App = () => {
  const match = useRoutes(routes);
  return match || <NotFound />;
};

export default App;
