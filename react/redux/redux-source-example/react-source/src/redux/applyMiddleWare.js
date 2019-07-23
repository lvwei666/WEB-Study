function compose(...funcs) {
  if (funcs.length === 0) {
    return arg => arg
  }

  if (funcs.length === 1) {
    return funcs[0]
  }

  return funcs.reduce((a, b) => (...args) => a(b(...args)))
}

export default function(...middlewares) {
  return (createStore) => (...arg) => {
    // reducer, preloadedState
    const store = createStore(...arg);
    let dispatch = () => {
      throw new Error(
        'Dispatching while constructing your middleware is not allowed. ' +
          'Other middleware would not be applied to this dispatch.'
      )
    }
    const middlewareAPI = {
      getState: store.getState,
      dispatch: (...args) => dispatch(...args)
    }
    // [log(middlewareAPI), thunk(middlewareAPI)];
    // [next => action => {}, next => action => {}]
    // 中间件返回的结果
    const chain = middlewares.map(middleware => middleware(middlewareAPI))
    const composeRes = compose(...chain);
    dispatch = composeRes(store.dispatch); 
    return {
      ...store,
      dispatch
    }
  }
}