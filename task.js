var db = require("./db.js");

module.exports = {
	get: function(callback){
		db.query('SELECT * FROM tasks', function(err, results){
			if(err){
				throw err;
			}
			callback(results);
		});
	}
};