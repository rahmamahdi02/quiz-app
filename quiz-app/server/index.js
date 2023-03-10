import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import fetch from 'node-fetch';

// For testing my API 
import fakedata  from './fakedata.js';

const app = express();
const PORT = 5000;

// Configuring cors middleware
app.use(cors());

// // Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// //creates an endpoint for the route `/`
app.get("/", (req, res) => {
    res.json("Hello Techtonica Server for a Game");
  });

// //hardcode the game response for testing reasons to don't saturate my API call. 

// app.get('/api/game', (req, res) =>{
//     res.json(fakedata);
// })


// Make the GET request for the GAME Api for grabbing all the questions 

app.get('/api/trivia/math', (req,res) => {
  const url = "https://opentdb.com/api.php?amount=5&category=19&type=multiple";
  fetch(url)
  .then((res) => res.json())
  .then((data) => {
      res.send(data);
  })
  .catch((err) => {
      console.log(err);
  });
});


app.get('/api/trivia/art', (req,res) => {
  const url = "https://opentdb.com/api.php?amount=5&category=25&difficulty=easy&type=multiple";
  fetch(url)
  .then((res) => res.json())
  .then((data) => {
      res.send(data);
  })
  .catch((err) => {
      console.log(err);
  });
});

app.get('/api/trivia/animals', (req,res) => {
  const url = "https://opentdb.com/api.php?amount=5&category=27&type=multiple";
  fetch(url)
  .then((res) => res.json())
  .then((data) => {
      res.send(data);
  })
  .catch((err) => {
      console.log(err);
  });
});

app.get('/api/trivia/history', (req,res) => {
  const url = "https://opentdb.com/api.php?amount=5&category=23&type=multiple";
  fetch(url)
  .then((res) => res.json())
  .then((data) => {
      res.send(data);
  })
  .catch((err) => {
      console.log(err);
  });
});




app.listen(PORT, () => console.log(`Mar7aba! Server running on Port http://localhost:${PORT}`));