/* --Requires-- */
var express = require('express');
var bodyParser = require('body-parser');
var util = require('util');
var Employee = require('./server/api/employee');
var Query = require('./server/api/query');

var app = express();
var port = 8089;
var router = express.Router();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', function(req, res) {
	res.sendfile('app/index.html');
});

app.use(express.static(__dirname+"/app"));

app.use('/api/employees', require('./server/api/employee'));
app.use('/api/queries', require('./server/api/query'));
app.use('/api/serverCalls', require('./server/api/serverCalls'));

router.get("/",function(req,res){
	res.json({ message: 'Api up and running !' });
});

app.listen(port);
console.log('Server Started on port ' + port);