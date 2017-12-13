const http = require('http');

function httpGet(request){

	http.get(request,(response) => {
        response.setEncoding("utf-8").on("data", (data) =>{
            console.log(data);
        });
	});

}

httpGet(process.argv[2]);