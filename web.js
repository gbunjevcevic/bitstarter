#!/usr/bin/env node

// require core module `file system`
var fs = require( 'fs' );
var message = fs.readFileSync('index.html',encoding);
var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  response.send(message);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
