import React, { Component } from 'react';
import Movies from '../../common/movies/Movies';
import { getMovies } from '../../api/axios/movies';
import debounce from '../../api/debounce/index';
import './search.styl';
class Search extends Component {
  constructor(props) {
    super(props);
    this.debounceOnChange = debounce(this.debounceOnChange.bind(this), 500)
  }
  state = { 
    allMovies: [],
    searchMovie: []
   }
  back = () => {
    window.history.back();
  }
  componentDidMount() {
    getMovies().then(res => {
      this.setState({
        allMovies: res.data.data.movieList
      })
    })
  }

  debounceOnChange = (e) => {
    let value = e.target.value;
    if (value !== '') {
      let searchMovie = this.state.allMovies.slice(0).filter((item) => {
        return item.nm.includes(value)
      })
      this.setState({
        searchMovie
      })
    }
  }
  _onChange = (e) => {
    e.persist();
    this.debounceOnChange(e);
  }
  render() {
    const { searchMovie } = this.state;
    return (
      <>
      <header className="navbar">
      <div className="nav-wrap-left">
        <a href="#" className="back" onClick={this.back}>
          <i className="icon-back"></i>
        </a>
      </div>
      <h1 className="nav-header">猫眼电影</h1>
    </header>
    <div className="search-body">
      <div className="search-wrapper">
        <div className="search-header">
          <div className="input-wrapper">
            <img src={[require('../../assets/images/searchCinema.png')]} alt="" className="search-icon-in"/>
            <input onChange={this._onChange} type="text" className="search-input" type="text" placeholder="搜电影"/>
          </div>
          <div className="cancel" onClick={this.back}>取消</div>
        </div>
      </div>
      <div className="search-result">
        {
          searchMovie.map((movie, index) => {
            return (
              <Movies movie={movie} key={index}></Movies>
            )
          })
        }
      </div>
    </div>
    </>
    );
  }
}

export default Search;