'use strict';

function parsePromised(){
    try {
    	var parsed = JSON.parse(process.argv[2]);
    	return Promise.resolve(parsed);
    } catch (error){
    	return Promise.reject(error.message);
    }

}

parsePromised()
.catch(console.log);