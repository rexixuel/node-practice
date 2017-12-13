var http = require("http");
var through2Map = require("through2-map");
var uc = require("upper-case");
http.createServer((request, response) => {
    if (request.method !== "POST"){
    	return response.end("NOT a POST. Please send POST request. \n")
    }

	response.writeHead(200, {'Content-Type': 'text/html'});    

    request.pipe(through2Map((chunk) => {
    	return uc(chunk.toString());
    })).pipe(response);


}).listen(+process.argv[2]);