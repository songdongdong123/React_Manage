const getBaseUrl = function () {
  let [baseUrl, protocol] = [`http://localhost:3000`, 'http://']
  // 判断协议
  if (window.location.protocol === 'https:') {
    protocol = 'https://'
  }
  if (window.location.hostname === 'localhost') {
    baseUrl = `${window.location.protocol}//${window.location.hostname}:${window.location.port}`
  }
  if (window.location.hostname !== 'localhost') {
    baseUrl = protocol + window.location.hostname
  }
  return baseUrl
}

export default getBaseUrl
