const express = require('express');

const playlistRoutes = express.Router();
// These are the paths we need.
const controller = require('../controller/playlistController.js');
const genre = require('../controller/genreController.js');
const views = require('../controller/viewsController');
const playlistHelper = require('../services/playlistHelper');

// Render the api results:
playlistRoutes.route('/bydate')
  .get(playlistHelper.getYourSong, views.showSongs, views.show404);


// Add a playlist route:
playlistRoutes.get('/new', genre.index, controller.makeBlankSong, views.showAddForm);
playlistRoutes.get('/edit/:id/', genre.index, controller.showOne, views.showEditForm, views.show404);


// Get song by id:
playlistRoutes.route('/:id')
  .get(controller.showOne, views.showOne, views.show404)
  .put(controller.update, views.handleUpdate, views.show406)
  .delete(controller.delete, views.handleDelete, views.show406);


// ALL songs route:
playlistRoutes.route('/')
  .get(controller.index, views.showYourSongs, views.show404)
  // post to your playlist:
  .post(controller.create, views.handleCreate, views.show406);


module.exports = playlistRoutes;
