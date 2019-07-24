import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import Provider from './react-redux/Provider';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const store = createStore(countReducer);
// store.subscribe(() => {
//   console.log(store.getState());
// })
function countReducer(state = 0, action) {
  switch(action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}

ReactDOM.render(<Provider store={store}>
  <App />
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
