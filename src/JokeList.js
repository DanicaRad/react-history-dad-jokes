import React, { Component } from "react";
import axios from "axios";
import Joke from "./Joke";

class JokeList extends Component {
  static defaultProps = {
    numJokes: 10,
  }

  constructor(props) {
    super(props);
    this.state = {
      jokes: [],
    }
  }

  componentDidMount() {
    if (this.state.jokes.length < this.props.numJokes) this.getJokes();
  }

  componentDidUpdate() {
    if (this.state.jokes.length < this.props.numJokes) this.getJokes();
  }

  async getJokes() {
    try {
      let jokes = this.state.jokes;
      while (jokes.length < this.props.numJokes) {
        let res = await axios.get('https://icanhazdadjoke.com', {headers: {"Accept": "application/json"}});
        let joke = res.data;
        if ( jokes.every(j => j.id !== joke.id) ) {
          jokes.push(joke)
        };
      }
      this.setState({ jokes })
    } catch (err) {
      console.log(err);
    }
  }

  render() {
    return (
      <div>
        <h3>Your jokes are</h3>
        {this.state.jokes.map(joke => 
        <Joke id={joke.id} joke={joke.joke}/>
          )}
      </div>
    );
  }
};

export default JokeList;
