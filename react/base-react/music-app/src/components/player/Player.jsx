import React, { Component } from 'react';

class Player extends Component {
  state = {  }
  render() {
    console.log('player props', this.props);
    return (
      <div>
        player
      </div>
    );
  }
}

export default Player;