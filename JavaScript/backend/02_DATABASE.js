
// web - How do I connect MariaDB to Node.JS and Express.JS? - Stack Overflow - https://stackoverflow.com/a/51999339/3208373

const mariadb = require('mariadb');
const pool = mariadb.createPool({host: 'mydb.com', user: 'myUser', connectionLimit: 5});
pool.getConnection()
    .then(conn => {
      conn.query("SELECT 1 as val")
        .then((rows) => {
          console.log(rows); //[ {val: 1}, meta: ... ]
          return conn.query("INSERT INTO myTable value (?, ?)", [1, "mariadb"]);
        })
        .then((res) => {
          console.log(res); // { affectedRows: 1, insertId: 1, warningStatus: 0 }
          conn.end();
        })
        .catch(err => {
          //handle error
          conn.end();
        })
    }).catch(err => {
      //not connected
    });
