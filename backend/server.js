const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');

const app = express();
const db = new sqlite3.Database('./database.db');

app.use(bodyParser.json());

// Get all data
app.get('/api/data', (req, res) => {
  db.all('SELECT * FROM logs LIMIT 10', [], (err, rows) => {
    if (err) {
      res.status(500).send(err.message);
      return;
    }
    res.json(rows);
  });
});

app.listen(5000, () => {
  console.log('Server is running on http://localhost:5000');
});
