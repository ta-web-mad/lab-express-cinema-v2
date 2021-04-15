const express = require('express')
const router = express.Router()

const Movie = require('./../models/movie.model')

// Endpoints
router.get('/', (req, res) => res.render('pages/index'))

router.get('/movies', (req, res) => {

    Movie
        .find()
        .then(allMovies => {
            // console.log(allMovies)
            res.render('pages/movies', { allMovies })
        })
        .catch(err => console.log('There was an error', err))
})

router.get('/movie/:movie_id', (req, res) => {

    const { movie_id } = req.params

    Movie
        .findById(movie_id)
        .then(movie => res.render('pages/movie-details', movie))
        .catch(err => console.log('Error!', err))
})


module.exports = router
