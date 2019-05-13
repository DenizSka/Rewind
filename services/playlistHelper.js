require('dotenv').config();
// SRC told me to use moments. Moments helps to get which day of the week a day is.

const moment = require('moment');
// I need to require youtube search in order to redirect the user to the youtube music.
const search = require('youtube-search');
const request = require('request-promise');
// const cheerio = require('cheerio');
const getChart = require("billboard-top-100").getChart;
const google = require('googleapis');
// The ideal url for api call so I can refer back to it later:
// http://billboard.modulo.site/charts/${req.body.year}-${req.body.month}-${req.body.day}?max=10

module.exports = {
// npm install request --save

  getYourSong(req, res, next) {
    // console.log('inside of getYourSong function');
    let date = `${req.query.year}-${req.query.month}-${req.query.day}`;
    // date = date.toString();
    console.log(`This is actual date ${date}`);
    let actualDate = moment(new Date(date)).format('YYYY-MM-DD');
    console.log(`This is actual date ${actualDate}`);

  function getAsyncData(actualDate){
    return new Promise(function(resolve, reject){
      getChart('hot-100', actualDate, function(err, chart) {
        if (err) {
          reject(error);
        }
        else{
          resolve(chart);
        }
      });
    });
  };


  getAsyncData(actualDate)
      .then((chart) => {
        // adding properties to res.locals
        let data = chart.songs;
        let newChart = data.slice(0, 10);
        console.log(newChart);
        // res.send(newChart);
        res.locals.playlist = newChart;
        // Got help from developer friend to implement the YouTube info on the url below:
        // https://www.npmjs.com/package/youtube-search
        const songName = newChart[0].title;
        const opts = {
          maxResults: 10,
          key: process.env.API_KEY,
        };
        search(songName, opts, (err, results) => {
          if (err) return console.log(err);
          console.log('youtube songs', results[0]);
          console.log('youtube songs', results);
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
  }
}
