import * as axios from '../common/js/axios';

const getWeather = params => axios.jsonp(params)

export {
  getWeather
}