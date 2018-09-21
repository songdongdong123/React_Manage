import React from 'react';
import { Row, Col } from 'antd';

export default class Footer extends React.Component {
  render () {
    return (
      <header>
        <Row className="header-top">
          <Col span="24">
            <span>欢迎，大爷</span>
          </Col> 
        </Row>
        <Row className="breadcrumb">
          <Col span="4" className="breadcrumb_title">
            首页
          </Col>
          <Col span="20" className="weather">
            <span className="date">2018-09-21</span>
            <span className="weather_detail">晴转多云</span>
          </Col>
        </Row>
      </header>
    )
  }
}