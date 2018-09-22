import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import stroe from './redux';
// import Index from './pages/Index';
import Home from './pages/route-demo/route1/home'
import './common/stylus/index.styl';
import './common/stylus/icon.styl';
ReactDOM.render(
  <Provider store={stroe}>
    <Home />
  </Provider>
  , document.getElementById('root'));
