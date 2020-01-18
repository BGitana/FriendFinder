// DEPENDENCIES
// Series of npm packages that we will use to give the server useful functionality

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
// var fs = require('fs');
// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server

var app = express(); // Tells node that we are creating an "express" server
var PORT = process.env.PORT || 3000; // Sets an initial port. We'll use this later in our listener

// BodyParser makes it easy for our server to interpret data sent to it.
// The code below is pretty standard.

// ////////////ORIGINAL///////////////
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.text());
// app.use(bodyParser.json({ type: "application/vnd.api+json" }));
// ////////////ORIGINAL///////////////
 
// parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: true }));
 
// parse application/json
app.use(bodyParser.json());

// parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: 'application/*+json' }));
 
// parse an HTML body into a string
// app.use(bodyParser.text({ type: 'text/html' }));
app.use(bodyParser.text());

// Expose the public directory to access CSS files
app.use(express.static(path.join(__dirname, './app/public')));

// --------- SteveSonoa ----------------////////////////////////////
// Sets up the Express app to handle data parsing
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());
// --------- SteveSonoa ----------------////////////////////////////

// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or
// request data from various URLs.
// ================================================================================

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

// ==============================================================================
// LISTENER
// The below code effectively "starts" our server
// ==============================================================================

app.listen(PORT, function() {
  console.log("Yay!!! There is App listening on PORT: " + PORT);
});

