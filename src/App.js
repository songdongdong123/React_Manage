import React, { Component } from 'react';
import { Button } from 'antd';
import { getTest } from './api/test';
import { connect } from 'react-redux';
import { getTestInfo } from './redux/reducers';
// import axios from 'axios';
// http://127.0.0.1:3001/name
@connect(
  state => state,
  {getTestInfo}

)
class App extends Component {
  componentDidMount () {
    // this.props.getTestInfo();
  }
  render() {
    return (
      <div>
        <Button onClick = {() => {
          getTest({
            name: '123'
          }).then(res => {
            console.log(res)
          })
        }}>xxxxx</Button>
      </div>
    )
  }
}

export default App;
