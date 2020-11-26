
/** Connect to MariaDB database **/

// Mock data (`MOCK_DATA.csv`) generated using Mockaroo (https://www.mockaroo.com/)

/*
Connect to a MariaDB database using MariaDB Node.js connector
https://www.npmjs.com/package/mariadb

What's the advantage of thread pool in MySQL/MariaDB?
https://dba.stackexchange.com/q/86989/63120
*/

require('dotenv').config()

const mariadb = require('mariadb');

const pool = mariadb.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: '3306',
    connectionLimit: 5
});

pool.getConnection()
    .then(conn => {
        console.log('Connected to MariaDB.');
        conn.query('SELECT * FROM ' + process.env.DB_TABLE)
            .then(rows => {
                console.log(rows);
                conn.release();
                console.log('Close MariaDB connection');
            })
            .catch(err => {
                console.error(err.message);
                conn.release();
                console.log('Close MariaDB connection');
            })

    }).catch(err => {
        console.error(err.message);
        console.log('Not connected to MariaDB database.');
    });
