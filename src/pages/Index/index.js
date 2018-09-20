import React from 'react';
import NavLeft from '../../components/NavLeft';
import { Row, Col} from 'antd';

export default class Index extends React.Component {
  render () {
    return (
      <Row className="container">
        <Col span="4" className="">
          <NavLeft />
        </Col>
        <Col span="20">
          main
        </Col>
      </Row>
    )
  }
}