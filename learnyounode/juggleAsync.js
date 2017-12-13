const http = require('http');

function juggle(requests){
    httpGet(requests[2]).then((data) => {
    	console.log(data);
    	return httpGet(requests[3]);
    }).then((data) => {
    	console.log(data);
    	return httpGet(requests[4]);
    }).then((data) => {
    	console.log(data);
    });
}

var httpGet = function (request){
    httpGetPromise = new Promise((resolve,reject) => {
	    dataBuffer = "";
		http.get(request,(response) => {		
	        response.setEncoding("utf-8").on("data", (data) => {        	
	            dataBuffer += data;
	        });

	        response.on("end", (data) => {
	            resolve(dataBuffer);	            
	        })
		});
	});

	return httpGetPromise;
};

juggle(process.argv);