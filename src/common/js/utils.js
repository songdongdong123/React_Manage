const formateDate = function (time) {
  if (!time) return null;
  let date = new Date(time);
  let Y = date.getFullYear();
  let M = (date.getMonth() + 1) >= 10 ? (date.getMonth() + 1) : '0' + (date.getMonth() + 1)
  let D = date.getDate() >= 10 ? date.getDate() : '0' + date.getDate()
  let H = date.getHours() >= 10 ? date.getHours() : '0' + date.getHours()
  let m = date.getMinutes() >= 10 ? date.getMinutes() : '0' + date.getMinutes()
  return `${Y}-${M}-${D} ${H}:${m}`
}

export {
  formateDate
}