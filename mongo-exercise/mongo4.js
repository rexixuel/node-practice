var mongo = require('mongodb').MongoClient
var url = "mongodb://localhost:27017/learnyoumongo";

mongo.connect(url, (err,db) => {
	var collection = db.collection('parrots');

	collection.find({
		age : { $gt : parseInt(process.argv[2])}
	},{
		 name: 1
		, age: 1
		, _id: 0
		
	}).toArray((err, parrots) => {
        console.log(parrots)
	});

	db.close();
});