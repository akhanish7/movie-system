const express = require('express');
const movieRouter = require("./movie.router");
const userRouter = require("./user.router");

const mainRouter = express.Router();

mainRouter.use('/movie',movieRouter);
mainRouter.use('/user',userRouter);


module.exports = mainRouter;