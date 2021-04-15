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


module.exports = router
