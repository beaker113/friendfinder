var express = require('express')
var route = require('./routing/apiRoutes')
var parser = require('body-parser')
var jquery = require('jquery')
var jquery2 = require('.data/friends.js')


var app = express();

app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());

var PORT = process.env.PORT || 8080;
app.use('/', route);
app.use(express.static('/'));
app.use("/data", express.static(__dirname + "/data/friends.js"));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + jquery2));
});






app.listen(PORT, function() {
    console.log("server be workin', yo")
}) ;
