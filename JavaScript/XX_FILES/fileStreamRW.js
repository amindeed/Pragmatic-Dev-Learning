const fs = require("fs");

var filename = "./test.html";

// Construct our own writable stream for testing. 
// Alternatively, we can set an output file to receive the stream :
//// var myWritableStream = fs.createWriteStream('./target.txt');
var stream = require('stream');
var myWritableStream = new stream.Writable({
    write: function(chunk, encoding, next) {
      console.log(chunk.toString());
      next();
    }
  });


sendStaticContent(filename, myWritableStream, (err) => {
    if (err) {
        console.error(err.message);
        return;
    }
    console.log("Operation succeeded!");
});


function sendStaticContent(filePath, writableStream, callback) {
    var readStream = fs.createReadStream(filePath);

    readStream.on("open", () => {
        readStream.pipe(writableStream);
    });

    readStream.on('end', () => {
        callback(null);
    });

    readStream.on("error", (err) => {
        callback(new Error(err.message));
    });

    writableStream.on("error", (err) => {
        callback(new Error(err.message));
    });
}
