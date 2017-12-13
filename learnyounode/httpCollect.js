const http = require('http');

function httpCollect(request){
    let dataBuffer = "";
	http.get(request,(response) => {		
        response.setEncoding("utf-8").on("data", (data) =>{        	
            dataBuffer += data;
        });

        response.on("end", (data) => {
            console.log(dataBuffer.length);
            console.log(dataBuffer);
        });
	});

}

httpCollect(process.argv[2]);