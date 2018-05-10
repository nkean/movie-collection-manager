const pg = require('pg');
const url = require('url');

let config = {};

if (process.env.DATABASE_URL) {
    let params = url.parse(process.env.DATABASE_URL);
    let auth = params.auth.split(':');

    config = {
        user: auth[0],
        password: auth[1],
        host: params.hostname,
        port: params.port,
        database: params.pathname.split('/')[1],
        ssl: true, // heroku requires ssl to be true
        max: 10, // max number of clients in the pool
        idleTimeoutMillis: 30000, // how long a client is allowed to remain idle before being closed
    };
} else {
    // not on Heroku, no process.env.DATABASE_URL
    config = {
        database: 'movie_collection',
        host: 'localhost',
        port: 5432,
        max: 10,
        idleTimeoutMillis: 30000
    };
}

const pool = new pg.Pool(config);

pool.on('connect', () => {
    console.log(`Postgresql connected`);
});

pool.on('error', (error) => {
    console.log(`Error connecting to Postgresql: ${error}`);
});

module.exports = pool;