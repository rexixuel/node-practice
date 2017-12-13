const isMomHappy = true;
var expect = require("chai").expect;
// Promise

const willIGetNewPhone = new Promise(
    (resolve, reject) => { // fat arrow
        if (isMomHappy) {
            const phone = {
                brand: 'LG',
                color: 'blue'
            };
            resolve(phone); // fulfilled
        } else {
            const reason = new Error('mom is not happy');
            reject(reason); // reject
        }
    }
);

const showOff = (phone) => {
	const message = 'Hey friend, I have a new ' 
			+ phone.color + ' ' + phone.brand + ' phone';

    return Promise.resolve(message);

};

module.exports = willIGetNewPhone
        .then(showOff)
        .then(fulfilled => {return fulfilled;}) // success
        .catch(error => console.log(error.message));

