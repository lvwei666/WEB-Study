import React from 'react';
import toast from './toast/index';
import './App.css';

const openNotificationWithIcon = type => {
  toast[type]('这是提示的内容');
};


function App() {
  return (
    <div>
      <div>
        <button onClick={() => openNotificationWithIcon('success')}>Success</button>
        <button onClick={() => openNotificationWithIcon('info')}>Info</button>
        <button onClick={() => openNotificationWithIcon('warning')}>Warning</button>
        <button onClick={() => openNotificationWithIcon('error')}>Error</button>
      </div>

    </div>
  )
}

export default App;
