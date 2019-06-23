import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import Counter from './Counter';
import { createStore } from 'redux';
import countReducer from './reducer';

import * as serviceWorker from './serviceWorker';


let store = createStore(countReducer);

ReactDOM.render(<App />, document.getElementById('root'));

const renderCount = () => {
  ReactDOM.render(<Counter value={store.getState()} onIncrement={() => {
    store.dispatch({type: 'INCREMENT'})
  }} onDecrement={() => {
    store.dispatch({type: 'DECREMENT'})
  }}/>, document.getElementById('redux'));
}
renderCount();

store.subscribe(() => {
  console.log(store.getState());
  renderCount();
})

serviceWorker.unregister();
