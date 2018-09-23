import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import stroe from './redux';
// import Index from './pages/Index';
// import Routers from './pages/route-demo/route3/router'
import './index.css';
import Router from './router'
import './common/stylus/index.styl';
import './common/stylus/icon.styl';
ReactDOM.render(
  <Provider store={stroe}>
    <Router />
  </Provider>
  , document.getElementById('root'));
