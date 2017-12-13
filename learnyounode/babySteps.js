function babySteps(args){
	let sum = 0;
    args.forEach((arg, index) => {
        if(index > 1){        	
        	sum += +arg;
        }
    });

    return sum;
}

console.log(babySteps(process.argv));
