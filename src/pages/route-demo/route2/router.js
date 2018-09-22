import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Home from './home';
import Main from './main';
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
function Homes () {
  return(
    <div>
      This is Home Page
    </div>
  )
}
export default class Routes extends React.Component {
  render () {
    return (
      <HashRouter>
        <Home>
          <Route exact={true}  path='/' component={Homes}></Route>
            <Route path="/main" render={() =>
                <Main>
                  <Route  path="/main/a" component={About}></Route>
                </Main>
            }></Route>
            <Route  path="/about" component={About}></Route>
            <Route  path="/topics" component={Topics}></Route>
        </Home>
      </HashRouter>
    )
  }
}