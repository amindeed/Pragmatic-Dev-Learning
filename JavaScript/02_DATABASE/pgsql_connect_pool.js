
/** Connect to PostgreSQL database **/

// Mock data (`MOCK_DATA.csv`) generated using Mockaroo (https://www.mockaroo.com/)

/*
Connect to a PostgreSQL database using the node-postgres module :
https://www.npmjs.com/package/pg
*/

// Pooling | node-postgres - https://node-postgres.com/features/pooling

require('dotenv').config()
const { Pool } = require('pg')

const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    port: 5432,
})

pool.connect((err, client, release) => {
  if (err) {
    console.error(err.message);
    console.log('Not connected to PostgreSQL DB.');
    pool.end(() => {
        console.log('Pool ended.');
    });
    return;
  }

  console.log('Connected to PostgreSQL Database.');

  client.query('SELECT * FROM ' + process.env.DB_TABLE + ' WHERE first_name=\'Bernita\'', (err, result) => {

    var idleClientsBeforeRelease = pool.idleCount;
    release();
    if ( idleClientsBeforeRelease < pool.idleCount ) {
        console.log('Client released to pool.');
    } else {
        console.log('Client not released to pool.');
    }

    if (err) {
      console.error(err.message);
      console.log('Error executing SQL query.');
      pool.end(() => {
          console.log('Pool ended after failing to execute query.');
      });
      return;
    }

    console.log(result.rows);
    pool.end(() => {
        console.log('Pool ended after showing query result.');
    });
  })
})


/*
pool.on('connect', client => {
  client.query('SET DATESTYLE = iso, mdy')
})
*/
