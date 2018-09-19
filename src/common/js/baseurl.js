const getBaseUrl = function () {
  let [baseUrl, protocol] = ['http://localhost:3001', 'http://']
  // 判断协议
  if (window.location.protocol === 'https:') {
    protocol = 'https://'
  }
  if (window.location.hostname !== 'localhost') {
    baseUrl = protocol + window.location.hostname
  }
  return baseUrl
}

export default getBaseUrl
