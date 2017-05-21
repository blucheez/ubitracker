#!/usr/bin/nodejs
var express = require('express');
var path = require('path')
var app = express();


app.use("/ubi",  express.static(__dirname + '/ubi'));

app.set('port', process.env.PORT || 8080);

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/ubi/index.html'));
});

var listener = app.listen(app.get('port'), function() {
  console.log( listener.address().port );
});
