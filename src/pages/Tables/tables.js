import React from 'react'
import { Card, Table, Divider, Tag  } from 'antd'
import '../UI/base.styl'
const { Column, ColumnGroup } = Table;
const columns = [{
  title: 'Name',
  dataIndex: 'name',
  render: text => <a href="javascript:;">{text}</a>,
}, {
  title: 'Age',
  dataIndex: 'age',
}, {
  title: 'Address',
  dataIndex: 'address',
}];
const datass = [{
  key: '1',
  name: 'John Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
}, {
  key: '2',
  name: 'Jim Green',
  age: 42,
  address: 'London No. 1 Lake Park',
}, {
  key: '3',
  name: 'Joe Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
}, {
  key: '4',
  name: 'Disabled User',
  age: 99,
  address: 'Sidney No. 1 Lake Park',
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
const datas = [{
  key: '1',
  firstName: 'John',
  lastName: 'Brown',
  age: 32,
  address: 'New York No. 1 Lake Park',
  tags: ['nice', 'developer'],
}, {
  key: '2',
  firstName: 'Jim',
  lastName: 'Green',
  age: 42,
  address: 'London No. 1 Lake Park',
  tags: ['loser'],
}, {
  key: '3',
  firstName: 'Joe',
  lastName: 'Black',
  age: 32,
  address: 'Sidney No. 1 Lake Park',
  tags: ['cool', 'teacher'],
}];
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: record => ({
    disabled: record.name === 'Disabled User', // Column configuration not to be checked
    name: record.name,
  }),
};
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
        <Card title="使用 JSX 风格的 API（2.5.0 以后引入）" className="Card">
          <Table dataSource={datas}>
            <ColumnGroup title="Name">
              <Column
                title="First Name"
                dataIndex="firstName"
                key="firstName"
              />
              <Column
                title="Last Name"
                dataIndex="lastName"
                key="lastName"
              />
            </ColumnGroup>
            <Column
              title="Age"
              dataIndex="age"
              key="age"
            />
            <Column
              title="Address"
              dataIndex="address"
              key="address"
            />
            <Column
              title="Tags"
              dataIndex="tags"
              key="tags"
              render={tags => (
                <span>
                  {tags.map(tag => <Tag color="blue" key={tag}>{tag}</Tag>)}
                </span>
              )}
            />
            <Column
              title="Action"
              key="action"
              render={(text, record) => (
                <span>
                  <a href="javascript:;">Invite {record.lastName}</a>
                  <Divider type="vertical" />
                  <a href="javascript:;">Delete</a>
                </span>
              )}
            />
          </Table>
        </Card>
        <Card title="第一列是联动的选择框。" className="Card">
          <p>默认点击 checkbox 触发选择行为，需要点击行触发可以参考例子：https://codesandbox.io/s/000vqw38rl</p>
           <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
        </Card>
        <Card title="滑动" className="Card">
          
        </Card>
        <Card title="附加内容" className="Card">
          
        </Card>
      </div>
    )
  }
}