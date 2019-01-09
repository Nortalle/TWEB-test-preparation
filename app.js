// loads environment variables
require('dotenv/config');
const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');

const app = express();
const port = process.env.PORT || 3000;

// Enable CORS for the client app
app.use(cors());

app.get('/:id', (req, res) => {
  fetch(`https://jsonplaceholder.typicode.com/todos/${req.params.id}`)
    .then(response => response.json())
    .then(json => res.send(json));
});

// Error handler
app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  console.error(err);
  res.status(err.status || 500);
  res.send(err.message);
});

app.listen(port, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening at http://localhost:${port}`);
});
