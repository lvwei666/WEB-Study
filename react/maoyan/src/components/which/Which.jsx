import React, { Component } from 'react';
import './which.styl';
class Which extends Component {
  state = {  }
  componentDidMount() {
    console.log(this.props.match.url)
  }
  back = () => {
    window.history.back();
  }
  render() {
    return (
      <>
      <header className="navbar">
        <div className="nav-wrap-left">
          <a href="#" className="back" onClick={this.back}>
            <i className="icon-back"></i>
          </a>
        </div>
        <h1 className="nav-header">狮子王</h1>
      </header>
      <div className="movie-detail">
        <div className="movie-filter"></div>
        <div className="poster-bg"></div>
        <div className="detail box-flex">
          <div className="poster-two">
            <img src="http://p0.meituan.net/148.208/moviemachine/7b9b0725ab5feae642e1fbba9fbb90fe3702078.jpg" alt="" width="85" height="115"/>
          </div>
          <div className="content flex">
            <div className="title middle line-ellipsis">狮子王</div>
            <div className="title-en-name line-ellipsis">The Lion King</div>
            <div className="score line-ellipsis">8.9 <span className="snum">(9.4万人评)</span></div>
            <div className="type line-ellipsis">
              <span>剧情,动画,冒险</span>
              <div className="type-group">
                <img src="" alt=""className="sd-imax"/>
              </div>
            </div>
            <div className="src line-ellipsis">美国/118分钟</div>
            <div className="pubDesc line-ellipsis">2019-07-12大陆上映</div>
          </div>
          <div className="arrow-g">
            <img src="../../assets/images/arrow.png" alt=""/>
          </div>
        </div>
      </div>
      </>
    );
  }
}

export default Which;