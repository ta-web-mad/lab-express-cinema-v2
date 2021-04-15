const express = require('express')
const router = express.Router()

const Movie = require('./../models/movie.model')

// Endpoints
router.get('/', (req, res) => res.render('pages/index'))

router.get('/movies', (req, res) => {

    Movie
        .find()
        .then(allMovies => res.render('pages/movies', { allMovies }))
        .catch(err => console.log('Error', err))
})

router.get('/movies/:movieId', (req, res) => {
    const  {movieId } = req.params
    console.log(req.params)
    Movie
        .findById(movieId)
        .then(theMovie =>  res.render('pages/movie-details', theMovie))
        .catch(err => console.log('Error', err))

})

module.exports = router
