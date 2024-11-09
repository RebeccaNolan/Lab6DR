import { useState } from "react";
import axios from "axios";

//renders form to add a movie by sending data to the backend API
const Create = () => {

    //declaring state variables to hold form inputs
    const [title, setTitle] = useState('');
    const [year, setYear] = useState('');
    const [poster, setPoster] = useState('');

    // triggered when form is submitted
    const handleSubmit = (e) => {
    e.preventDefault();

        //logs current values for debugging
    console.log(`Title: ${title}, Year: ${year}, Poster: ${poster}`);

    //object representing new movie to be sent to the API
    const movie = {
      title: title,
      year: year,
      poster: poster
    };

    //sends POST req to API to create new movie with form data
    axios.post('http://localhost:4000/api/movies', movie) //call our backend API
      .then((res) => console.log(res.data)) //logs response from server if successful
      .catch((err) => console.log(err.data));
  };

    return (
        <div>
            <h3>Hello from create component!</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Add Movie Title: </label>
                    <input type="text"
                        className="form-control"
                        value={title}
                        onChange={(e) => { setTitle(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Add Movie Year: </label>
                    <input type="text"
                        className="form-control"
                        value={year}
                        onChange={(e) => { setYear(e.target.value) }}
                    />
                </div>
                <div className="form-group">
                    <label>Add Movie Poster: </label>
                    <input type="text"
                        className="form-control"
                        value={poster}
                        onChange={(e) => { setPoster(e.target.value) }}
                    />
                </div>
                <div>
                    <input type="submit" value="Add Movie"></input>
                </div>
            </form>
        </div>
    );
}
export default Create;
