require('dotenv').config();
// SRC told me to use moments. Moments helps to get which day of the week a day is.
// It will bring a number based on the week of the day and from there its
// easy to get the billboard charts. (billboard charts are only updated every
// saturday, I was only getting results if it was a saturday)

const moment = require('moment');

// I need to require youtube search in order to redirect the user to the youtube music.
const search = require('youtube-search');
const request = require('request-promise');

// The ideal url for api call so I can refer back to it later:
// http://billboard.modulo.site/charts/${req.body.year}-${req.body.month}-${req.body.day}?max=10

module.exports = {
// npm install request --save
// SRC told me to use moments, I got some help in order to understand how to make it work.
  getYourSong(req, res, next) {
    // console.log('inside of getYourSong function');
    const date = `${req.query.year}-${req.query.month}-${req.query.day}`;
    const actualDate = moment(date, 'YYYY-M-D');
    const weekday = actualDate.weekday();
    const weekdayForSaturday = 6;
    const nextSaturday = actualDate.add(weekdayForSaturday - weekday, 'days');

    // console.log('today: ', actualDate);
    // console.log('nextSaturday: ', nextSaturday);
    // console.log('date: ', nextSaturday.year(), nextSaturday.get('date'));
    const year = nextSaturday.get('year');
    const month = nextSaturday.get('month') + 1;
    const day = nextSaturday.get('date');
    request(`http://billboard.modulo.site/charts/${year}-${month}-${day}?max=10`)
      .then((response) => {
        // console.log(req.query.year);
        return JSON.parse(response);
      })
      .then((responseJSON) => {
        // adding properties to res.locals
        // res.send(responseJSON);
        // console.log(responseJSON.songs[0].song_name);
        res.locals.playlist = responseJSON.songs;
        // console.log(responseJSON.songs[0]);
        // Got help from developer friend to implement the YouTube info on the url below:
        // https://www.npmjs.com/package/youtube-search
        const songName = responseJSON.songs[0].song_name;
        // const artist = responseJSON.songs[0].display_artist;
        const opts = {
          maxResults: 10,
          key: process.env.API_KEY,
        };

        search(songName, opts, (err, results) => {
          if (err) return console.log(err);
          // console.log('youtube songs', results[0]);
          res.locals.firstVideo = results[0];
          next();
        });
      }).catch((err) => {
        console.log(err);
        // in case there's an error in the API call, we don't want to just
        // display an error on the page. This helps the app stay functional
        res.locals.getYourSong = 'Coming Soon!';
        next(err);
      });
  },
};
