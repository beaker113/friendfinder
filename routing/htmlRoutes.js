var http = require("http");
var fs = require("fs")


function displayHome(req, res) {
    fs.readFile("./home.html", function(err, data) {
        res.writeHead(200, {"content-Type": "text/html"})
        res.end(data)})
    

}
function displaySurvey(req, res) {
    fs.readFile("./survey.html", function(err, data) {
        res.writeHead(200, {"content-Type": "text/html"})
        res.end(data)})
    

}


function requestHandler(req, res) {
    var path = req.url;
    if(path === '/') {
        displayHome(req, res);
    }
    else if(path === "/survey") {
        displaySurvey(req, res);
    }
    
   

   
}


