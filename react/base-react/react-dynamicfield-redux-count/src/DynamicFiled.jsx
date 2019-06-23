import React from 'react';
import { Input, Button, Divider } from 'antd';

function Filed(props) {
  const { value, index } = props;
  return (
    <div>
      <Divider></Divider>
      <div>
        姓名：<Input value={value.name} placeholder="姓名" onChange={(e) => {
          props.onChange(e.target.value, 'name', index)
        }}></Input>
      </div>
      <div>
        地址：<Input value={value.address} placeholder="地址" onChange={(e) => {
          props.onChange(e.target.value, 'address', index)
        }}></Input>
      </div>
      <Divider></Divider>
      <Button type="primary" onClick={() => {
        props.onDelete(index)
      }}>删除</Button>
      <Divider></Divider>
    </div>
  )
}
class DynamicFiled  extends React.Component {
  state = {
    lists: [
      {
        name: '',
        address: ''
      }
    ]
  }
  handleChange = (value, key, i) => {
    let lists = this.state.lists.slice(0);
    const obj = lists[i];
    // {
    //   name: '123',
    //   address: '456',
    //   name: '789'
    // } name address
    const newObj = {
      ...obj,
      [key]: value
    }
    lists[i] = newObj;
    this.setState({
      lists
    })
  }
  handleDelete = (i) => {
    const lists = this.state.lists.slice(0);
    lists.splice(i, 1);
    this.setState({
      lists
    })
  }
  handleAddFiled = () => {
    let lists = this.state.lists.slice(0);
    lists.push({
      name: '',
      address: ''
    })
    this.setState({
      lists
    })
  }
  render() {
    const { lists } = this.state;
    return (
      <div>
        {
          lists.map((list, i) => {
            return <Filed key={i} value={list} onChange={this.handleChange} index={i} onDelete={this.handleDelete}></Filed>
          })
        }
        <Button type="primary" onClick={this.handleAddFiled}>添加</Button>
      </div>
    )
  }
}

export default DynamicFiled ;