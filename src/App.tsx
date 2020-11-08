import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import NotFound from './Pages/NotFound';
import HomePage from './Pages/Home';

import './index.scss';

const App = () => (
  <section className="App">
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>

        <Route path="/pokedex">
          <footer>pokedex</footer>
        </Route>
      </Switch>
    </Router>
  </section>
);

export default App;
