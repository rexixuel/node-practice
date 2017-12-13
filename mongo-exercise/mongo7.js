var mongo = require('mongodb').MongoClient
var url = "mongodb://localhost:27017/" + process.argv[2];

mongo.connect(url, (err,db) => {
	if (err) {
		console.log(err);
	}
	var collection = db.collection(process.argv[3]);

	collection.remove({
        _id: process.argv[4] 
	}, (err, results) => {
		if (err) {
			console.log(err);
		} 
	    db.close();
	});

});