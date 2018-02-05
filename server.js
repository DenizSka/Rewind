// bring in the npm dependencies:

// I tried to do npm outdated on the terminal but it did not give me anything back in return.

const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const path = require('path');
const methodOverride = require('method-override');
// import our route & tell the app to use them
const playlistRoute = require('./routes/playlistRoute');

// load all env variables from .env file into process.env object.
require('dotenv').config();

// Set up the port to check our process:
const PORT = process.env.PORT || 3000;

// start express:
const app = express();

// middleware
app.use(logger('dev'));
app.use(express.static('public'));

// set up body parser. Body parser has to be set up in above all the code below.
// It allows you to transport the body from your browser to your database.

app.use(bodyParser.urlencoded({
  extended: false,
}));
app.use(bodyParser.json());

// call override with POST having ?_method=PUT:
app.use(methodOverride('_method'));

// set up views. this is where my views will be.
app.set('views', path.join(__dirname, 'views'));
// I will set up a view engine so whenever it says view engine it will go to ejs.
// dirname is reserved system key name similar to process.env.
app.set('view engine', 'ejs');

// setting static file so when I refer to the public css file it will get it.
app.use('/static', express.static(path.join(__dirname, 'public')));

// create a get request.
app.get('/', (req, res) => {
  res.render('index');
});

// when the url /playlist is called do the things in the router.
app.use('/playlist', playlistRoute);

// error handler:
app.use('*', (req, res) => {
  res.status(404).send('page not found!');
});

// lets see if the port is ready:
app.listen(PORT, () => {
  console.log(`Server up, listening on port ${PORT}, in ${app.get('env')} mode.`);
});

