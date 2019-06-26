import React from 'react';
// import logo from './logo.svg';
import AddTo from './todo/AddTo'
import TodoLists from './todo/TodoList'
import Filter from './todo/Filter'
import './App.css';

function App() {
  return (
    <div>
      <AddTo />
      <TodoLists />
      <Filter />
    </div>
  );
}

export default App;
