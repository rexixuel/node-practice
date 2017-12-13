var net = require("net");

function zeroFill(number){
    if (number < 10) {
    	number = '0' + number;
    }
    return number
}

net.createServer((socket) => {
	var currentDate = new Date();
	// YYYY-MM-DD hh:mm
    var formattedDate = currentDate.getFullYear() + "-" 
                      + zeroFill((+currentDate.getMonth() + 1)) + "-"
                      + zeroFill(currentDate.getDate()) + " "
                      + zeroFill(currentDate.getHours()) + ":"
                      + zeroFill(currentDate.getMinutes()) + "\n";

    socket.end(formattedDate);

}).listen(process.argv[2]);