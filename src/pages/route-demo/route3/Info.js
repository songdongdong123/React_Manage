import React from 'react';
export default class Home extends React.Component {
  render () {
    return (
      <div>
        这里是嵌套路由
        {/*获取动态路由的参数*/}
        动态参数：{this.props.match.params.value}
      </div>
    )
  }
}