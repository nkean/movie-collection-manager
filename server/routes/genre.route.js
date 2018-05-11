const router = require('express').Router();
const pool = require('../modules/pool');

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