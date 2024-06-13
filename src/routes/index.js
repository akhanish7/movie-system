const express = require('express');
const movieRouter = require("./movie.router");
const mainRouter = express.Router();

mainRouter.use('/movie',movieRouter);


module.exports = mainRouter;