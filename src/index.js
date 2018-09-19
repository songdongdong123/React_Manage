import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import stroe from './redux';
import './index.css';
import App from './App';

ReactDOM.render(
  <Provider store={stroe}>
    <App />
  </Provider>
  , document.getElementById('root'));
