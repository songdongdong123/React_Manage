import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Home from './home';

function Main () {
  return (
    <div>
      Main pages
    </div>
  )
}
function About () {
  return (
    <div>
      About pages
    </div>
  )
}
function Topics () {
  return (
    <div>
      Topics pages
    </div>
  )
}
export default class Routes extends React.Component {
  render () {
    return (
      <HashRouter>
        <Home>
          <Route exact={true} path="/" component={Main}></Route>
          <Route  path="/about" component={About}></Route>
          <Route  path="/topics" component={Topics}></Route>
        </Home>
      </HashRouter>
    )
  }
}