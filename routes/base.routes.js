const express = require('express')
const { model } = require('mongoose')
const router = express.Router()
const Movie = require("../models/movie.model")

// Endpoints
router.get('/', (req, res) => res.render('pages/index'))
router.get("/movies", (req, res) => {
    Movie.find()
        .then(movies => {
            res.render("pages/movies", { movies });
        })
})
router.get("/movie/:id", (req, res) => {
    Movie.findById(req.params.id)
        .then(movie => {
            res.render("pages/movie-details", movie);
        })
})

module.exports = router
