import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import 'normalize.css';
import './index.scss';

const AppWrapper = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

ReactDOM.render(React.createElement(AppWrapper), document.getElementById('root'));
