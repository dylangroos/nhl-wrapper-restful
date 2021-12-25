var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// set parser for PUT requests
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// set port
var port = process.env.PORT || 8080;        // set our port

// set router
var router = express.Router();     

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});


//test route
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
});

require('./app/models/game')(app)

// more routes for our API will happen here

app.use('/api', router);

var Game = require('./app/models/game');
const { set } = require('express/lib/application');

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);