import React from 'react';

class CommentList extends React.Component {

  render () {
    const { commentLists } = this.props;
    return (
      <ul>
        {
          commentLists.map(({userName, comment}, i) => (
            <li key={i}>
              { userName }
              { comment }
            </li>
          ))
        }
      </ul>
    )
  }
}

export default CommentList;