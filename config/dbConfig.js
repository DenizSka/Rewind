/**
 * @module dbConfig
 * @desc this file contains all the connection strings
 * to connect to the database server
 */

//doing a dummy database
// Our database is either at some URL,
// or configured at some host:port
// TODO: [1] Export your database config
module.exports = process.env.DATABASE_URL || {
  host:     process.env.DB_HOST || 'localhost',
  port:     process.env.DB_PORT || 5432,
  database: process.env.DB_NAME || 'project2_dummy_database',
  /* user:     process.env.DB_USER, */
};
