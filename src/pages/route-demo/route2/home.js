import React from 'react';
import { Link } from 'react-router-dom';
export default class Home extends React.Component {
  render () {
    return (
      <div>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to="/main">Main</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="topics">Topics</Link>
          </li>
        </ul>
        <hr/>
        {/*
          这里的this.props.children相当于vue里面的<router-view/>
          用来渲染路由对应的组件，相当于一个承载容器，
          当然我们可以使用一个dom标签将它包裹起来，这样看起来更像一个路由组件的容器
        */}
        <div className="route-view">
          {this.props.children}
        </div>
      </div>
    )
  }
}