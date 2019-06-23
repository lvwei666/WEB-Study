import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Layout from './page/Layout'
import 'antd/dist/antd.css'
import logo from './logo.svg';
// import './App.css';

function App() {
  return (
    <Router>
      <Route path="/" component={Layout}></Route>
    </Router>
  )
}

export default App;
