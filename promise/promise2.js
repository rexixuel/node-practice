'use strict';

var promise = new Promise((fulfill, reject) => {
    setTimeout(function(){    	
    	var message = "FULFILLED!";
        fulfill(message);
    }, 300);
});

promise.then(console.log);