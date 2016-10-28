var express = require('express');
var things = [];
var app = express();
var admin_app = express();
var port = 8081; 
var admin_port = 8082;

app.get('/factory/', function(req, res) {
  //Create a thing and add it to the thing array
  console.log("ICI port 8081");
});

//Assume more functions to do to things here....

admin_app.get('/factory/', function(req, res) {
  console.log("ICI port 8082");
});

admin_app.post('/listallthings/', function(req, res) {
  // Return a list of all the things
});

admin_app.post('/killserver/', function(req,res){
  //Kills the server after killing the things and doing clean up
});

//Assume https options properly setup.

var server = require('http').createServer(app);

server.listen(port, function() {
    console.log('Listening on port ' + port);
});

var admin_server = require('http').createServer(admin_app);

admin_server.listen(admin_port, function() {
    console.log('Listening on admin port ' + admin_port);
});