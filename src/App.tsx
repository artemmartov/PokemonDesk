import React from 'react';
import NotFound from '../src/Pages/NotFound';
import Header from '../src/components/Header';
import { useRoutes } from 'hookrouter';
import routes from './routes';

const App = () => {
  const match = useRoutes(routes);
  return match ? (
    <>
      <Header />
      {match}
    </>
  ) : (
    <NotFound />
  );
};

export default App;
