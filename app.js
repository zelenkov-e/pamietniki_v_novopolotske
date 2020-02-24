'use strict';

// simple express server
var express = require('express');
// var bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

var app = express();
// app.use(bodyParser());

// var router = express.Router();

app.use(express.static('.'));
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.listen(5000);
