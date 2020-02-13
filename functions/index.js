/***********************************************
 * Développer par Ja'ch Technologies
 * 12 Février 2019
 */
const functions = require('firebase-functions');
const express = require("express");
const bodyParser = require("body-parser");
const engines = require("consolidate");
const path = require("path");

var app = express();

app.use(bodyParser.urlencoded({ extended: true }))

app.engine('vash', engines.vash);
app.set('views', './views');
app.set('view engine', 'vash');

var indexRoute = require("./routes/index");

//Routes
app.use('/', indexRoute);

exports.app = functions.https.onRequest(app);