import Movies from "./movies";
import { useEffect, useState } from "react";
/*
  useEffect - fetches data
  useState - manages component's state (movies array)
*/
import axios from "axios"; //makes HTTP requests to the backend

//fetches and displays a list of movies
const Read = () => {

  //stores the movies retrieved from the backend API
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    
    axios.get('http://localhost:4000/api/movies') //makes asynchronous request to retrieve movies from the API
      .then((response) => {
        console.log(response.data); //logs received data to the console
        setMovies(response.data.movies); //sets the movies state with the array of movies from the API response
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <div>
      <h3>Hello from read component!</h3>
  {/*Passing the movies data to the Movies component as a prop*/}
      <Movies myMovies={movies} />
    </div>
  );
}

//exports the read componenet to be used in other parts of the application
export default Read;
