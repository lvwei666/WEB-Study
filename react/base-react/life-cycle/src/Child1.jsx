import React from 'react';
 
class Child1 extends React.Component {
  state = {
    a: 1
  }

  // willMount props setState (以前)

  // 更新 state,
  // 根据返回值 {}
  // null
  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps');
    return {
      ...props,
      ...state
    };
  }
  componentDidMount() {
    console.log('componentDidMount');
  }
  // 更新
  shouldComponentUpdate() {
    console.log('shouldComponentUpdate');
    return true;
  }
  getSnapshotBeforeUpdate() {
    console.log('getSnapshotBeforeUpdate');
    return 999;
  }
  // a === undefined 以前 15.x
  // a === getSnapshotBeforeUpdate() 16.x
  componentDidUpdate(preProps, preState, a) {
    console.log('componentDidUpdate', a);
  }
  handleStateChange = () => {
    this.setState({
      a: 10
    })
  }
  render () {
    console.log('渲染的时候的 state', this.state);
    return (
      <div>
        <button onClick={this.handleStateChange}>change state</button>
        child1 Component
        <p>{this.props.count}</p>
      </div>
    )
  }
}

export default Child1;