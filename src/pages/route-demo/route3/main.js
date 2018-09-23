import React from 'react';
import { Link } from 'react-router-dom';
export default class Home extends React.Component {
  render () {
    return (
      <div>
        <p>this is Main Component</p>
        {/*这里的/main/456是一个动态路由*/}
        <Link to="/main/456">嵌套的动态路由1</Link>
        <br/>
        <Link to="/main/789">嵌套的动态路由2</Link>
        <div className="router-view-children">
          {
            this.props.children
          }
        </div>
      </div>
    )
  }
}