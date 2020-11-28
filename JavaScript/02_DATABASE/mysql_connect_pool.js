/** Connect to MySQL database **/

// Mock data (`MOCK_DATA.csv`) generated using Mockaroo (https://www.mockaroo.com/)

/*
Connect to a MySQL/MariaDB database using the Node.js driver for MySQL :
https://www.npmjs.com/package/mysql
*/

require('dotenv').config()

var mysql = require('mysql');

var pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: '3306',
});

pool.getConnection(function(err, connection) {
    if (err) {
        console.error(err.message);
        console.log('Not connected to MySQL DB.');
        pool.end(() => {
            console.log('Pool ended.');
        });
        return;
    }

    console.log('Connected to MySQL Database.');

    connection.query('SELECT * FROM ' + process.env.DB_TABLE, function(error, results, fields) {

        connection.release();

        if (error) {
            console.error(error.message);
            console.log('Error executing SQL query.');
            pool.end(() => {
                console.log('Pool ended after failing to execute query.');
            });
            return;
        }

        console.log(results);
        pool.end(() => {
            console.log('Pool ended after showing query result.');
        });
    });
});


pool.on('release', function(connection) {
    console.log('Connection to MySQL database released to pool');
});
