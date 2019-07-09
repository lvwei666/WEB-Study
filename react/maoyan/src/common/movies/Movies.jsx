import React, { Component } from 'react';
import { getMovies } from '../../api/movies';
import './movies.css';
class Movies extends Component {
  state = { 
    height: 0,
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
      wishst: 0},{globalReleased: false,
        haspromotionTag: false,
        id: 1218141,
        img: "http://p0.meituan.net/w.h/movie/8d3efdc44af04c3254fc9e4ad5334ae32660685.jpg",
        img1: "https://p0.meituan.net/128.180/movie/8d3efdc44af04c3254fc9e4ad5334ae32660685.jpg",
        nm: "扫毒2天地对决",
        preShow: false,
        rt: "2019-07-05",
        sc: 9.1,
        showInfo: "2019-07-12 本周五上映",
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
  componentDidMount() {
    let height = document.body.clientHeight - 144;
    this.setState({
      height
    })
    getMovies().then(res=>console.log(res))
  }
  render() {
    const { movies, height } = this.state;
    return (
      <div className="movie" style={{height: `${height}px`}}>
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
                          {
                            movie.globalReleased ? <span className="score-suffix">观众评 <span className="grade">{movie.sc}</span></span> : 
                            <span className="person">{movie.wish}<span className="p-suffix"> 人想看</span></span>
                          }
                        </div>
                        <div className="actor">主演: {movie.star}</div>
                        {
                          movie.globalReleased ? <div className="show-info">{movie.showInfo}</div> : <div className="show-info">{movie.showInfo}</div>
                        }
                      </div>
                    </div>
                  </div>
                  {
                    movie.globalReleased ? <div className="button"><span className="fix">购票</span></div> :
                    <div className="button btn"><span className="fix">预售</span></div>
                  }
                </div>
              </div>
            )
          })
        }
      </div>
    );
  }
}

export default Movies;