const express = require('express')
const Movie = require('../models/movie.model')
const router = express.Router()

// Endpoints
router.get('/', (req, res) => res.render('pages/index'))


router.get('/movies', (req, res) => {

    Movie
        .find()
        .then(movies => {
            res.render('pages/movies', { movies })
        })
        .catch(err => console.log('Error!!!', err))
})

router.get('/details/:movies_id', (req, res) => {
    const { movies_id } = req.params
    Movie
        .findById(movies_id)
        .then(theMovie => {
            res.render('pages/details', { theMovie })
        })
        .catch(err => console.log('Error!!!', err))
})


module.exports = router
