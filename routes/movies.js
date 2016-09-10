var express = require('express');
var router = express.Router();
var Movie = require('../models/movies');

router.route('/')
	
	.post(function(req, res) {

		var movie = new Movie();
		blog.title = req.body.title;
		blog.rating = req.body.rating;
		blog.review = req.body.review;

		blog.save(function(err) {
			if (err) {
				res.send(err);
			}
			res.json({ message : 'Movie added!'});
		});
	})

	.get(function(req, res) {
		Movie.find(function(err, movies) {
			if (err) {
				res.send(err);
			}
			res.json(movies);
		});
	});

router.route('/:movie_id')

	.get(function(req, res) {
		Movie.findById(req.params.movie_id, function(err, movie) {
			if (err) {
				console.log('movie id error', err);
				return res.sendStatus(404);
			}
			res.render('movie', {
				title: movie.title,
				rating: movie.rating,
				review: movie.review,
			});
		});
	})

	.put(function(req, res) {
		Movie.findById(req.params.movie_id, function(err, movie) {
			if (err) {
				res.send(err);
			}
			movie.title = body.req.title;
			movie.rating = body.req.rating;
			movie.review = body.req.review;

			movie.save(function(err) {
				if (err) {
					res.send(err);
				}
				res.json({ message : 'movie updated!'});
			});
		});
	})

	.delete(function(req, res) {
		Movie.remove({_id: req.params.movie_id}, function(err, movie) {
			if (err) {
				res.send(err);
			}
			res.json({ message: 'movie deleted!'});
		});
	});

module.exports = router;