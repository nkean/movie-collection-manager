const router = require('express').Router();
const pool = require('../modules/pool');

router.get('/all', (req, res) => {
    var queryString = `SELECT "genres"."id", "genres"."name", COUNT("movies"."genre_id") FROM "movies"
                       JOIN "genres" ON "genres"."id" = "movies"."genre_id"
                       GROUP BY "genres"."id"
                       ORDER BY "genres"."name";`
    pool.query(queryString)
        .then((response) => {
            console.log(`Successful SELECT from "genres"`);
            res.send(response.rows);
        })
        .catch((error) => {
            console.log(`Error with SQL SELECT: ${error}`);
            res.sendStatus(500);
        })
});

router.post('/add', (req, res) => {
    var newGenre = req.body;
    var queryString = `INSERT INTO "genres" ("name")
                       VALUES ($1);`;
    pool.query(queryString, [newGenre.name])
        .then((response) => {
            console.log(`Successful INSERT to "genres"`);
            res.sendStatus(201);
        })
        .catch((error) => {
            console.log(`Error with SQL INSERT: ${error}`);
            res.sendStatus(500);
        })
});

module.exports = router;