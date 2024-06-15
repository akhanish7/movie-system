const {MOVIE_MODEL} = require("../models");
const moment = require('moment');

const addMovie = async (req, res) => {
    const { title, genre, releaseDate, language, revenue } = req.body;
    try {
        const newMovie = new MOVIE_MODEL({ title, genre, releaseDate, language, revenue });
         newMovie.save().then((newMovie) => {
             return res.status(201).json(newMovie);
         }).catch(error => {
             return  res.status(500).json({ error: error.message });
         })

    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

const addBulkMovie = async (req, res) => {
    const movies = req.body.movies;
    try {
        MOVIE_MODEL.insertMany(movies).then((newMovie) => {
            return res.status(201).json(newMovie);
        }).catch(error => {
            return  res.status(500).json({ error: error.message });
        })
    } catch (error) {

    }
};

const updateMovieDetails = async (req,res) => {
    try{
        const updateObj = req.body;
        const movieId = req.params.id;
        await MOVIE_MODEL.findOneAndUpdate({_id : movieId},{$set : updateObj}).exec();
        return  res.status(200).json({msg : 'Movie Details Updated!'});
    }catch (error) {
        res.status(500).json({ error: error.message });
    }

}

const getAllMovies = async (req,res) => {
    try{
        const movieData = await MOVIE_MODEL.find().lean().exec();
        res.status(200).json({data : movieData});
    }catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const getTopMovies = async (req,res) => {
try{
    const { genre, year, month, language } = req.query;
    let {limit} = req.query;
    if(!limit) limit=10;
    const filters = {};
    if (genre) filters.genre = genre;
    if (year && !month) {
        const startOfYear = moment(year, 'YYYY').startOf('year').toDate();
        const endOfYear = moment(year, 'YYYY').endOf('year').toDate();
        filters.releaseDate = {
            $gte: startOfYear,
            $lte: endOfYear
        };
    }
    if (year && month) {
        const startOfMonth = moment(`${year}-${month}`, 'YYYY-MM').startOf('month').toDate();
        const endOfMonth = moment(`${year}-${month}`, 'YYYY-MM').endOf('month').toDate();
        filters.releaseDate = {
            $gte: startOfMonth,
            $lte: endOfMonth
        };
    }
    if (language) filters.language = language;
    const movies = await MOVIE_MODEL.find(filters).sort({ revenue: -1 }).limit(limit);
    return res.json(movies);
}
catch (error) {
    res.status(500).json({ error: error.message });
}
}
module.exports = {addMovie,updateMovieDetails, getAllMovies, addBulkMovie, getTopMovies};