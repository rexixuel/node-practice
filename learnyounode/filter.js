let fs = require("fs");
let path = require("path");

module.exports = function filter(directory, ext, callback){
    fs.readdir(directory, (err, entries) => {
    	
    	if (err){
    	    return callback(err);
        }

    	let filteredFiles = [];
        entries.forEach((entry, index) => {
        	if (path.extname(entry).split(".")[1] == ext){
                filteredFiles.push(entry); // push into array
        	}
        });

        callback(null, filteredFiles);    	

    });

};