const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
const csv = require('csv-parser');

const db = new sqlite3.Database('events.db');

// Create the table
db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS events (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        timestamp TEXT,
        severity TEXT,
        destination_ip TEXT,
        destination_port INTEGER
    )`);
});

// Insert CSV data into SQLite
fs.createReadStream('data.csv')
    .pipe(csv())
    .on('data', (row) => {
        db.run(
            `INSERT INTO events (timestamp, severity, destination_ip, destination_port) VALUES (?, ?, ?, ?)`,
            [row.timestamp, row.severity, row.destination_ip, row.destination_port]
        );
    })
    .on('end', () => {
        console.log('CSV file successfully imported into database.');
        db.close();
    });
