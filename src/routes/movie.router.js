const express = require('express');
const {addMovie, addBulkMovie, getTopMovies} = require("../controller/movie.controller");
const movieRouter = express.Router();

movieRouter.post('/add', addMovie);
movieRouter.post('/bulk-add', addBulkMovie);
movieRouter.get('/top', getTopMovies);
movieRouter.get('/', addBulkMovie);



module.exports = movieRouter;