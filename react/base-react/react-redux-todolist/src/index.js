import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker';
import reducer from './reducer/index'

const store = createStore(reducer)
console.log('store', store.getState());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
  
// store.subScribe(() => {
//   ReactDOM.render(<App />, document.getElementById('root'));
// })

serviceWorker.unregister();
