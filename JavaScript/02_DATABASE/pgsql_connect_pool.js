
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

pool.query('SELECT * FROM public.' + process.env.DB_TABLE, (err, res) => {
  console.log(err, res)
  pool.end()
})
