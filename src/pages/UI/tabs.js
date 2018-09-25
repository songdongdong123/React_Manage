import React from 'react'
import { Card, Tabs, Icon, Radio, Button  } from 'antd'
import './base.styl'
const TabPane = Tabs.TabPane;
export default class Modals extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: 'top',
    };
  }
  callback(key) {
    console.log(key);
  }
  handleModeChange = (e) => {
    const mode = e.target.value;
    this.setState({ mode });
  }
  render () {
    const { mode } = this.state;
    const operations = <Button onClick = {() => {
      console.log(0)
    }}>Extra Action</Button>;
    return(
      <div>
        <Card title="基本用法" className="Card">
          <p>默认选中第一项。</p>
          <Tabs defaultActiveKey="1" onChange={(key) => this.callback(key)}>
            <TabPane tab="Tab 1" key="1">Content of Tab Pane 1</TabPane>
            <TabPane tab="Tab 2" key="2">Content of Tab Pane 2</TabPane>
            <TabPane tab="Tab 3" key="3">Content of Tab Pane 3</TabPane>
          </Tabs>
        </Card>
        <Card title="禁用" className="Card">
          <p>禁用某一项。</p>
          <Tabs defaultActiveKey="1">
            <TabPane tab="Tab 1" key="1">Tab 1</TabPane>
            <TabPane tab="Tab 2" disabled key="2">Tab 2</TabPane>
            <TabPane tab="Tab 3" key="3">Tab 3</TabPane>
          </Tabs>
        </Card>
        <Card title="图标" className="Card">
          <p>有图标的标签。</p>
          <Tabs defaultActiveKey="2">
            <TabPane tab={<span><Icon type="apple" />Tab 1</span>} key="1">
              Tab 1
            </TabPane>
            <TabPane tab={<span><Icon type="android" />Tab 2</span>} key="2">
              Tab 2
            </TabPane>
          </Tabs>
        </Card>
        <Card title="滑动" className="Card">
          <p>可以左右、上下滑动，容纳更多标签。</p>
          <Radio.Group onChange={this.handleModeChange} value={mode} style={{ marginBottom: 8 }}>
            <Radio.Button value="top">Horizontal</Radio.Button>
            <Radio.Button value="left">Vertical</Radio.Button>
          </Radio.Group>
          <Tabs
            defaultActiveKey="1"
            tabPosition={mode}
            style={{ height: 220 }}
          >
            <TabPane tab="Tab 1" key="1">Content of tab 1</TabPane>
            <TabPane tab="Tab 2" key="2">Content of tab 2</TabPane>
            <TabPane tab="Tab 3" key="3">Content of tab 3</TabPane>
            <TabPane tab="Tab 4" key="4">Content of tab 4</TabPane>
            <TabPane tab="Tab 5" key="5">Content of tab 5</TabPane>
            <TabPane tab="Tab 6" key="6">Content of tab 6</TabPane>
            <TabPane tab="Tab 7" key="7">Content of tab 7</TabPane>
            <TabPane tab="Tab 8" key="8">Content of tab 8</TabPane>
            <TabPane tab="Tab 9" key="9">Content of tab 9</TabPane>
            <TabPane tab="Tab 10" key="10">Content of tab 10</TabPane>
            <TabPane tab="Tab 11" key="11">Content of tab 11</TabPane>
          </Tabs>
        </Card>
        <Card title="附加内容" className="Card">
          <p>可以在页签右边添加附加操作。</p>
          <Tabs tabBarExtraContent={operations}>
            <TabPane tab="Tab 1" key="1">Content of tab 1</TabPane>
            <TabPane tab="Tab 2" key="2">Content of tab 2</TabPane>
            <TabPane tab="Tab 3" key="3">Content of tab 3</TabPane>
          </Tabs>
        </Card>
      </div>
    )
  }
}