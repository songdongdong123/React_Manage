import React from 'react';
import { Card, Form, Icon, Input, Button } from 'antd';
import './base.styl'
const FormItem = Form.Item;
class Login extends React.Component {
  render () {
    const { getFieldDecorator, getFieldsError, getFieldError, isFieldTouched } = this.props.form;
    return (
      <div className="Login">
        <Card title="登录行内表单" className="Card">
          <Form layout="inline" onSubmit={this.handleSubmit}>
            <FormItem>
              {
                getFieldDecorator('username', {
                  initialValue: '',
                  rules: [{
                    required: true, // 该字段不能该为空
                    message: '用户名不能为空'
                  }]
                })(<Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入用户名"></Input>)
              }
            </FormItem>
            <FormItem>
              {
                getFieldDecorator('userpwd', {
                  initialValue: '',
                  rules: [{
                    required: true,
                    message: ''
                  }]
                })(<Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入用户名"></Input>)
              }
            </FormItem>
            <FormItem>
              <Button type="primary" onClick={() => {
                this.handleSubmit()
              }}>登录</Button>
            </FormItem>
          </Form>
        </Card>
        <Card title="登录水平表单" className="Card">
          <Form onSubmit={this.handleSubmit} style={{width:300}}>
            <FormItem>
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入用户名"></Input>
            </FormItem>
            <FormItem>
              <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="请输入密码"></Input>
            </FormItem>
            <FormItem>
              <Button type="primary">登录</Button>
            </FormItem>
          </Form>
        </Card>
      </div>
    )
  }
}
export default Form.create()(Login);