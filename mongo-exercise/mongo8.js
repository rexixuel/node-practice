var mongo = require('mongodb').MongoClient
var url = "mongodb://localhost:27017/learnyoumongo";

mongo.connect(url, (err,db) => {
	if (err) {
		console.log(err);
	}
	var collection = db.collection("parrots");

	collection.count({
        age: {$gt : +process.argv[2]}
	}, (err, results) => {
		if (err) {
			throw err
		} 

		console.log(results);
	    db.close();
	});

});