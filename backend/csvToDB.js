const sqlite3 = require('sqlite3').verbose();
const fs = require('fs');
const csv = require('csv-parser');

const db = new sqlite3.Database('./database.db');

db.serialize(() => {
  // Drop the table if it exists to start fresh
  db.run('DROP TABLE IF EXISTS logs');

  // Create a table that matches the CSV headers
  db.run(`CREATE TABLE logs (
    TIMESTAMP TEXT,
    ComputerName TEXT,
    SourceIp TEXT,
    DestinationIp TEXT,
    DestinationPort INTEGER
  )`);

  const stmt = db.prepare('INSERT INTO logs (TIMESTAMP, ComputerName, SourceIp, DestinationIp, DestinationPort) VALUES (?, ?, ?, ?, ?)');

  fs.createReadStream('./data.csv')
    .pipe(csv())
    .on('data', (row) => {
      stmt.run(
        row['TIMESTAMP'],
        row['ComputerName'],
        row['SourceIp'],
        row['DestinationIp'],
        parseInt(row['DestinationPort'], 10) // Ensure the port is treated as an integer
      );
    })
    .on('end', () => {
      stmt.finalize();
      console.log('CSV data has been loaded into the database.');
    });
});
