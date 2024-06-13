const {MOVIE_MODEL} = require("../models");

const addMovie = async (req, res) => {
    const { title, genre, releaseDate, language, revenue } = req.body;
    try {
        const newMovie = new MOVIE_MODEL({ title, genre, releaseDate, language, revenue });
        await newMovie.save();
        res.status(201).json(newMovie);
    } catch (error) {

    }
};

const updateMovieDetails = async (req,res) => {
    try{
        const updateObj = req.body;
        const movieId = req.params.id;
        await MOVIE_MODEL.findOneAndUpdate({_id : movieId},{$set : updateObj}).exec();
        res.status(200).json({msg : 'Movie Details Updated!'});
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

module.exports = {addMovie,updateMovieDetails, getAllMovies};