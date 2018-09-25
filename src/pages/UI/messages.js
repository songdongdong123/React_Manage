import React from 'react'
import { Card, Button, message } from 'antd'
import './base.styl'
export default class Buttons extends React.Component {

    showMessage = (type)=>{
        message[type](type);
    }
    success () {
        message.success('This is a prompt message for success, and it will disappear in 10 seconds', 10);
    }
    success1 = () => {
        message.loading('Action in progress..', 2.5)
          .then(() => message.success('Loading finished', 2.5))
          .then(() => message.info('Loading finished is finished', 2.5));
      };
    info = () => {
        message.info('This is a normal message');
      };
    render(){
        return (
            <div>
                <Card title="普通提示" className="Card">
                    <p>信息提醒反馈。</p>
                    <Button type="primary" onClick={() => this.info()}>Display normal message</Button>
                </Card>
                <Card title="全局提示框" className="Card">
                    <Button type="primary" onClick={()=>this.showMessage('success')}>Success</Button>
                    <Button type="primary" onClick={()=>this.showMessage('info')}>Info</Button>
                    <Button type="primary" onClick={()=>this.showMessage('warning')}>Warning</Button>
                    <Button type="primary" onClick={()=>this.showMessage('error')}>Error</Button>
                    <Button type="primary" onClick={()=>this.showMessage('loading')}>Loading</Button>
                </Card>
                <Card title="自定义延迟" className="Card">
                    <p>自定义时长 10s，默认时长为 3s。</p>   
                    <Button type="primary" onClick={()=>this.success()}>Customized display duration</Button>
                </Card>
                <Card title="promise接口" className="Card">
                    <p>可以通过 then 接口在关闭后运行 callback 。以上用例将在每个 message 将要结束时通过 then 显示新的 message 。</p>   
                    <Button type="primary" onClick={()=>this.success1()}>Display a sequence of message</Button>
                </Card>
            </div>
        );
    }
}