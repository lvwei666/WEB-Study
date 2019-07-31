import React, { Component } from 'react';
import { connect } from 'react-redux'

let generateID = -1;
class AddTo extends Component {
  // state = {}
  constructor() {
    super();
    this.state = {
      val: 0
    };
  }
  
  componentDidMount() {
    this.setState({val: this.state.val + 1});
    console.log(this.state.val);    // 第 1 次 log

    this.setState({val: this.state.val + 1});
    console.log(this.state.val);    // 第 2 次 log

    setTimeout(() => {
      this.setState({val: this.state.val + 1});
      console.log(this.state.val);  // 第 3 次 log

      this.setState({val: this.state.val + 1});
      console.log(this.state.val);  // 第 4 次 log
    }, 0);
  }
  render() {
    const { dispatch } = this.props
    console.log(this.props);
    return (
      <div>
        <form onSubmit={e => {
          e.preventDefault();
          if (this.inputNode.value.trim()) {
            // 添加
            generateID++;
            dispatch({
              type: 'ADD_TODO',
              id: generateID,
              text: this.inputNode.value.trim()
            })
          }
        }}>
          <input type="text" ref={node => this.inputNode = node} />
          <button type="submit">
            addToDo
          </button>
        </form>
      </div>
    );
  }
}

// 1.mapStatetoProps  将状态映射为 props
// 2.mapDispatchToProps  将dispatch映射为 props
// export default connect(
//   (state) => {
//   console.log('connect', state);
//   return { a: 1 }
// }, 
//   (dispatch) => {
//   return {
//     b: () => {
//       console.log('b');
//     }
//   }
// })(AddTo);

export default connect()(AddTo)