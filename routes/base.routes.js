const express = require('express')
const router = express.Router()

const Movie = require('./../models/movie.model')

// Endpoints
router.get('/', (req, res) => res.render('pages/index'))


router.get('/movies', (req, res) => {
    Movie
        .find()
        .then(allMovies => {
            res.render('pages/movies', { allMovies })
        })
        .catch(err => console.log('Error al importar Movies', err))

})

router.get('/movies/:id', (req, res) => {
    const { id } = req.params
    Movie
        .findById(id)
        .then(selectedMovie => {
            console.log(selectedMovie);
            res.render('pages/movie-detail', selectedMovie)
        })
        .catch(err => console.log('Error of', err))
})


module.exports = router
