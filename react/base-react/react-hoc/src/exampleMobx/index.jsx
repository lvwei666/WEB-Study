import React, { Component } from 'react';
import { observable, action, computed, autorun } from 'mobx';
import { observer } from 'mobx-react';
// 应用的状态
// 任何可以从应用状态中推导出来的东西，都应该自动的推导出来
// {text: '', complete: false, id: }
let id = 0;
class Store {
  @observable todos = [];
  @action
  addTodo(text) {
    this.todos.push({
      text,
      completed: false,
      id: id++
    })
  }
  @action 
  toggleTodo(id) {
    const index = this.todos.findIndex(todo => todo.id === id);
    this.todos[index].completed = !this.todos[index].completed;
  }
  @computed
  get totalNumber() {
    return this.todos.length
  }
  @computed
  get completedNumber() {
    return this.todos.filter(todo => todo.completed).length;
  }
}

const store = new Store();
autorun(() => {
  console.log('autorun');
  // 如果不获取 observable 的值，只会执行一次
  const todos = store.todos;
  localStorage.setItem('todos', JSON.stringify(todos));
})
@observer
class TodoList extends Component {
  state = {  }
  handleSubmit = () => {
    const value = this.inputNode.value.trim();
    if (value) {
      store.addTodo(value);
    }
  }
  render() {
    return (
      <div>
        <div>
          <input type="text" ref={node => this.inputNode = node}/>
          <button onClick={this.handleSubmit}>提交</button>
        </div>
        <ul>
          {
            store.todos.map((todo, index) => {
              return <li style={{ textDecoration: todo.completed ? 'line-through' : '' }} onClick={() => {
                store.toggleTodo(todo.id)
              }} key={index}>
                { todo.text }
              </li>
            })
          }
        </ul>
        {
          store.completedNumber
        } /
        {
          store.totalNumber
        }
      </div>
    );
  }
}

export default TodoList;