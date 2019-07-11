import React, { Component } from 'react';
import './movies.css';
class Movies extends Component {
  state = { }
  render() {
    const { movies } = this.props;
    return (
        <div>
        {
          movies.map((movie, index) => {
            return (
              <div className="item" key={index}>
                <div className="main-block">
                  <div className="avatar">
                    <img src={movie.img} width="64" height="90" alt=""/>
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
                          movie.globalReleased ? <div className="show-info">{movie.showInfo}</div> : <div className="show-info">{movie.rt}上映</div>
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