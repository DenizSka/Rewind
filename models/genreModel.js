const pgp = require('pg-promise')();
const dbConfig = require('../config/dbConfig');

/* excute pgp with the config settings to establish the db connection */
const db = pgp(dbConfig);

// This is directly connected to SQL and genres table.
module.exports = {

  findAll() {
    return db.many(`
       SELECT *
        FROM genres
       ORDER BY id;
       `);
  },
};
