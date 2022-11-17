import { useState, useEffect } from "react";
import axios from "axios";

const baseUrl = 'https://icanhazdadjoke.com/'

function Jokes() {
  const [jokes, setJokes] = useState([]);

  useEffect(function getJokesWhenMounted() {
    async function getJokes() {
      const joke = await axios.get(baseUrl, {params: {"Accept": "text/plain"}});
      console.log("joke.data", joke);
      setJokes(joke);
    };
    getJokes();
    },
    []
  );

  return (
    <div>
      <h3>Your joke is {jokes}</h3>
    </div>
  );
}

export default Jokes;