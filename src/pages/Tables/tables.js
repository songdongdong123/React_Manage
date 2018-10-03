import React from 'react'
import { Card, Table, Divider, Tag  } from 'antd'
// import './base.styl'
const columns = [{
  title: 'Name',
  dataIndex: 'name',
  key: 'name',
  render: text => <a href="javascript:viod(0);">{text}</a>,
}, {
  title: 'Age',
  dataIndex: 'age',
  key: 'age',
}, {
  title: 'Address',
  dataIndex: 'address',
  key: 'address',
}, {
  title: 'Tags',
  key: 'tags',
  dataIndex: 'tags',
  render: tags => (
    <span>
      {tags.map(tag => <Tag color="blue" key={tag}>{tag}</Tag>)}
    </span>
  ),
}, {
  title: 'Action',
  key: 'action',
  render: (text, record) => (
    <span>
      <a href="javascript:;">Invite {record.name}</a>
      <Divider type="vertical" />
      <a href="javascript:;">Delete</a>
    </span>
  ),
}];

const data = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
  tags: ['nice', 'developer'],
}, {
  key: '2',
  name: 'Jim Green',
  age: 42,
  address: 'London No. 1 Lake Park',
  tags: ['loser'],
}, {
  key: '3',
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
  tags: ['cool', 'teacher'],
}];
export default class Modals extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  render () {
    return(
      <div>
        <Card title="基本用法" className="Card">
          <Table columns={columns} dataSource={data} />
        </Card>
        <Card title="禁用" className="Card">
          
        </Card>
        <Card title="图标" className="Card">
          
        </Card>
        <Card title="滑动" className="Card">
          
        </Card>
        <Card title="附加内容" className="Card">
          
        </Card>
      </div>
    )
  }
}