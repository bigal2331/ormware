var express = require('express');
var app = express();
var ormLite = require('./orm-lite');
var TestUser = ormLite.TestUser;

var getAll = function(req, res, next){
	console.log('orm-lite');
	
	ormLite.getAll(TestUser, function(data){
		console.log(data);
	})

	next()
}

var getByID = function(req, res, next){
	console.log('orm-lite');
	
	ormLite.findById(2,TestUser, function(data){
		console.log(data);
	})

	next()
}

app.use(getAll);
app.use(getByID);


app.get('*',function(req, res){
	res.send('hello')
})


app.listen(3000,function(){

	console.log('listen at 3000');
})