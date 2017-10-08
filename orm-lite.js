var Sequelize = require('sequelize');


var sequelize = new Sequelize({
	username: 'postgres',
	password: 'Letmeinnow!',
	dialect: 'postgres',
	database: 'baby_names_development',
	host: 'localhost'
});


var TestUser = sequelize.define('test_user',{
	firstname: Sequelize.STRING,
	lastname: Sequelize.STRING
});
var ormlite ={

	initialize : function(){


		TestUser.sync().then(function(){
			TestUser.create({
				firstname: 'jackson',
				lastname: 'pollock'
			})
			TestUser.create({
				firstname: 'sylvia',
				lastname: 'plath'
			})
			TestUser.create({
				firstname: 'daenerys',
				lastname: 'targaryen'
			})
		})


	},
	TestUser: TestUser,


	getAll: function(tableName, callback){
		
		this.initialize();
		tableName.findAll().then(function(rows){
			callback(rows);

		})		
	},

	findById: function(id, tableName, callback){
		this.initialize();
		tableName.findById(id).then(function(row){
			callback(row);

		})	
	}

}


module.exports = ormlite;