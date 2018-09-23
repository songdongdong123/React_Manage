import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import {routeNoLayOutMap, routeLayOutMap} from './routeConfig/routeMap';
import Index from '../pages/Index';
// import loadComponent from './routeConfig/asyncLoadComponent';
// import Login from '../pages/Login';
// import Buttons from '../pages/UI/button';
// import NoMatch from '../pages/NoMatch';
// const _import_views = file => loadComponent(() => import(`../pages/${file}`))
// const Home = _import_views('Home')
const renderRouteComponent = routes => routes.map((route, index) => {
  return <Route key={index} {...route} />
})
const layOutRoute = renderRouteComponent(routeLayOutMap);
const noLayOutRoute = renderRouteComponent(routeNoLayOutMap);
export default class Router extends React.Component {
   render () {
     return (
       <BrowserRouter>
          <Switch>
            {noLayOutRoute}
            <Route render={()=> {
              return (
                <Index>
                  <Switch>
                    {layOutRoute}
                    <Redirect from="/home" to="/"></Redirect>
                    <Redirect from="*" to="/404"></Redirect>
                  </Switch>
                </Index>
              )
            }}></Route>
          </Switch>
       </BrowserRouter>
     )
   }
 } 