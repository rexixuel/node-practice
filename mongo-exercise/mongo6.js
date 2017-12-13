var mongo = require('mongodb').MongoClient
var url = "mongodb://localhost:27017/learnyoumongo";

mongo.connect(url, (err,db) => {
	if (err) {
		console.log(err);
	}
	var collection = db.collection('users');
    var object = {
	   age : 40
	}
	collection.update({
		username : "tinatime"		
	},{$set : object}
		, (err, results) => {
		if (err) {
			console.log(err);
		} 
	});

	db.close();
});