const express = require('express'); //importing Express library to set up web server
const app = express();
const port = 4000; //define port on which server will listen

/*
    CORS - allows frontend and backend to run on different domains/ports
    CORS is a security feature in web dev that allows or restricts resources on a web page
    from being requested from another domain
*/
const cors = require('cors');
app.use(cors()); //applying CORS to allow cross-origin requests

//Manually set headers
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); //allows any domain to access API
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS"); //specifies allowed HTTP methods
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept"); //specifies allowed headers
  next(); //passes control to the next middleware function
});

//bodyParser to parse incoming requests - extracts JSON data
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true })); //parses URL-encoded data
app.use(bodyParser.json()); //parses JSON data from the request body for easier access

//basic GET route at URL '/'
app.get('/', (req, res) => {
    res.send('Hello World');
});

//POST route to add new movie
app.post('/api/movies', (req, res) => {
    res.send('movie added');
});

//GET route to retrieve list of movies
app.get('/api/movies', (req, res) => {
    const movies = [
        {
            "Title": "Avengers: Infinity War",
            "Year": "2018",
            "imdbID": "tt4154756",
            "Type": "movie",
             "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
        },
        {
            "Title": "Captain America: Civil War",
            "Year": "2016",
            "imdbID": "tt3498820",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
        },
        {
            "Title": "World War Z",
            "Year": "2013",
            "imdbID": "tt0816711",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BNDQ4YzFmNzktMmM5ZC00MDZjLTk1OTktNDE2ODE4YjM2MjJjXkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg"
        }
    ];
    res.status(200).json({ movies }); //sends back movies array as JSON
});

//starts server on specified port and logs message to console
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
