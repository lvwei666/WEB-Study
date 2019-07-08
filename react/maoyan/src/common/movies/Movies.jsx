import React, { Component } from 'react';
import Scroll from '../scroll/Scroll';
import './movies.css';
class Movies extends Component {
  state = { 
    refreshScroll: false,
    movies: [{globalReleased: true,
      haspromotionTag: false,
      id: 1218141,
      img: "http://p0.meituan.net/w.h/movie/8d3efdc44af04c3254fc9e4ad5334ae32660685.jpg",
      img1: "https://p0.meituan.net/128.180/movie/8d3efdc44af04c3254fc9e4ad5334ae32660685.jpg",
      nm: "扫毒2天地对决",
      preShow: false,
      rt: "2019-07-05",
      sc: 9.1,
      showInfo: "今天61家影院放映1191场",
      showst: 3,
      star: "刘德华,古天乐,苗侨伟",
      version: "",
      wish: 320805,
      wishst: 0},{globalReleased: true,
        haspromotionTag: false,
        id: 1218141,
        img: "http://p0.meituan.net/w.h/movie/8d3efdc44af04c3254fc9e4ad5334ae32660685.jpg",
        img1: "https://p0.meituan.net/128.180/movie/8d3efdc44af04c3254fc9e4ad5334ae32660685.jpg",
        nm: "扫毒2天地对决",
        preShow: false,
        rt: "2019-07-05",
        sc: 9.1,
        showInfo: "今天61家影院放映1191场",
        showst: 3,
        star: "刘德华,古天乐,苗侨伟",
        version: "",
        wish: 320805,
        wishst: 0},{globalReleased: true,
          haspromotionTag: false,
          id: 1218141,
          img: "http://p0.meituan.net/w.h/movie/8d3efdc44af04c3254fc9e4ad5334ae32660685.jpg",
          img1: "https://p0.meituan.net/128.180/movie/8d3efdc44af04c3254fc9e4ad5334ae32660685.jpg",
          nm: "扫毒2天地对决",
          preShow: false,
          rt: "2019-07-05",
          sc: 9.1,
          showInfo: "今天61家影院放映1191场",
          showst: 3,
          star: "刘德华,古天乐,苗侨伟",
          version: "",
          wish: 320805,
          wishst: 0},{globalReleased: true,
            haspromotionTag: false,
            id: 1218141,
            img: "http://p0.meituan.net/w.h/movie/8d3efdc44af04c3254fc9e4ad5334ae32660685.jpg",
            img1: "https://p0.meituan.net/128.180/movie/8d3efdc44af04c3254fc9e4ad5334ae32660685.jpg",
            nm: "扫毒2天地对决",
            preShow: false,
            rt: "2019-07-05",
            sc: 9.1,
            showInfo: "今天61家影院放映1191场",
            showst: 3,
            star: "刘德华,古天乐,苗侨伟",
            version: "",
            wish: 320805,
            wishst: 0},{globalReleased: true,
              haspromotionTag: false,
              id: 1218141,
              img: "http://p0.meituan.net/w.h/movie/8d3efdc44af04c3254fc9e4ad5334ae32660685.jpg",
              img1: "https://p0.meituan.net/128.180/movie/8d3efdc44af04c3254fc9e4ad5334ae32660685.jpg",
              nm: "扫毒2天地对决",
              preShow: false,
              rt: "2019-07-05",
              sc: 9.1,
              showInfo: "今天61家影院放映1191场",
              showst: 3,
              star: "刘德华,古天乐,苗侨伟",
              version: "",
              wish: 320805,
              wishst: 0},{globalReleased: true,
                haspromotionTag: false,
                id: 1218141,
                img: "http://p0.meituan.net/w.h/movie/8d3efdc44af04c3254fc9e4ad5334ae32660685.jpg",
                img1: "https://p0.meituan.net/128.180/movie/8d3efdc44af04c3254fc9e4ad5334ae32660685.jpg",
                nm: "扫毒2天地对决",
                preShow: false,
                rt: "2019-07-05",
                sc: 9.1,
                showInfo: "今天61家影院放映1191场",
                showst: 3,
                star: "刘德华,古天乐,苗侨伟",
                version: "",
                wish: 320805,
                wishst: 0},{globalReleased: true,
                  haspromotionTag: false,
                  id: 1218141,
                  img: "http://p0.meituan.net/w.h/movie/8d3efdc44af04c3254fc9e4ad5334ae32660685.jpg",
                  img1: "https://p0.meituan.net/128.180/movie/8d3efdc44af04c3254fc9e4ad5334ae32660685.jpg",
                  nm: "扫毒2天地对决",
                  preShow: false,
                  rt: "2019-07-05",
                  sc: 9.1,
                  showInfo: "今天61家影院放映1191场",
                  showst: 3,
                  star: "刘德华,古天乐,苗侨伟",
                  version: "",
                  wish: 320805,
                  wishst: 0}]
   }
  render() {
    const { movies, refreshScroll } = this.state;
    return (
      <Scroll refresh={refreshScroll} >
      <div className="movie">
        {
          movies.map((movie, index) => {
            return (
              <div className="item" key={index}>
                <div className="main-block">
                  <div className="avatar">
                    <img src={movie.img1} width="64" height="90" alt=""/>
                  </div>
                  <div className="content-wrapper">
                    <div className="content">
                      <div className="movie-title">{movie.nm}</div>
                      <div className="detail">
                        <div className="score">
                          <span className="score-suffix">观众评 </span>
                          <span className="grade">{movie.sc}</span>
                        </div>
                        <div className="actor">主演: {movie.star}</div>
                        <div className="show-info">{movie.showInfo}</div>
                      </div>
                    </div>
                  </div>
                  <div className="button">
                    <span className="fix">购票</span>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
      </Scroll>
    );
  }
}

export default Movies;