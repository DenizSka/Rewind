const playlists = require('../models/playlistModel');

const playlistController = {};


playlistController.index = (req, res, next) => {
  playlists.findAll()
    .then((playlist) => {
      // console.log(res.body);
      res.locals.playlist = playlist;
      next();
    })
    .catch(err => next(err));
};

// Showing one song from your playlist but if you add a new song to playlist it will
// not recognize its id. First console.log shows the genre_id. And we never get to
// second console log.
playlistController.showOne = (req, res, next) => {
  // console.log('this is req.params:', req.params.id);
  playlists.findById(req.params.id)
    .then((song) => {
      // console.log('this is song inside of showone:', song);
      res.locals.song = song;
      next();
    })
    .catch(err => next(err));
};

playlistController.makeBlankSong = (req, res, next) => {
  const blankSong = {
    id: null,
    music_title: null,
    artist: null,
    year: null,
    genre_id: null,
  };
  res.locals.song = blankSong;
  next();
};

playlistController.create = (req, res, next) => {
  // console.log(req.body);
  playlists.addOne(req.body)
  //  ({
  //   music_title : req.body.music_title,
  //   artist : req.body.artist,
  //   year : req.body.year
  // })
    .then((song) => {
      // console.log(song, 'new song added');
      res.locals.song = song;
      // res.json({
      //   message: 'song added to your list',
      //   data: playlist,
      // });
      next();
    })
    .catch(err => next(err));
};

// this is the song update page that you can get to from single song page.
playlistController.update = (req, res, next) => {
  playlists.update(req.body)
    .then((song) => {
      // can not see console log after song after editing the song.
      // console.log(song, 'after post');
      res.locals.song = song;
      next();
    })
    .catch(err => next(err));
};


playlistController.delete = (req, res, next) => {
  // console.log("this is req.params.id:",req.params.id)
  playlists.destroy(req.params.id)
    .then(() => next())
    .catch(err => next(err));
};

module.exports = playlistController;
