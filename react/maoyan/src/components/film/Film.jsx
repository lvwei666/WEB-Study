import React, { Component } from 'react'; 
import Movies from '../../common/movies/Movies';
import { getMovies, getMovies2, getMovies3 } from '../../api/movies';
import Expected from '../../common/expected/Expected';
import 'antd/dist/antd.css';
import './film.css';
import { Tabs } from 'antd';
const { TabPane } = Tabs;
class Film extends Component {
  state = { 
    height: 0,
    movies: [],
    movies3: []
   }
   componentDidMount() {
    let height = document.body.clientHeight - 144;
    this.setState({
      height
    })
    this.gMovie()
    this.gMovie2()
    this.gMovie3()
  }
  gMovie = () => {
    getMovies().then(res => {
      // console.log(res)
      this.setState({
        movies: res.data.data.movieList
      })
    })
  }
  gMovie2 = () => {
    getMovies2().then(res => {
      // console.log(res)
      this.setState({
        coming: res.data.data.coming
      })
    })
  }
  gMovie3 = () => {
    getMovies3().then(res => {
      // console.log(res)
      this.setState({
        movies3: res.data.data.coming
      })
    })
  }
  render() {
    const { height, movies, coming, movies3 } = this.state;
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
              <div className="movie" style={{height: `${height}px`}}>
                <Movies movies={movies}/>
              </div>
            </TabPane>
            <TabPane tab="即将上映" key="2">
              <div className="most-expected" style={{height: `${height}px`}}>
                <p className="title">近期最受期待</p>
                <div className="most-expected-list">
                  <Expected coming={coming}/>
                </div>
                <div className="coming-list">
                <p className="group-date">7月12日 周五</p>
                <Movies movies={movies3}/>
                </div>
              </div>
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
}

export default Film;