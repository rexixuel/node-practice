let filter = require("./filter.js");

filter(process.argv[2],process.argv[3],(err,data) => {
	if (err){
        console.error(err);		
	} else {
		data.forEach((file) =>{
            console.log(file);
		});
	}
});
