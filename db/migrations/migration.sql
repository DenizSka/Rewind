-- \c project2_dummy_database;

DROP TABLE IF EXISTS playlist;
DROP TABLE IF EXISTS genres;


CREATE TABLE genres (
  id SERIAL PRIMARY KEY,
  genre VARCHAR(255)
);


CREATE TABLE playlist (
  id SERIAL PRIMARY KEY,
  music_title TEXT,
  artist TEXT,
  year TEXT,
  genre_id INTEGER REFERENCES genres(id),
  date_created TIMESTAMP NOT NULL DEFAULT NOW()
);

CREATE INDEX ON genres (genre);
CREATE INDEX ON playlist (music_title);



