var fs = require('fs');

fs.writeFile('mynewfile3.txt', 'Update. Complete.', function (err) {
  if (err) throw err;
  console.log('Updated!');
});