const express = require('express')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const movieRoutes = require('./routes/movieRoutes');
const {connectToMongoDb} = require("./utils/app.utils");
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;


connectToMongoDb();

app.use(bodyParser.json());

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


}