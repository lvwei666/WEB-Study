import React, { Component } from 'react';
import './expected.styl';
class Expected extends Component {
  state = {}
  render() {
    const { come } = this.props;
    return (
      <div className="expected-item">
        <div className="poster default-img-bg">
          <img src={come.img} alt="" />
          <span className="whis-bg"></span>
          <span className="wish">
            <span className="wish-num">{come.wish}</span> 人想看
          </span>
          <div className="toggle-wish">
            <span></span>
          </div>
        </div>
        <h5 className="name">{come.nm}</h5>
        <p className="date">{come.comingTitle}</p>
      </div>
    );
  }
}

export default Expected;