const mongoose = require('mongoose');

function connectToMongoDb() {
    // Connect to MongoDB
    return mongoose.connect(process.env.MONGODB_URI);
}


module.exports = {connectToMongoDb};