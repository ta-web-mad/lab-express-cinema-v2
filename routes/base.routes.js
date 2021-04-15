const express = require('express')
const router = express.Router()

const Movies = require('./../models/movie.model')

// Endpoints
router.get('/', (req, res) => res.render('pages/index'))

router.get('/movies', (req, res) => {

    Movies
        .find()
        .then(allMovies => res.render('pages/movies', { allMovies }))
        .catch(err => console.log('Error!', err))
})

router.get('/details/:movies_id', (req, res) => {

    const { movies_id } = req.params

    Movies
        .findById(movies_id)
        .then(theMovie => {
            res.render('pages/details', {theMovie})
            console.log(theMovie)
        })
        
        .catch(err => console.log('Error!', err))
})


module.exports = router
