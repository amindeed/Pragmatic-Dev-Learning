
/** Connect to MariaDB database **/

// Mock data (`MOCK_DATA.csv`) generated using Mockaroo (https://www.mockaroo.com/)

/*
Connect to a MySQL/MariaDB database using MariaDB Node.js connector
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
        conn.query('SELECT * FROM ' + process.env.DB_TABLE + ' WHERE first_name="Bernita"')
            .then(rows => {
                conn.release();
                console.log('Connection to MariaDB released to pool.');
                console.log(rows);
                pool.end()
                    .then(() => {
                        console.log("Pool and all underlying connections closed gracefully.")
                    })
                    .catch(err => {
                        console.error(err.message);
                        console.log('Pool has not been ended properly.');
                    });
            })
            .catch(err => {
                conn.release();
                console.log('Connection to MariaDB released to pool.');
                console.error(err.message);
                pool.end()
                    .then(() => {
                        console.log("Pool and all underlying connections closed gracefully.")
                    })
                    .catch(err => {
                        console.error(err.message);
                        console.log('Pool has not been ended properly.');
                    });
            })

    }).catch(err => {
        console.error(err.message);
        console.log('Not connected to MariaDB database.');
        pool.end()
            .then(() => {
                console.log("Pool ended.")
            });
    });
