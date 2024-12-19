const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./database.db');

db.all('SELECT * FROM logs LIMIT 5', [], (err, rows) => {
  if (err) {
    console.error('Error executing query:', err.message);
    return;
  }
  console.log('Sample data from database:', rows);
});

db.close();
