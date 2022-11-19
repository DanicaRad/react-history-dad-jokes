import React, { Component} from 'react';

class Joke extends Component {
  constructor(props) {
    super(props);
    this.state = {
      netScore : 0
    }
  }

  upVote = () => {
    this.setState ({ upVote: this.state.netScore += 1});
  }

  downVote = () => {
    this.setState ({ downVote: this.state.netScore -= 1});
  }

  render() {
    return (
      <div key={this.props.id}>
        <p>{this.props.joke}</p>
        <button onClick={this.upVote}>+</button>
        <button onClick={this.downVote}>-</button>
        <span>net score: {this.state.netScore}</span>
      </div>
    )
  }
}
export default Joke;