import React from 'react';
import propTypes from 'prop-types';

class MyButton extends React.Component {
  render() {
    return (
      <button style={{backgroundColor: this.context.color}}>
        { this.props.children }
      </button>
    )
  }
}
MyButton.contextTypes = {
  color: propTypes.string
}
class Message extends React.Component {
  shouldComponentUpdate() {
    return false;
  }
  render() {
    return (
      <div>
        { this.props.text }
        <MyButton>delete</MyButton>
      </div>
    )
  }
}
class Context extends React.Component {
  state = {
    msgs: ['msg1', 'msg2', 'msg3'],
    theme: 'green'
  }
  getChildContext() {
    return { color: this.state.theme }
  }
  handleToggleTheme = () => {
    this.setState({
      theme: 'greenyellow'
    })
  }
  render () {
    const msgNodes = this.state.msgs.map((msg, i) => {
      return (<Message text={msg} key={i}/>)
    })
    return (
      <div>
        <button onClick={this.handleToggleTheme}>切换主题</button>
        { this.props.children }
        { msgNodes }
      </div>
    ) 
  }
}
Context.childContextTypes = {
  color: propTypes.string
}
// react 提供了一个类型的npm 包

export default Context;