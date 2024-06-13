const express = require('express')
const {connectToMongoDb} = require("./utils/app.utils");
const mainRouter = require("./routes");
const {json} = require("body-parser");

const env = process.env;
//* Load ENVIRONMENT Configuration
require('dotenv').config();
let configFileName = null;
if (process.env.NODE_ENV === 'loc') configFileName = 'loc';
if (process.env.NODE_ENV === 'production') configFileName = 'prod';
require('dotenv').config({ path: __dirname + `/../env/${configFileName}.env` });
// --------------------------------------------------------------------------------- //

const PORT = process.env.PORT || 3000;


function initializeMiddlewares(app){
    // Middleware
    app.use(json());
    app.use('/',mainRouter);
}

async function start(app) {
    try{
        await connectToMongoDb();
        await initializeMiddlewares(app);
        await app.listen(PORT);
        return `Server running on port ${PORT}`;
    }
    catch (e){
        return e;
    }
}


exports.start = start;
