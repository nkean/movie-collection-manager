const router = require('express').Router();
const pool = require('../modules/pool');

router.post('/add', (req, res) => {
    var newMovie = req.body;
    var queryString = `INSERT INTO "movies" ("title", "release_date", "run_time", "image_url", "genre_id")
                       VALUES ($1, $2, $3, $4, $5);`;
    pool.query(queryString, [newMovie.title, newMovie.release_date, newMovie.run_time, newMovie.image_url, newMovie.genre_id])
        .then((response) => {
            console.log(`Successful INSERT to "movies"`);
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error with SQL INSERT: ${error}`);
            res.sendStatus(500);
        })
});

module.exports = router;