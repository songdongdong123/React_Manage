import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import stroe from './redux';
import './index.css';
import Index from './pages/Index';

ReactDOM.render(
  <Provider store={stroe}>
    <Index />
  </Provider>
  , document.getElementById('root'));
