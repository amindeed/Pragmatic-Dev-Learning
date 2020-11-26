
/** Connect to MariaDB database **/

// Mock data (`MOCK_DATA.csv`) generated using Mockaroo (https://www.mockaroo.com/)

/*
Connect to a MariaDB database using MariaDB Node.js connector
https://www.npmjs.com/package/mariadb
*/

require('dotenv').config()

const mariadb = require('mariadb');

mariadb.createConnection({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
        port: '3306',
        connectionLimit: 5
    })
    .then(conn => {
        console.log('Connected to MariaDB.');
        conn.query('SELECT * FROM ' + process.env.DB_TABLE)
            .then(rows => {
                console.log(rows);
                conn.end();
                console.log('Close MariaDB connection');
            })
            .catch(err => {
                console.error(err.message);
                conn.end();
                console.log('Close MariaDB connection');
            })

    }).catch(err => {
        console.error(err.message);
        console.log('Not connected to MariaDB database.');
    });
