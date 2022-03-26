console.log('Conecting Twitter API...');
console.log('Opening Socket...');

//import required libs
var Twit = require('twit');
var express = require('express');
// the librarie socket.IO should be downloaded or refered in the html
var socket = require('socket.io');
//import object with keyboards to compare
var keywords = require('../keywords');

console.log('keyword1: ', keywords.keyword1);
console.log('keyword1: ', keywords.keyword2);

//init the express server in port 3000
var app = express();
var server = app.listen(3000);
//Name of the folder with the files we want to serve
app.use(express.static('public'));

// setup socket.io
var io = socket(server);

//TWITTER API
//Import the API keys for Twitter from config.js
var config = require('./config');

//setup the Twit configuration for Twitter API
// documnetation of Twit https://github.com/ttezel/twit
var T1 = new Twit(config);
var T2 = new Twit(config);

var stream1 = T1.stream('statuses/filter', { track: keywords.keyword1 });
var stream2 = T2.stream('statuses/filter', { track: keywords.keyword2 });

stream1.on('tweet', sendData1);
stream2.on('tweet', sendData2);

function sendData1(data) {
  io.sockets.emit('tweet1', data.text);
}
function sendData2(data) {
  io.sockets.emit('tweet2', data.text);
}
