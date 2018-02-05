-- \c project2_dummy_database

INSERT INTO genres (genre) VALUES
  ('Pop'),
  ('Hip Hop'),
  ('Rock'),
  ('Funk'),
  ('Disco'),
  ('Electronic'),
  ('Punk'),
  ('Reggea'),
  ('Country');

INSERT INTO playlist (music_title, artist, year, genre_id) VALUES
  (
    'Sometimes you win, sometimes you learn.',
    'Prince',
    '1998',
    1
  ),
  (
    'Do or do not, there is no try.',
    'Yoda',
    '1997',
    2
  ),
  (
    'The expert at anything was once a beginner.',
    'Helen Hayes',
    '1989',
    3
  ),
  (
    'You are never too old to get a new goal or dream a new dream!',
    'CS Lewis',
    '2003',
    4
  ),
  (
    'Getting to know a problem is a bit like getting to know a person: it''s a gradual process that requires patience, and there is no state of completion. You can never know the full of a problem, because there is never comprehensive information available. You have to simply draw the line somewhere and make up the rest as you go along.',
    'Frank Chimero',
    '1991',
    5
  ),
  (
    'Others have seen what is and asked why. I have seen what could be and asked why not?',
    'Pablo Picasso',
    '1984',
    6
  ),
  (
    'Who are we, who is each one of us, if not a combinatoria of experiences, information, books we have read, things imagined?',
    'Italo Calvino',
    '1995',
    7
  ),
  (
    'Who are only undefeated / Because we have gone on trying',
    'T.S. Eliot',
    '1988',
    8
  ),
  (
    'In search of the difficulty rather than in its clutch. The disquiet of him who lacks an adversary.',
    'Samuel Beckett',
    '2000',
    4
  ),
  (
    'When the going gets weird, the weird turn pro.',
    'Hunter S. Thompson',
    '2009',
    9
  ),
  (
    'Reality is as thin as paper and betrays with all its cracks its imitative character.',
    'Bruno Schulz',
    '1987',
    5
  );
