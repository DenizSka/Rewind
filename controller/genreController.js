const genreDB = require('../models/genreModel');
// This is page is getting the info from genreDB.

module.exports = {

  index(req, res, next) {
    genreDB.findAll()
      .then((genres) => {
        res.locals.genres = genres;
        next();
      })
      .catch(err => next(err));
  },
};
