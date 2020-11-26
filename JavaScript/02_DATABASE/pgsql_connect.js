/** Connect to PostgreSQL database **/

// Mock data (`MOCK_DATA.csv`) generated using Mockaroo (https://www.mockaroo.com/)

/*
Connect to a PostgreSQL database using the node-postgres module :
https://www.npmjs.com/package/pg
*/

require('dotenv').config()
const { Client } = require('pg')

const client = new Client({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: 5432,
})

client.connect(function(err) {
    if (err) {
        console.log('Not connected to PostgreSQL database.')
        console.error(err.message);
        return;
    }
    console.log('Connected to PostgreSQL DB');

    client.query('SELECT * FROM public.' + process.env.DB_TABLE, (err, res) => {
        if (err) {
          console.error(err.message);
          client.end(() => {
            console.log('Close PostgreSQL database connection.');
          });
          return;
        }

        console.log(res.rows);
        client.end(() => {
            console.log('Close PostgreSQL database connection.');
        });
    });
});
