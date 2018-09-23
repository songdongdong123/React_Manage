import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from './home';
import Main from './main';
import Info from './Info';
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
function Test () {
  return (
    <div>THIS is Test</div>
  )
}
function NoMatch () {
  return (
    <div>
      this is 404 pages
    </div>
  )
}
export default class Routes extends React.Component {
  render () {
    return (
      <HashRouter>
        <Switch>
          <Route path="/test" component={Test}></Route>
          <Route path="/404" component={NoMatch}></Route>
          <Home>
            <Switch>
              <Route exact={true}   path='/' component={Homes}></Route>
                    <Route path="/main" render={() =>
                        <Main>
                       a   {/*:value代表的是这个路由是一个动态路由，参数是value*/}
                          {/*你可以认为这里的Info组件就是一个动态组件，他可以根据不同的参数去渲染不同的数据*/}
                          <Route   path="/main/:value" component={Info}></Route>
                        </Main>
                    }></Route>
              <Route  path="/about" component={About}></Route>
              <Route  path="/topics" component={Topics}></Route>
              {/*使用Redirect将找不到的路由重定向到404页面的时候Redirect必须使放在最后面的*/}
              <Redirect from="*" to="/404"></Redirect>
            </Switch>
          </Home>
        </Switch>
      </HashRouter>
    )
  }
}