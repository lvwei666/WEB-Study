import { state } from './redux/state'
import { storeChange } from './redux/storeChange';
import { createStore } from './redux/createStore';

 const { store, dispatch, subscribe } = createStore(state, storeChange);


function renderHead(state) {
  console.log('render head');
  // 两个函数组件
  const head = document.getElementById('head');
  head.innerText = state.text;
  head.style.color = state.color;
  // 随意的修改
  // state.body.text = '我是经过 head 修改的 body'
  
}
function renderBody(state) {
  console.log('render body');
  const body = document.getElementById('body');
  body.innerText = state.text;
  body.style.color = state.color;
}

function renderApp(store, oldStore = {}) {
  if (store === oldStore) return;
  store.head !== oldStore.head && 
  renderHead(store.head);  //newState
  store.body !== oldStore.body &&
  renderBody(store.body);  //oldState
}
subscribe((store, oldStore) => renderApp(store, oldStore));
renderApp(store);
dispatch({ type: 'BODY_TEXT', text: '我是经过 head 修改的 body' });
// renderApp(store);  //性能开销
