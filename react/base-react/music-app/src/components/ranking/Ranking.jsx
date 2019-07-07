import React, { Component } from 'react';
class Ranking extends Component {
  state = { 
    value: ''
  }
  handle = (e) => {
    this.setState({
      value: e.target.value
    })
  }
  render() { 
    const { lists, addTodo, isTrue, handleIsTrue } = this.props;
    const value = this.state.value;
    console.log(lists)
    return ( 
      <div>
        <input type="text" onChange={this.handle}/>
        <button onClick={() => addTodo(value)}>添加</button>
        <div className="todoList">
          <ul>
            {
              lists.map((list, index) => {
                return (
                  <li style={{textDecoration: isTrue && "line-through"}} onClick={() => handleIsTrue(!isTrue)} key={index}>{list}</li>
                )
              })
            }
          </ul>
        </div>
      </div>
     );
  }
}
 
export default Ranking;
