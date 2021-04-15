const express = require('express')
const router = express.Router()

const Movie = require ('./../models/Movie.model')

// Endpoints
router.get('/', (req, res) => res.render('pages/index'))

router.get('/movies', (req, res) => {

    Movie
        .find()
        .then(allMovies => res.render('pages/movies-page', { allMovies }))
        .catch(err => console.log('Error!', err))
})

router.get('/movies/:movie_id', (req, res) => {

    const { movie_id } = req.params

    Movie
        .findById(movie_id)
        .then(movie => res.send('pages/movies-details', { allMovies }))
        .catch(err => console.log('Error!', err))
})

module.exports = router
