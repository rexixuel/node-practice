'use strict';

function alwaysThrows(){
    throw "OH NOES";
}

function iterate(num){

	console.log(num);

	return Promise.resolve(num + 1);

}

iterate(1)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(alwaysThrows)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(null,console.log);
