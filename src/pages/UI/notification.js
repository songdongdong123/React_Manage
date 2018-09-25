import React from 'react'
import { Card, Button, notification, Icon } from 'antd'
import './base.styl'
export default class Modals extends React.Component {
  openNotification () {
    notification.open({
      message: 'Notification Title',
      description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    });
  };
  openNotificationWithIcon (type){
    notification[type]({
      message: 'Notification Title',
      description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    });
  };
  openNotification1 = () => {
    notification.open({
      message: 'Notification Title',
      description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
      icon: <Icon type="smile" style={{ color: '#108ee9' }} />,
    });
  };
  openNotification2 = () => {
    const args = {
      message: 'Notification Title',
      description: 'I will never close automatically. I will be close automatically. I will never close automatically.',
      duration: 0,
    };
    notification.open(args);
  };
  close = (key) => {
    console.log('关闭提示', key);
  };
  openNotification3 = () => {
    const key = `open${Date.now()}`;
    const btn = (
      <Button type="primary" size="small" onClick={() => notification.close(key)}>
        Confirm
      </Button>
    );
    notification.open({
      message: 'Notification Title',
      description: 'A function will be be called after the notification is closed (automatically after the "duration" time of manually).',
      btn,
      key,
      onClose: this.close,
    });
  };
  openNotification4 (type) {
    notification.open({
      placement: type,
      message: 'Notification Title',
      description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
    });
  }
  render () {
    const options = ['topLeft', 'topRight', 'bottomLeft', 'bottomRight'];
    return(
      <div>
        <Card title="基本用法" className="Card">
          <p>最简单的用法，4.5 秒后自动关闭。</p>
          <Button type="primary" onClick={() =>this.openNotification()}>基本用法</Button>
        </Card>
        <Card title="带有图标的消息通知" className="Card">
          <p>通知提醒框左侧有图标。</p>
          <Button onClick={() => this.openNotificationWithIcon('success')}>Success</Button>
          <Button onClick={() => this.openNotificationWithIcon('info')}>Info</Button>
          <Button onClick={() => this.openNotificationWithIcon('warning')}>Warning</Button>
          <Button onClick={() => this.openNotificationWithIcon('error')}>Error</Button>
        </Card>
        <Card title="自定义图标" className="Card">
          <p>图标可以被自定义。</p>
          <Button type="primary" onClick={() => {this.openNotification1()}}>自定义图标</Button>
        </Card>
        <Card title="取消自动关闭" className="Card">
          <p>自定义通知框自动关闭的延时，默认4.5s，取消自动关闭只要将该值设为 0 即可。</p>
          <Button type="primary" onClick={() => {this.openNotification2()}}>取消自动关闭</Button>
        </Card>
        <Card title="自定义按钮" className="Card">
          <p>自定义关闭按钮的样式和文字。</p>
          <Button type="primary" onClick={() => {this.openNotification3()}}>自定义按钮</Button>
        </Card>
        <Card title="位置" className="Card">
          <p>可以设置通知从右上角、右下角、左下角、左上角弹出。</p>
          {
            options.map(v => {
              return <Button type="primary" onClick={() => {this.openNotification4(v)}}>{v}</Button>
            })
          }
        </Card>
      </div>
    )
  }
}