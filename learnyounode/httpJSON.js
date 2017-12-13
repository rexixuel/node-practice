var http = require("http");
var url = require("url");

http.createServer((request, response) => {
    if (request.method !== "GET"){
    	return response.end("NOT a GET. Please send GET request. \n")
    }


    var parsedUrl = url.parse(request.url, true);
    var date = new Date(parsedUrl.query.iso);

    if (parsedUrl.pathname === "/api/unixtime") {
        var unixtime = date.getTime();

        var jsonObj = { "unixtime" : unixtime };
        
    } else if(parsedUrl.pathname === "/api/parsetime") {
	    var hour = date.getHours();
	    var minute = date.getMinutes();
	    var second = date.getSeconds();

        var jsonObj = { "hour" : hour,  "minute" : minute, "second" : second};

    } else {
    	response.end("404")
    }
   
    

	response.writeHead(200, {'Content-Type': 'application/json'});    
    response.end(JSON.stringify(jsonObj));

}).listen(+process.argv[2]);