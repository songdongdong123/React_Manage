import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import NavLeft from '../../components/NavLeft';
import { Row, Col} from 'antd';
import './index.styl'

export default class Index extends React.Component {
  render () {
    return (
      <Row className="container">
        <Col span="4" className="nav_left">
          <NavLeft />
        </Col>
        <Col span="20" className="main">
          <Header />
          <Row className="content">
            content
          </Row>
          <Footer />
        </Col>
      </Row>
    )
  }
}