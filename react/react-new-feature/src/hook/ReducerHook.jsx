import React, { useReducer } from 'react';
function reducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      throw new Error('type error');
  }
}
function Index() {
  const [state, dispatch] = useReducer(reducer, 0)
  return (
    <div>
      state: {state},
      <button onClick={() => {
        dispatch({type: 'INCREMENT'})
      }}>add</button>
    </div>
  )
}
export default Index;