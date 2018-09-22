import React from 'react';
import { Link } from 'react-router-dom';
export default class Home extends React.Component {
  render () {
    return (
      <div>
        <p>this is Main Component</p>
        <Link to="/main/a"> to Main children</Link>
        <div className="router-view-children">
          {
            this.props.children
          }
        </div>
      </div>
    )
  }
}