import React, { Component } from 'react';
import { Button } from 'antd';
import { connect } from 'react-redux';
import { getTestInfo } from './redux/reducers';
@connect(
  state => state,
  {getTestInfo}

)
class App extends Component {
  componentDidMount () {
    this.props.getTestInfo();
  }
  render() {
    return (
      <div>
        <Button>xxxxx</Button>
      </div>
    )
  }
}

export default App;
