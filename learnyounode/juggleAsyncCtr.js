const http = require('http');

function printResult(results){
	results.forEach(function(result)) {
        console.log(result);
	}
}

var httpGet = function (index){    
    let dataBuffer = [];
	http.get(process.argv[2 + index],(response) => {		
        response.setEncoding("utf-8").on("data", (data) => {        	
            dataBuffer[index] += data;
        });

        response.on("end", (data) => {
            ctr++;
            if (ctr === 3){
                printResults(dataBuffer);
            }            
        })
	});
};

for (var i = 0; i < process.argv.length; i++) {
    httpGet(i);
}
