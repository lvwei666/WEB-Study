import React from 'react';
import Movies from './components/movies/Movies';
import 'antd/dist/antd.css';
import './App.css';
import { Tabs } from 'antd';
const { TabPane } = Tabs;

function App() {
  return (
    <div className="App">
      <header className="header-nav">猫眼电影</header>
      <div className="topbar">
        <div className="left">
          <span className="city-name">南昌</span>
          <i className="arrow"></i>
        </div>
        <div className="mid">
          <Tabs defaultActiveKey="1">
            <TabPane tab="正在热映" key="1">
              <Movies />
            </TabPane>
            <TabPane tab="即将上映" key="2">
              Content of Tab Pane 2
            </TabPane>
          </Tabs>
        </div>
        <div className="right">
          <div className="search-icon"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
