import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Film from './components/film/Film';
import Cinemas from './components/cinema/Cinema';
import Mine from './components/mine/Mine';
import Which from './components/which/Which';
import './App.styl';

class App extends React.Component {
  state = {  }
  changeActive = (e) => {
    // console.log(e.currentTarget.getAttribute("data-index"))
    this.props.changeIndex(e.currentTarget.getAttribute('data-index'));
  }
  render () {
    const { index } = this.props;
    return (
      <Router>
      <div className="bottom-nav-bar">
        <Link to="/movie"><div className="nav-icon-wrapper" data-index="0" onClick={this.changeActive}><img className="nav-icons" src={index === "0" ? [require('./assets/images/film-active.png')] : [require('./assets/images/film.png')]} alt=""/><span className="nav-text" style={{color: index === "0" ? 'red' : 'gray'}}>电影</span></div></Link>
        <Link to="/cinema"><div className="nav-icon-wrapper" data-index="1" onClick={this.changeActive}><img className="nav-icons" src={index === "1" ? [require('./assets/images/cinema-active.png')] : [require('./assets/images/cinema.png')]} alt=""/><span className="nav-text" style={{color: index === "1" ? 'red' : 'gray'}}>影院</span></div></Link>
        <Link to="/mine"><div className="nav-icon-wrapper" data-index="2" onClick={this.changeActive}><img className="nav-icons" src={index === "2" ? [require('./assets/images/mine-active.png')] : [require('./assets/images/mine.png')]} alt=""/><span className="nav-text" style={{color: index === "2" ? 'red' : 'gray'}}>我的</span></div></Link>
      </div>
      <Switch>
        <Route path="/movie" exact component={Film}></Route>
        <Route path= "/cinema" component={Cinemas}></Route>
        <Route path="/mine" component={Mine}></Route>
        <Route path="/movie/:id" component={Which}></Route>
        <Route path="/" component={Film}></Route>
      </Switch>
      </Router>
    );
  }
}

export default App;
