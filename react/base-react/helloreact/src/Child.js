import React, { Component } from 'react';
class Child extends Component {
  state = {}
  handleAnotherFun = () => {
    console.log('handleAnotherFun');
  }
  // handleClick = (event) => {
  //   console.log(this);
  //   this.handleAnotherFun();
  //   console.log(event.target.innerHTML);
  // }
  handleClick (event) {
    console.log(this);
    this.handleAnotherFun();
    console.log(event.target.innerHTML);
    console.log(event);
  }
  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({
      inputVal: e.target.value
    })
  }
  render () {
    return (
      <div onClick={this.handleClick.bind(this)}>
        {this.props.msg}
        <input type="text" value={this.state.inputVal} onChange={this.handleChange} placeholder="7788" /> 
      </div>
    )
  }
}

export default Child;