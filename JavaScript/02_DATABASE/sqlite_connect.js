
/** Connect to SQLite database **/

// Mock data (`MOCK_DATA.csv`) generated using Mockaroo (https://www.mockaroo.com/)

/*
Connect to a local SQLite database using `sqlite3` module for Node.js
https://www.npmjs.com/package/sqlite3
*/

const sqlite3 = require('sqlite3').verbose();

// open the database
var db = new sqlite3.Database('./SQLiteDB.sqlite', sqlite3.OPEN_READWRITE, (err) => {
  if (err) {
    console.log('Not connected to SQLite database.');
    console.error(err.message);
    return;
  }
  console.log('Connected to SQLite database.');
});

db.serialize(function() {
   db.all("SELECT * FROM People;", function(err, rows) {
        if (err) {
         console.error(err.message);
         return;
        }
        console.log(rows);
   });
});

db.close((err) => {
  if (err) {
    console.error(err.message);
    console.log('Database connection has not been closed gracefully.');
    return;
  }
  console.log('Close SQLite database connection.');
});
