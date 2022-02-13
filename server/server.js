const express = require('express');

const app = express();
const port = 5000;
const path = require('path');

// const router = express.Router();

app.get('/', (req, res) => {
  res.sendFile(path.join(`${__dirname}/index.html`));
});

// app.use('/', router);
app.listen(process.env.port || port);

module.exports = app;
