'use strict';

var fulfill = false;

function promise() {
	if(fulfill){
        return Promise.resolve("AS PROMISED!");
	} else{
	    return Promise.reject(new Error("AS not PROMISED!"));
	}
};

promise().then(console.log).catch(console.log);

console.log("MAIN PROGRAM");