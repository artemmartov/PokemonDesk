import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Default as Layout } from './layouts';

import './index.scss';

const App = () => (
  <section className="App">
    <Router>
      <Switch>
        <Route exact path="/">
          <Layout>
            <div>content</div>
            <footer>footer</footer>
          </Layout>
        </Route>
      </Switch>
    </Router>
  </section>
);

export default App;
