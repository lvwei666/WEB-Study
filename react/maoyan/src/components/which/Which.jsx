import React, { Component } from 'react';
import { movieDetail, getCinema } from '../../api/axios/movies';
import Cinema from '../../common/cinema/Cinema';
import Scroll from '../../common/scroll/Scroll';
import './which.styl';
class Which extends Component {
  state = { 
    detailMovie: [],
    isShow: false,
    index: "0",
    cinemas: []
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
    getCinema().then(res => {
      this.setState({
        cinemas: res.data.data.cinemas,
        // height: document.body.clientHeight - 84.5
      })
    })
  }
  back = () => {
    window.history.back();
  }
  handleActive = (e) => {
    this.setState({
      index: e.target.dataset.day
    })
  }
  render() {
    const detail = this.state.detailMovie[0];
    const { isShow, index, cinemas } = this.state;
    const height = document.body.clientHeight - 84.5;
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
      <div id="showDays">
        <ul id="timeline" className="mb-line-b">
          <li className={index === "0" ? "showDay chosen" : "showDay"} data-day="0" onClick={this.handleActive}>今天07月16日</li>
          <li className={index === "1" ? "showDay chosen" : "showDay"} data-day="1" onClick={this.handleActive}>明天07月17日</li>
          <li className={index === "2" ? "showDay chosen" : "showDay"} data-day="2" onClick={this.handleActive}>后天07月18日</li>
          <li className={index === "3" ? "showDay chosen" : "showDay"} data-day="3" onClick={this.handleActive}>周五07月19日</li>
          <li className={index === "4" ? "showDay chosen" : "showDay"} data-day="4" onClick={this.handleActive}>周六07月20日</li>
          <li className={index === "5" ? "showDay chosen" : "showDay"} data-day="5" onClick={this.handleActive}>周日07月21日</li>
        </ul>
      </div>
      <div className="nav-wrap filter-nav-wrap">
        <div className="tab mb-line-b">
          <div className="item">全城<span className="drop"></span></div>
          <div className="item">品牌<span className="drop"></span></div>
          <div className="item">特色<span className="drop"></span></div>
        </div>
        <div className="close-tab">
          <div className="tab-content"></div>
        </div>
      </div>
      <div style={{height: height}}>
        <Scroll>
        <div className="cinema-list">
          {
            cinemas.map((cinema, index) => {
              return (
                <Cinema cinema={cinema} key={index}></Cinema>
              )
            })
          }
        </div>
        </Scroll>
      </div>
      </>
    );
  }
}

export default Which;