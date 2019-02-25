var express = require('express')
var parser = require('body-parser')
var friends = require('../app/data/friends')

var fs = require("fs")
// app.use(parser.urlencoded({ extended: true }));
// app.use(parser.json());


var route = express.Router();

// route.get('/', function(req, res) {
//     res.json({message: "woohoo!" + friend[0].name})
// })

route.post('/friends', function (req, res) {
    // RECEIVE THE SURVEY REULTS
    var userChoice = req.body;
 
    // ADD THE RESULTS UP
    var userDiff = 0;
    // FOR LOOP THROUGH THE RESULTS
    for (var i = 0; i < userChoice.length; i++) {
        // FOR EACH WE WANT TO CHECK TO SEE WHO IS THE BEST MATCH
        userDiff += Math.abs(userChoice[i] - friends[i].scores[i]);
        // IF T
    }
    var userSum = Math.ceil(userDiff/10);
    var friendScoreDict = {};
    friends.forEach(function(friend) {
        var diff = friend.scores.reduce(function(acc, curr) {
            console.log(acc, curr)
            return acc - curr;
        }, 0)
        var sum = Math.ceil(Math.abs(diff / 10));
        friendScoreDict[sum] = friend;
    })
    console.log(userSum, friendScoreDict);
     
    res.json(friendScoreDict[userSum])
    
})




