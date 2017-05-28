#!/usr/bin/nodejs
var express = require('express');
var path = require('path');
var favicon = require('express-favicon');
var app = express();
var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: 'lb8C7aRA2UCIu7pakyHtFHw1y',
  consumer_secret: 'Q6EFYIzYFm2d9JenLDHN2eUmY50m4p81HWy1MEnAqVX9lTrUMq',
  access_token_key: '1327782036-c1SyIraSNGf78Z3yhmyUFpPZTpJ4yCANceEWaPj',
  access_token_secret: '0qfhcycIMUkJY9Ij0zhW31uXoisSl3yK8PpGVI37TFrDg'
});

app.use(favicon(__dirname + '/ubi/favicon.ico'));

app.use("/ubi",  express.static(__dirname + '/ubi'));
app.use("/ubi/script.js",  express.static(__dirname + '/ubi/script.js'));

app.set('port', process.env.PORT || 8080);

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/ubi/index.html'));
});

app.get('/index.html', function(req, res) {
    res.sendFile(path.join(__dirname + '/ubi/index.html'));
});

app.get('/listing.html', function(req, res) {
    res.sendFile(path.join(__dirname + '/ubi/listing.html'));
});

app.get('/about.html', function(req, res) {
    res.sendFile(path.join(__dirname + '/ubi/about.html'));
});

app.get('/twitter.html', function(req, res) {
    res.sendFile(path.join(__dirname + '/ubi/twitter.html'));
});

app.get('/listscript.js', function(req, res) {
    res.sendFile(path.join(__dirname + '/ubi/listscript.js'));
});

app.get('/twitterscript.js', function(req, res) {
    res.sendFile(path.join(__dirname + '/ubi/twitterscript.js'));
});

app.get('/twitsearch', function(req, res) {
    client.get('search/tweets', {q: "basic income"}, function(error, tweets, response) {
       res.send(tweets);
    });
});

var listener = app.listen(app.get('port'), function() {
  console.log( listener.address().port );
});
