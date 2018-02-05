const pgp = require('pg-promise')();
const dbConfig = require('../config/dbConfig');

/* excute pgp with the config settings to establish the db connection */
const db = pgp(dbConfig);

const playlistModel = {};


playlistModel.findAll = () => db.many(`
  SELECT *
  FROM playlist
  ORDER BY
  id`);

// This is a reminder to show you that if you change the name genres id to
// genres numb, single song id for the newly added songs are recognized.
// (but the page stops working.)
// playlistModel.findById = (id) => {
//   // console.log("this is id in model:", id)
//   return db.oneOrNone(`
//     SELECT *
//     FROM playlist
//     LEFT OUTER JOIN genres
//     ON playlist.genre_id=genres.numb
//     WHERE playlist.id = $1
//     `, id);
// };

playlistModel.findById = id =>
  // console.log('this is id in model:', id);
  db.oneOrNone(`
    SELECT *
    FROM playlist
    LEFT OUTER JOIN genres
    ON playlist.genre_id=genres.id
    WHERE playlist.id = $1
    `, id);

// Call the table to only show one song.
playlistModel.addOne = song =>
  // console.log('this is song in model:', song);
  db.one(`
    INSERT INTO playlist
    (music_title, artist, year, genre_id)
    VALUES ($/music_title/, $/artist/, $/year/, $/genre_id/ )
    RETURNING *
    `, song);

// Edit, once you edit the song in the playlist make the change also on
// playlist table.
playlistModel.update = song => db.one(`
    UPDATE playlist
    SET
    music_title = $/music_title/,
    artist =  $/artist/,
    year = $/year/,
    genre_id = $/genre_id/
    WHERE id = $/id/
    RETURNING *
    `, song);

// Delete one song from the playlist table.
playlistModel.destroy = id => db.none(`
    DELETE FROM playlist
    WHERE id = $1
    `, id);

module.exports = playlistModel;
