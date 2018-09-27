import React from 'react';
import { Card, Form, Icon, Input, Button, message, Checkbox } from 'antd';
import './base.styl'
const FormItem = Form.Item;
class Login extends React.Component {
  state = {
    defaultVal: ''
  }
  handleSubmit () {
    let userInfo = this.props.form.getFieldsValue();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        message.success(`${userInfo.username}`)
      }
    })
  }
  handleSubmit1 () {
    let userInfo = this.props.form.getFieldsValue();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        message.success(`${userInfo.usssername1}`)
      }
    })
  }
  handleChange (e) {
    console.log(e.target.value.replace(/\s/g,'').replace(/(.{4})/g,"$1 "))
    this.setState({
      defaultVal:e.target.value.replace(/\s/g,'').replace(/(.{4})/g,"$1 ")
    })
  }
  onValuesChange (e) {
    let userInfo = this.props.form.getFieldsValue();
    let tempValue = userInfo.value1.replace(/\s/g,'').replace(/(.{4})/g,"$1 ")
    this.props.form.setFieldsValue({
      value1: tempValue
    })
  }
  render () {
    const { getFieldDecorator } = this.props.form;
    return (
      <div className="Login">
        <Card title="登录行内表单" className="Card">
          <Input onChange={(value) => {
            this.handleChange(value)
          }} value={this.state.defaultVal} placeholder="请输入卡号"/>
          <Form layout="inline">
            <FormItem

            >
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入用户名"></Input>
            </FormItem>
            <FormItem>
              <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入用户名"></Input>
            </FormItem>
            <FormItem>
              <Button type="primary" onClick={() => {
                this.handleSubmit()
              }}>登录</Button>
            </FormItem>
          </Form>
        </Card>
        <Card title="登录水平表单" className="Card">
          <Form style={{width:300}}>
            <FormItem>
              {
                getFieldDecorator('value1', {
                  initialValue: '123',
                  rules: [{
                    required: true,
                    message: '用户名不能为空'
                  }]
                })(<Input
                  onChange={(value) => {this.onValuesChange(value)}}
                  type="phone"
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入用户名"></Input>)
              }
            </FormItem>
            <FormItem>
              {
                getFieldDecorator('userpwd1', {
                  initialValue: '12321321',
                  rules: [{ // rules是一个规则数组，可以添加多个规则，每一个规则就是一个对象
                    // 每一个对象都有若干个属性
                    required: true,
                    message: '密码不能为空'
                  }, {
                    max: 60,
                    min: 0,
                    message: '密码长度不在范围内'
                  }]
                })(<Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="请输入密码"></Input>)
              }
            </FormItem>
            <FormItem>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
              })(
                <Checkbox>Remember me</Checkbox>
              )}
              <a className="login-form-forgot" href="">Forgot password</a>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
              </Button>
              Or <a href="">register now!</a>
            </FormItem>
          </Form>
        </Card>
      </div>
    )
  }
}
export default Form.create()(Login);