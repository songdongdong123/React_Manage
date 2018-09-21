import React from 'react';
import { HashRouter, Route, Link, Switch } from 'react-router-dom';
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
export default class Home extends React.Component {
  render () {
    return (
      <HashRouter>
        <div>
          <ul>
            <li>
                <Link to="/">main</Link>
            </li>
            <li>
                <Link to="/about">about</Link>
            </li>
            <li>
                <Link to="/topics">topics</Link>
            </li>
          </ul>
          {/* Switch只会匹配一个，后面的不会被匹配 */}
          {/* exact={true}是精确匹配 */}
          {/* 一般是Switch和exact={true}配合使用 */}
          <Switch>
            <Route exact={true} path="/" component={Main}></Route>
            <Route path="/about" component={About}></Route>
            <Route path="/topics" component={Topics}></Route>
          </Switch>
        </div>
      </HashRouter>
    )
  }
}