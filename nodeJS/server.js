var express = require('express');
var cors = require('cors');
var app = express();



app.use(function(req,res,next){
	res.header('Access-Control-Allow-Origin','*');
	res.header('Access-Control-Allow-Methods','GET,PUT,POST');
	res.header('Access-Control-Allow-Headers','Content-Type');
	next();
});

/* Afficher tout */
app.get('/maps/All',function(req, res){
	 res.setHeader('Content-Type', 'application/json');
	 res.contentType('json');
	 res.json({
        Name : "Tom",
        Description : "Hello it's me!"
   	 });
 	 //res.send({ some: JSON.stringify({response:'json'}) });
 	 console.log('ok');
 	 res.end();
});

/* renvoie tout par parts */

app.listen(8081);