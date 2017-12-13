var http = require("http");
var fs = require("fs");

http.createServer((request, response) => {
	response.writeHead(200, {'Content-Type': 'text/html'});    

	var file = fs.createReadStream(process.argv[3]);
	file.pipe(response);


}).listen(+process.argv[2]);