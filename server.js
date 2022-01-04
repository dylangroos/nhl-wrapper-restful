import express, { Router } from 'express';
var app = express();
import { urlencoded, json } from 'body-parser';

// set parser for PUT requests
app.use(urlencoded({ extended: true }));
app.use(json());

// set port
var port = process.env.PORT || 8080;        // set our port

// set router
var router = Router();     

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

import Game from './app/models/game';
import { set } from 'express/lib/application';

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);