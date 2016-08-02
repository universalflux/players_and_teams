var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

app.use(express.static(__dirname + "/static"));

app.use(bodyParser.json());

app.listen(9000, function(req, res){
	console.log("Server 9000 is running");
});