const express = require('express')
const router = express.Router()

const Movie = require('./../models/Movie.model')

// Endpoints
router.get('/', (req, res) => res.render('pages/index'))

router.get('/movies', (req, res) => {

    Movie
        .find()
        .then(allMovies => res.render('pages/movies', {allMovies}))
        .catch(err => console.log('Error!', err))
})

router.get('/movieDetails/:_id', (req, res) => {

    const _id  = req.params

    Movie
        .findById(_id)
        .then(theMovie => res.render('pages/movieDetails', theMovie))
        .catch(err => console.log('Error!', err))
})




module.exports = router
