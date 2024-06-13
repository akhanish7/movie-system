const express = require('express');
const {addMovie} = require("../controller/movie.controller");
const movieRouter = express.Router();

movieRouter.post('/movies', addMovie);


module.exports = movieRouter;