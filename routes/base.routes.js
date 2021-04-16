const express = require('express')
const { render, response } = require('../app')
const router = express.Router()


const Movie = require('./../models/Movie.model')


// Endpoints
router.get('/', (req, res) =>{
 res.render('pages/index')
})

router.get('/movies-common', (req, res)=>{
    // res.send('estas son bebebe')
    Movie
    .find()
    .then(theMovies => res.render('pages/movies-common', {theMovies}))
    .catch(err => console.log('Ha habido un error:', err))
    console.log(theMovies)
})

router.get('/movies-common/:movie_id', (req, res, next) => {

    //res.send(req.params)

    const {movie_id} = req.params.id

    Movie
    .findById(movie_id)
    .then(response => {
            res.send(response);
        })
        .catch(err => console.error(err));
})
    
    

module.exports = router
