const {MOVIE_MODEL} = require("../models");

const addMovie = async (req, res) => {
    const { title, genre, releaseDate, language, revenue } = req.body;
    try {
        const newMovie = new MOVIE_MODEL({ title, genre, releaseDate, language, revenue });
        await newMovie.save();
        res.status(201).json(newMovie);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {addMovie};