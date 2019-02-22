var express = require('express')
var parser = require('body-parser')
var friend = require('../app/data/friends')

// app.use(parser.urlencoded({ extended: true }));
// app.use(parser.json());


var route = express.Router();

route.get('/', function(req, res) {
    res.json({message: "woohoo!" + friend[0].name})
})

route.get('/api/friends', function(req, res) {
    res.json(data.friends)
})
route.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/data/friends.js'));
});
route.post('/api/friends', function(req, res) {
    res.json(data.Waitlists)
})
// app.use('/api', route)

module.exports = route




