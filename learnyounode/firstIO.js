let fs = require('fs');

function firstIO(args){
	let total = 0;
    let data = fs.readFileSync(args[2]);    
    let dataSplit = data.toString().split("\n");   

    return dataSplit.length - 1;
    
}

console.log(firstIO(process.argv));
