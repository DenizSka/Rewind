module.exports = {

  // Showing error status if the other comments do not work.
  show404(err, req, res) {
    res.sendStatus(404);
  },

  show406(err, req, res) {
    res.sendStatus(406);
  },

  // res.local injects any type of info from object from the server.
  // locals lives somewhere in the memory of the server.

  // Playlist is the JSON response we received from billboard api.
  // Firstvideo is connecting to first research result on YouTube.
  showSongs(req, res) {
    // console.log('inside of showSongs function');
    res.render('songs/song-index', {
      playlist: res.locals.playlist,
      cover: res.locals.covers,
      // firstVideo: res.locals.firstVideo,
    });
  },

  // This shows your playlist. (The one you created)
  showYourSongs(req, res) {
    // console.log(res.locals.playlist);
    res.render('songs/song-yourlist', {
      playlist: res.locals.playlist,
    });
  },

  showOne(req, res) {
    // console.log('inside showONE function');
    res.render('songs/song-single', {
      song: res.locals.song,
    });
  },

  showAddForm(req, res) {
    // console.log('inside of showAddForm function');
    res.render('songs/song-add');
  },

  showEditForm(req, res) {
    // console.log('inside of showEditForm function');
    res.render('songs/song-edit', {
      song: res.locals.song,
    });
  },

  handleCreate(req, res) {
    res.redirect('/playlist');
  },

  handleUpdate(req, res) {
    res.redirect(`/playlist/${req.params.id}`);
  },

  handleDelete(req, res) {
    res.redirect('/playlist');
  },

};
