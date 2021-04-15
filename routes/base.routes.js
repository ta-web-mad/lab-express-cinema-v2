const express = require('express')
const router = express.Router()

const Movie = require('./../models/movie.model')

// Endpoints
router.get('/', (req, res) => res.render('pages/index', { siteTitle: "IronHack Cinema" }))

router.get('/list-movies', (req, res) => {

    Movie
        .find()
        .then(allMovies => res.render('pages/list-movies', { allMovies }))
        .catch(err => console.log('Error!', err))
})

router.get('/movie/:id', (req, res) => {
    Movie
        .findById(req.params.id)
        .then(movie => res.render('pages/movie', movie))
        .catch(err => console.log('Error!', err))
})

module.exports = router
