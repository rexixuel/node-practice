var mongo = require('mongodb').MongoClient
var url = "mongodb://localhost:27017/learnyoumongo";

mongo.connect(url, (err,db) => {
	if (err) {
		console.log(err);
	}
	var collection = db.collection('docs');
    var object = {
	   firstName : process.argv[2],
       lastName : process.argv[3]
	}
	collection.insert(object, (err, results) => {
		if (err) {
			console.log(err);
		} else {
			// var json = JSON.stringify(results.ops)
		    console.log(JSON.stringify(object));
		}
	});

	db.close();
});