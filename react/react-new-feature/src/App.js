import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import ConcurrentMode from './ConcurrentMode/index';
import Count from './hook/stateHook';
// import PrepareForEffectHook from './hook/prepareForEffectHook';
import EffectHook from './hook/effectHook';
import ReducerHook from './hook/ReducerHook';

function App() {
  return (
    <div>
      {/* <ConcurrentMode></ConcurrentMode> */}
      <Count></Count>
      {/* <PrepareForEffectHook></PrepareForEffectHook> */}
      <EffectHook></EffectHook>
      <ReducerHook></ReducerHook>
    </div>
  );
}

export default App;
