
/** Connect to MySQL database **/

// Mock data (`MOCK_DATA.csv`) generated using Mockaroo (https://www.mockaroo.com/)

/*
Connect to a MySQL/MariaDB database using the Node.js driver for MySQL :
https://www.npmjs.com/package/mysql
*/

require('dotenv').config()

var mysql = require('mysql');

var connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: '3306',
});

connection.connect(function(err) {
  if (err) {
    console.error(err.message);
    return console.log('Not connected to MySQL database.');
  }
  console.log('Connected to MySQL DB');

  connection.query('SELECT * FROM ' + process.env.DB_TABLE, function(err, rows, fields) {
      if (err) {
        console.error(err.message);
        connection.end(() => {
          console.log('Close MySQL database connection.');
        });
        return;
      }

      console.log(rows);
      connection.end(() => {
          console.log('Close MySQL database connection.');
      });
  });
});
