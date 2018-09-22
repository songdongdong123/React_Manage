import React from 'react';
import { Row, Col } from 'antd';
import { formateDate } from '../../common/js/utils';
import { getWeather } from '../../api/weahter';
import './index.styl'
let timer;
export default class Footer extends React.Component {
  constructor (props) {
    super(props);
    this.state = {}
  }
  componentWillMount () {
    let sysTime = formateDate(new Date().getTime())
    this.setState({
      sysTime
    })
    timer = setInterval(() => {
      let sysTime = formateDate(new Date().getTime())
      this.setState({
        sysTime
      })
    },6 * 1000)
    this.getWeatherData()
  }
  componentWillUnmount () {
    clearInterval(timer);
  }
  getWeatherData () {
    let city = '深圳'
    getWeather({
      url: `http://api.map.baidu.com/telematics/v3/weather?location=${city}&output=json&ak=3p49MVra6urFRGOT9s8UBWr2`
    }).then(res => {
      if(res.status === 'success'){
        let data = res.results[0].weather_data[0];
        this.setState({
          dayPictureUrl:data.dayPictureUrl,
          weather:data.weather
        })
    }
    })
  }
  render () {
    return (
      <header className="header">
        <Row className="header-top">
          <Col span="24">
            <span onClick={() => {
              this.getWeatherData()
            }}>欢迎，大爷</span>
            <span className="loginout">退出</span>
          </Col> 
        </Row>
        <Row className="breadcrumb">
          <Col span="4" className="breadcrumb_title">
            首页
          </Col>
          <Col span="20" className="weather">
            <span className="date">{this.state.sysTime}</span>
            <span className="weather-img">
              <img src={this.state.dayPictureUrl} alt="" />
            </span>
            <span className="weather_detail">
              {this.state.weather}
            </span>
          </Col>
        </Row>
      </header>
    )
  }
}