const http = require('http');

function juggle(requests){
	requests.splice(0,2);
    requests.reduce(function(sequence, request){
        return sequence.then(function() {
        	return httpGet(request);
        })
        .then((request) => console.log(request))
        .catch(error => console.error(error));
    }, Promise.resolve());
}

var httpGet = function (request){
    httpGetPromise = new Promise((resolve,reject) => {
	    dataBuffer = "";
		http.get(request,(response) => {		
	        response.setEncoding("utf-8").on("data", (data) => {        	
	            dataBuffer += data;
	        })
            if (response.statusCode != 200){
            	reject(Error(req.statusText));
            }
	        response.on("end", (data) => {
	            resolve(dataBuffer);	            
	        })
		});
	});

	return httpGetPromise;
};

juggle(process.argv);
