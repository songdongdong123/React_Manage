import axios from 'axios';
import qs from 'qs';
import getBaseUrl from './baseurl';
import JsonP from 'jsonp';

// 拦截请求
let config = {
  baseURL: getBaseUrl(),
  withCredentials: true,
  headers: {
    // 设置
    'Content-Type': 'application/x-www-form-urlencoded'
  },
  transformRequest: [function (data) {
    // 处理发送前的数据
    data = qs.stringify(data)
    return data
  }],
  data: {}
}
axios.interceptors.request.use((data) => {
  // Toast.loading('加载中', 1500)
  return data
})

axios.interceptors.response.use((data) => {
  // Toast.hide()
  return data
})

const get = (url, params) => {
  url = urlEncode(url, params)
  return axios.get(url, config)
}

const post = (url, params, config) => {
  return axios.post(url, params, config)
}

const jsonp = (options) => {
  return new Promise((resolve, reject) => {
    JsonP(options.url, {
        param: 'callback'
    }, function (err, response) {
        if (response.status === 'success') {
            resolve(response);
        } else {
            reject(err);
        }
    })
  })
}

// 用来拼接get请求的时候的参数
let urlEncode = (url, data) => {
  if (typeof (url) === 'undefined' || url === null || url === '') return ''
  if (typeof (data) === 'undefined' || data === null || typeof (data) !== 'object') return url
  url += (url.indexOf('?') !== -1) ? '' : '?'
  for (let k in data) {
    url += ((url.indexOf('=') !== -1) ? '&' : '') + k + '=' + encodeURI(data[k])
  }
  return url
}

export {
  get,
  post,
  jsonp
}