const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(express.static('server/public'));

app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});