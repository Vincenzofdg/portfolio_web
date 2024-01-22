const mysql = require('mysql2/promise');
require('dotenv').config();

const connection = mysql.createPool({
  host: 'localhost',
  user: 'vincenzo',
  password: 'vincenzo213',
  database: 'VKodersDB',
  port: 3002,
});

module.exports = connection; 


// host: process.env.DB_HOST || 'localhost',
// user: process.env.DB_USER || 'vincenzo',
// password: process.env.DB_PASSWORD || 'vincenzo213',
// database: process.env.DB_DATABASE || 'VKodersDB',
// port: process.env.DB_PORT || 3002,