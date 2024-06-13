const {MOVIE_MODEL} = require("../models");

const addMovie = async (req, res) => {
    const { title, genre, releaseDate, language, revenue } = req.body;
    try {
        await MOVIE_MODEL.create({ title, genre, releaseDate, language, revenue })
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

module.exports = {addMovie,updateMovieDetails, getAllMovies, addBulkMovie};