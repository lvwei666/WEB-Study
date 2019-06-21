import React from 'react';
import CommentInput from './commentInput';
import CommentList from './commentList';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  state = {
    commentLists: []
  }
  handleSubmit = (val) => {
    console.log("从子组件", val);
    let commentLists = this.state.commentLists.slice(0);
    commentLists.push(val);
    this.setState({
      commentLists
    })
  }
  render () {
    const { commentLists } = this.state;
    return (
      <div>
        <CommentInput onSubmit={this.handleSubmit}/> 
        <CommentList commentLists={commentLists}/>
      </div>
    )
  }
}
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
