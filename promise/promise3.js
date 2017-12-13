'use strict';

var promise = new Promise((fulfill, reject) => {
    setTimeout(function(){    	    	
        reject(new Error("REJECTED!"));
    }, 300);
});

function onReject(error) {
	console.log(error.message);
}

promise.then(null,onReject);