'use strict';
const express = require('express');
const env = process.env.NODE_ENV;

const app = require('./src/app');

let expressApp = express();


app.start(expressApp)
    .then((data) => {
        console.info(data);
    })
    .catch((err) => {
        console.error(err);
    });