import React from 'react';
import { Card, Button, Radio, Icon } from 'antd';
import './base.styl'
export default class Buttons extends React.Component {
  state = {
    loading:true,
    size:'default'
  }
  handleCloseLoading=()=>{
   this.setState({
    loading:false
   });
 }
 handleChange = (e)=>{
    this.setState({
      size:e.target.value
    })
  }
  render () {
    return (
      <div>
        <Card title="基础按钮" className="Card">
          <Button type="primary">Ethan</Button>
          <Button>Ethan</Button>
          <Button type="dashed">Ethan</Button>
          <Button type="danger">Ethan</Button>
          <Button type="disable">Ethan</Button>
        </Card>
        <Card title="基础按钮" className="Card">
          <Button icon="plus">创建</Button>
          <Button icon="edit">编辑</Button>
          <Button type="delete">删除</Button>
          <Button type="circle" icon="search"></Button>
          <Button type="primary" icon="search">搜索</Button>
          <Button type="primary" icon="download">下载</Button>
        </Card>
        <Card title="Loading按钮" className="Card">
          <Button type="primary" loading={this.state.loading}>确定</Button>
          <Button type="primary" shape="circle" loading={this.state.loading}></Button>
          <Button loading={this.state.loading} >点击加载</Button>
          <Button shape="circle" loading={this.state.loading}></Button>
          <Button type="primary" onClick={this.handleCloseLoading}>关闭</Button>
        </Card>
        <Card title="按钮组" className="Card-btns">
          <Button.Group>
          <Button type="primary"><Icon type="left"></Icon>返回</Button>
          <Button type="primary">前进<Icon type="right"></Icon></Button>
          </Button.Group>
        </Card>
        <Card title="按钮尺寸" className="Card">
          <Radio.Group value={this.state.size} onChange={this.handleChange}>
            <Radio value="small">小</Radio>
            <Radio value="default">中</Radio>
            <Radio value="large">大</Radio>
          </Radio.Group> 
          <Button type="primary" size={this.state.size}>Ethan</Button>
          <Button size={this.state.size}>Ethan</Button>
          <Button type="dashed" size={this.state.size}>Ethan</Button>
          <Button type="danger" size={this.state.size}>Ethan</Button>
        </Card>
      </div>
    )
  }
}