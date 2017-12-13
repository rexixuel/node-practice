let fs = require("fs");

function firstIO(args){

    fs.readFile(args[2], "utf-8", (err, data) => {
        console.log(data.split("\n").length - 1);
    });    
    
}

firstIO(process.argv);
