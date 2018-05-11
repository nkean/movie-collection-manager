const express = require('express');
const bodyParser = require('body-parser');

const movieRouter = require('./routes/movie.route');
const genreRouter = require('./routes/genre.route');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(express.static('server/public'));

app.use('/movie', movieRouter);
app.use('/genre', genreRouter);

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});