var mongo = require('mongodb').MongoClient
var url = "mongodb://localhost:27017/learnyoumongo";

mongo.connect(url, (err,db) => {
	if (err) {
		console.log(err);
	}
	var collection = db.collection("prices");

	collection.aggregate([
		{$match: { size: process.argv[2]}}
		,{$group: 
				{ _id: 'average'
				  ,average: {
				       $avg: "$price"
				   }
			    }}

	]).toArray((err, results) => {
		if (err) {
			throw err
		} 

		console.log(Number(results[0].average).toFixed(2));
	    db.close();
	});

});