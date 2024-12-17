const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

const app = express();
const port = 5000;
app.use(cors());

const db = new sqlite3.Database('events.db');

// Endpoint: Get all events
app.get('/events', (req, res) => {
    db.all('SELECT * FROM events', [], (err, rows) => {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.json(rows);
    });
});

// Endpoint: Search events (filter by severity, destination_ip, etc.)
app.get('/events/search', (req, res) => {
    const { column, value } = req.query;
    if (!column || !value) {
        return res.status(400).json({ error: 'Missing column or value parameter' });
    }

    const query = `SELECT * FROM events WHERE ${column} LIKE ?`;
    db.all(query, [`%${value}%`], (err, rows) => {
        if (err) {
            res.status(400).json({ error: err.message });
            return;
        }
        res.json(rows);
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
