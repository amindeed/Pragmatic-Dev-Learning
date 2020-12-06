const fs = require("fs");
var filename = './test.html';
var writableStream = fs.createWriteStream('./target.txt');

var readStream = fs.createReadStream(filename);

// This will wait until we know the readable stream is actually valid before piping
readStream.on('open', function () {
  readStream.pipe(writableStream);
});

readStream.on('error', function(err) {
  console.error(err.message);
});