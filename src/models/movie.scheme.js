const mongoose = require('mongoose');
const {movieGenre, movieLanguages} = require("../utils/app.constants");

const movieSchema = new mongoose.Schema(
    {
        title : {
            type : String,
            required : true
        },
        genre : {
            type : String,
            required : true,
            enum : movieGenre
        },
        language : {
            type : movieLanguages,
            required : true
        },
        releaseDate : {
            type : Date,
            required : true
        },
        revenue : {
            type : Number,
            required : true
        },
    });

module.exports =  mongoose.model('Movie',movieSchema);