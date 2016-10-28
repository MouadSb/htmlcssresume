var express = require('express');
var cors = require('cors');


var app = express();


app.use(function(req,res,next){
	res.header('Access-Control-Allow-Origin','*');
	res.header('Access-Control-Allow-Methods','GET,PUT,POST');
	res.header('Access-Control-Allow-Headers','Content-Type');
	res.setHeader('Content-Type', 'application/json');
	 res.contentType('json');
	next();
});

/* Afficher tout */
app.get('/maps/All',function(req, res){
	 
	 res.json({
        Name : "Tom",
        Description : "Hello it's me!"
   	 });
 	 //res.send({ some: JSON.stringify({response:'json'}) });
 	 console.log('ok');
 	 console.log('Express server started on port %s', req.app.settings.port);
 	 res.end();
})
.get('/maps/pharmacieAll',function(req,res){
	console.log('test');
	res.json({ allpharmacie: 'allpharmacie'});
	res.send("tes");
})

.get('/maps/centreAll',function(req,res){
	res.json({ allcentre: 'allcentre'});
})

.get('/maps/hopitauxAll',function(req,res){
	res.json({ allhopitau: 'allhopitau'});
})

/* renvoie par nom */
.get('/maps/:nompharmacie/pharmacie',function(req,res){

	var nompharmacie = req.params.nompharmacie;
	res.json({ nompharmacie: nompharmacie});
})

.get('/maps/:nomcentre/centre',function(req,res){

	var nomcentre = req.params.nomcentre;
	res.json({ nomcentre: nomcentre});
})

.get('/maps/:nomhopital/hopital',function(req,res){

	var nomhopital = req.params.nomhopital;
	res.json({ nomhopital: nomhopital});
})

/* renvoie par motcle */
.get('/maps/:cle/All',function(req, res){

	var cle = req.params.cle;
	res.json({ cle: cle });
})
/* renvoie tout par parts */

app.listen(8081);
app.listen(8082);