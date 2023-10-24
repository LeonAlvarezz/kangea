const mysql = require('mysql2/promise'); 

// Create a connection pool
const pool = mysql.createPool({
  host: 'localhost',
  user: 'test',
  port: 3306,
  password: 'test',
  database: 'job',
});

// Log a message to indicate that the connection pool is created
console.log('MySQL connection pool is created.');

module.exports = pool;
