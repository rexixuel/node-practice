var fs = require('fs');

fs.appendFile('mynewfile1.txt', 'You have been updated!', function (err) {
  if (err) throw err;
  console.log('Updated!');
});