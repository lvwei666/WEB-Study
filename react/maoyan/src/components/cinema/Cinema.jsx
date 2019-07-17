import React, { Component } from 'react';
import { getCinema } from '../../api/axios/movies';
import Cinema from '../../common/cinema/Cinema';
import Scroll from '../../common/scroll/Scroll';
import './cinema.styl';
class Cinemas extends Component {
  state = { 
    cinemas: []
   }
  componentDidMount() {
    getCinema().then(res => {
      this.setState({
        cinemas: res.data.data.cinemas
      })
    })
  }
  render() {
    const { cinemas } = this.state;
    const height = document.body.clientHeight - 134;
    return (
      <div className="cinemas-container">
        <header className="header-nav">影院</header>
        <div className="topBar">
          <div className="city">
            <span className="city-name">南昌</span>
            <i className="arrow"></i>
          </div>
          <div className="search-input">
            <img src={[require('../../assets/images/searchCinema.png')]} alt=""/>
            <span>搜影院</span>
          </div>
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
        <div  style={{height: height}}>
        <Scroll>
          <div className="cinema-list-two">
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
      </div>
    );
  }
}

export default Cinemas;