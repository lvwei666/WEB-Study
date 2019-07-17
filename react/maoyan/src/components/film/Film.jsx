import React, { Component } from 'react'; 
import Movies from '../../common/movies/Movies';
import { getMovies, getMovies2, getMovies3 } from '../../api/axios/movies';
import Expected from '../../common/expected/Expected';
import { forceCheck } from 'react-lazyload';
import Debounce from '../../api/debounce/index';
import 'antd/dist/antd.css';
import './film.styl';
import { Tabs } from 'antd';
const { TabPane } = Tabs;
class Film extends Component {
  state = { 
    height: 0,
    movies: [],
    coming: [],
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
    this.refs.movieHot.addEventListener('scroll', Debounce(() => this.cal(), 400))
  }
  cal = () => {
    let high1 = this.refs.movieHot.scrollHeight;
    let high2 = this.refs.movieHot.clientHeight;
    if (this.refs.movieHot.scrollTop > high1 - high2 - 2) {
      this.gMovie()
    }
  }
  handleScroll = () => {
    let high3 = this.refs.expect.scrollHeight;
    let high4 = this.refs.expect.clientHeight;
    if (this.refs.expect.scrollTop > high3 - high4 - 2) {
      this.gMovie3()
    }
    forceCheck()
  }
  gMovie = () => {
    getMovies().then(res => {
      // console.log(res)
      this.setState({
        movies: this.state.movies.concat(res.data.data.movieList)
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
        movies3: this.state.movies3.concat(res.data.data.coming)
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
              <div className="movie" ref="movieHot" style={{height: `${height}px`}} onScroll={forceCheck}>
                {
                  movies.map((movie, index) => {
                    return (
                      <Movies movie={movie} key={index}/>
                    )
                  })
                }
              </div>
            </TabPane>
            <TabPane tab="即将上映" key="2">
              <div className="most-expected" style={{height: `${height}px`}} onScroll={this.handleScroll} ref="expect">
                <p className="title">近期最受期待</p>
                <div className="most-expected-list">
                  {
                    coming.map((come, index) => {
                      return (
                        <Expected come={come} key={index}/>
                      )
                    })
                  }
                </div>
                <div className="coming-list">
                  <p className="group-date">7月12日 周五</p>
                  {
                    movies3.map((movie, index) => {
                      return (
                        <Movies movie={movie} key={index}/>
                      )
                    })
                  }
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