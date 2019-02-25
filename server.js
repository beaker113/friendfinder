var express = require('express')
var route = require('./routing/apiRoutes')
var parser = require('body-parser')
var path = require('path')


var app = express();

app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());
app.use(express.static('public'))
var PORT = process.env.PORT || 8080;
app.use('/api', route);

// app.use(express.static('/'));
// app.use("/data", express.static(__dirname + "/data/friends.js"));







app.listen(PORT, function() {
    console.log("server be workin', yos")
}) ;
