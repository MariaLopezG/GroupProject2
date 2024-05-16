// Require the sqlite3 module
const sqlite3 = require('sqlite3').verbose();

// Open database connection
const db = new sqlite3.Database('./my_database.db');

// Example query to retrieve all users
db.all('SELECT * FROM users', (err, rows) => {
    if (err) {
        console.error(err.message);
        return;
    }
    // Log retrieved users
    console.log(rows);
});

// Close database connection
db.close();
