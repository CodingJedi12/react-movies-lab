import React, {useState} from 'react';
import Form from './components/Form';
import MovieDisplay from './components/MovieDisplay';
import './App.css';

function App() {

  const apiKey = "d5e0e2dc&t"

  const [movie, setMovie] = useState(null);

  const getMovie = async (searchTerm) => {
    //make a fetch request and store the response
    const response = await fetch(
    `http://www.omdbapi.com/?apikey=${apiKey}&t=${searchTerm}`
  );
  //parse JSON response into a js object
  const data = await response.json();
  setMovie(data);
}

//attempt to find a random movie to populate the page on default render
const getRandom = async (searchTerm) => {
  //make a fetch request and store the response
  const randomId = Math.floor(Math.random()*10000000);
  console.log(randomId)
  const response = await fetch(`http://www.omdbapi.com/?apikey=${apiKey}&i=tt${randomId}`);
//parse JSON response into a js object
const data = await response.json();
setMovie(data);
}

  //essentially sets default render
  React.useEffect(() => { 
    getRandom();
  }, []);


  return (
    <div className="App">
      <Form moviesearch={getMovie}/>
      <MovieDisplay movie={movie}/>
    </div>
  );
}

export default App;