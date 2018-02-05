# Rewind App - By Deniz Skantz

Rewind is a fun app that shows you information about the day that you were born.  What were the top 10 hits?
All you have to do is put in your birth date and hit enter. 
If you like any of list on the results add it to your playlist, you can edit, delete and add a new song to your playlist. 


 Check out the app on Heroku here: https://rewindapp.herokuapp.com/


### Technologies Used & NPM Packages Installed:

HTML
CSS
Javascript
EJS
SQL, postico
Heroku
CLI
NPM (express, morgan, nodemon, eslint, ejs, pgpromise, methodoverrride, bodyparser, moment, youtube-search, dotenv etc)


### Code Snippet:

I am really proud of connecting all the modules and see how they relate to each other.
Below is snippet of code that I feel comfortable about:

 <!-- PlaylistController: -->

playlistController.index = (req, res, next) => {
  playlists.findAll()
    .then((playlist) => {
      // console.log(res.body);
      res.locals.playlist = playlist;
      next();
    })
    .catch(err => next(err));
};

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

<!-- ViewsController: -->

This will connect to api and also bring the youtube search result.

  showSongs(req, res) {
    res.render('songs/song-index', {
      playlist: res.locals.playlist,
      firstVideo: res.locals.firstVideo,
    });
  },

This shows your playlist. (The one you created)

  showYourSongs(req, res) {
    // console.log(res.locals.playlist);
    res.render('songs/song-yourlist', {
      playlist: res.locals.playlist,
    });
  },


## Pseudo Coding:

    1. Setting up user stories, wireframes, userflow and timing calendar.
    2. Tested the api to see if its working.
    3. Started with creating psql database - table.
    4. Work on getting the CRUD functionality of the dummy database work.
    5. Need to create config db and a server port.
    6. Got the server.js started and uploaded the npm dependencies
    7. Set up controllers, routes, views.
    8. Connect to api.
    9. Set up the ejs files.
    10. Making the pages appear in ejs. (including the existing db stuff and api)
    11. Getting the CRUD work on the api too. 
    12. Design the pages.
    13. Maing it work on heroku. 


##Complications/Future Improvements:

 Complications:

    + Connecting to api and saving that result on user’s playlist is a problem
    + Going back to the results page is not working (the results page based on the info you put into the input box on the entry)
    + SQL joins difference of left join – inner join -> Connected the two tables based on their ids however single song is somehow taking in the genre_id when the page is being called.(which is the number related to which genre it is not the id number). So since the id is not working after you add a new music to your own playlist, you can not edit it or delete it because it will not get its id. 
    + Getting the CRUD elements to work with the new data and api.


 Future Improvements:

    + Have multiple sources of data from different apis so that whoever puts in the date would get information on top music, top news and the fashion trends.
    + User should  only make edits or deletes when they are logged in with their username and password. 
    + User should be able to store their information and see that info when they re-login.
    + Have an image of the top 10 songs appear next to the song names. 

    
##Author

Deniz Skantz
