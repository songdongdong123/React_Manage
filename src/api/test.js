import * as axios from '../common/js/axios';

const getTest = params => axios.post('/name', params)

export {
  getTest
}