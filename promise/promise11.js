'use strict';

function all(promise1, promise2) {
	var internalPromise = new Promise((resolve, reject) => {
        var counter = 0;
        var values = [];
        
        promise1.then((value) =>{
        	counter++;
        	values.push(value);
        }).then(() => {
        	if (counter >=2 ){
        	   resolve(values);        		
        	}
        })

        promise2.then((value) => {
        	counter++;
        	values.push(value);
        }).then(() => {
        	if (counter >=2 ){
        	   resolve(values);        		
        	}
        })

	});

	return internalPromise;
}

all(getPromise1(), getPromise2()).then(console.log);