var express = require('express');
var things = [];
var app = express();
var admin_app = express();
var t_app = express();
var port = 8081; 
var admin_port = 8082;
var t_port = 8083;



/** Fonction serveur 1 **/
app.get('/', function(req, res) {
  console.log("ICI port 8081");
});



/** Fonction serveur 2 **/
admin_app.get('/', function(req, res) {
  console.log("ICI port 8082");
});



/** Fonction serveur 3 **/
t_app.get('/', function(req, res) {
  console.log("ICI port 8083");
});



/** Server 1 **/
var server = require('http').createServer(app);

server.listen(port, function() {
    console.log('Listening on port ' + port);
});




/** Server 2 **/
var admin_server = require('http').createServer(admin_app);

admin_server.listen(admin_port, function() {
    console.log('Listening on admin port ' + admin_port);
});




/** Server 3 **/
var t_server = require('http').createServer(t_app);

t_server.listen(t_port, function() {
    console.log('Listening on port ' + t_port);
});