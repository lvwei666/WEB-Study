import React, { Component } from 'react';
import connect from './connect';
class Count extends Component {
  state = {  }
  render() {
    const { count, increment, decrement, appto } = this.props;
    return (
      <div>
        count: {count}  appto: {appto}
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  count: state
})
const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({type: 'INCREMENT'}),
    decrement: () => dispatch({type: 'DECREMENT'})
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Count);