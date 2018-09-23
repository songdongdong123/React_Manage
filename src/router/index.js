import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Index from '../pages/Index';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Buttons from '../pages/UI/button';
import NoMatch from '../pages/NoMatch';
export default class Router extends React.Component {
   render () {
     return (
       <BrowserRouter>
          <Switch>
            <Route path='/login' component={Login}></Route>
            {/*<Route path='/404' component={NoMatch}></Route>*/}
            <Route render={()=> {
              return (
                <Index>
                  <Switch>
                    <Route exact={true} path="/" component={Home}></Route>
                    <Route path="/ui/buttons" component={Buttons}></Route>
                    <Route path='/404' component={NoMatch}></Route>
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