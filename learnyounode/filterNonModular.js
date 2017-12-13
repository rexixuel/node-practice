let fs = require("fs");
let path = require("path");
function filter(args){

    fs.readdir(args[2], (err, entries) => {
        entries.forEach((entry, index) => {
        	if (path.extname(entry).split(".")[1] == args[3]){
                console.log(entry);
        	}
        });
    });
}

filter(process.argv);
