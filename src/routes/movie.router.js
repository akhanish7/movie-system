const express = require('express');
const {addMovie, addBulkMovie} = require("../controller/movie.controller");
const movieRouter = express.Router();

movieRouter.post('/add', addMovie);
movieRouter.post('/bulk-add', addBulkMovie);
movieRouter.get('/', addBulkMovie);


module.exports = movieRouter;