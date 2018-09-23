import React from 'react';
import menuList from '../../config/menuconfig';
import {Link} from 'react-router-dom';
import { Menu } from 'antd';
import './index.styl'
const SubMenu = Menu.SubMenu;


export default class NavLeft extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      theme: 'dark',
      current: '1'
    }
  }
  componentWillMount () {
    const menuTreeNode = this.renderMenu(menuList);
    this.setState({
      menuTreeNode
    })
  }
  renderMenu = (data) => {
    return data.map(item => {
      if (item.children) {
        return (
          <SubMenu title={item.title} key={item.key} >
            {this.renderMenu(item.children)}
          </SubMenu>
        )
      }
      return <Menu.Item title={item.title} key={item.key}>
        <Link to={item.key}>{item.title}</Link>
      </Menu.Item>
    })
  }
  handleClick = (e) => {
    this.setState({
      current: e.key,
    });
  }
  render () {
    return (
      <div className="nav_left_container">
        <div className="logo">
          <img src="../../assets/logo-antd.svg" alt=""/>
          <h1>OFO MS</h1>
        </div>
        <Menu
          theme={this.state.theme}
          onClick={this.handleClick}
          style={{ width: 256 }}
          defaultOpenKeys={['sub1']}
          selectedKeys={[this.state.current]}
          mode="inline"
        >
          {
            this.state.menuTreeNode
          }
        </Menu>
      </div>
    )
  }
}