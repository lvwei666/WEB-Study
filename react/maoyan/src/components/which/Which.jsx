import React, { Component } from 'react';
import { movieDetail } from '../../api/axios/movies';
import './which.styl';
class Which extends Component {
  state = { 
    detailMovie: [],
    isShow: false
   }
  componentWillMount() {
    // console.log(this.props.match.url.replace('/movie/', ''))
    movieDetail().then(res => {
      // console.log(res.data.data.detailMovie[1])
      this.setState({
        detailMovie : res.data.data.detailMovie.filter(item => item.id == this.props.match.url.replace('/movie/', '')),
        isShow: true
      })
    })
  }
  back = () => {
    window.history.back();
  }
  render() {
    const detail = this.state.detailMovie[0];
    const { isShow } = this.state;
    return (
      <>
      <header className="navbar">
        <div className="nav-wrap-left">
          <a href="#" className="back" onClick={this.back}>
            <i className="icon-back"></i>
          </a>
        </div>
        <h1 className="nav-header">{isShow ? `${detail.nm}` : `正在加载中...`}</h1>
      </header>
      <div className="movie-detail">
        <div className="movie-filter"></div>
        <div className="poster-bg" style={{backgroundImage: `url(${isShow ? `${detail.img}` : ``})` }}></div>
        <div className="detail box-flex">
          <div className="poster-two">
            <img src={isShow ? `${detail.img}` : ``} alt=""/>
          </div>
          <div className="content flex">
            <div className="title-two middle line-ellipsis">{isShow ? `${detail.nm}` : ``}</div>
            <div className="title-en-name line-ellipsis">{isShow ? `${detail.enm}` : ``}</div>
            <div className="score line-ellipsis">{isShow ? `${detail.sc}` : ``} <span className="snum">{isShow ? `(${detail.snum >= 10000 ? `${(detail.snum / 10000).toFixed(1)}万` : detail.snum}人评分)` : ``}</span></div>
            <div className="type line-ellipsis">
              <span>{isShow ? `${detail.cat}` : ``}</span>
            </div>
            <div className="src line-ellipsis">{isShow ? `${detail.src}/` : ``}{isShow ? `${detail.dur}分钟` : ``}</div>
            <div className="pubDesc line-ellipsis">{isShow ? `${detail.pubDesc}` : ``}</div>
          </div>
        </div>
        <div className="arrow-g">
          <img src={[require('../../assets/images/arrow.png')]} alt=""/>
        </div>
      </div>
      </>
    );
  }
}

export default Which;