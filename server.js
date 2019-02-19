var express = require('express')
var route = require('./routing/apiRoutes')
var parser = require('body-parser')


var app = express();

app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());

var PORT = process.env.PORT || 8080;


app.use('/', route);




app.listen(PORT, function() {
    console.log("server be workin', yo")
}) ;
