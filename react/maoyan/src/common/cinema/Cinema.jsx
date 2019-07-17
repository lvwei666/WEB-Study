import React, { Component } from 'react';
import './cinema.styl';
class Cinema extends Component {
  state = {  }
  render() {
    const { cinema } = this.props;
    return (
      <div className="cinema-item">
        <div className="title-block">
          <div className="title line-ellipsis">
            <span>{cinema.nm}</span>
            <span className="price-block">
              <span className="price">{cinema.sellPrice}</span>
              <span className="q">元起</span>
            </span>
          </div>
          <div className="location-block">
            <div className="flex line-ellipsis">{cinema.addr}</div>
            <div className="distance">{cinema.distance}</div>
          </div>
          <div className="flex"></div>
          <div className="label-block">
            <div className="endorse">改签</div>
            <div className="snack">小吃</div>
            <div className="vipTag">折扣卡</div>
          </div>
          <div className="discount-block">
            <div>
              <div className="discount-label">
                <img src={[require('../../assets/images/card.png')]} alt=""/>
              </div>
              <div className="discount-label-text">{cinema.promotion.cardPromotionTag}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cinema;