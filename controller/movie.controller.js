const Movie = require('../models/movie.scheme');

exports.addMovie = async (req, res) => {
    const { title, genre, releaseDate, language, revenue } = req.body;
    try {
        const newMovie = new Movie({ title, genre, releaseDate, language, revenue });
        await newMovie.save();
        res.status(201).json(newMovie);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};