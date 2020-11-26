
// Download a file through HTTP, asynchronuously.

// Code inspired from : https://stackoverflow.com/a/11944984/3208373

const http = require('http');
const fs = require('fs');

const file = fs.createWriteStream("ubuntu.iso");

const request = http.get("http://archive.ubuntu.com/ubuntu/dists/bionic/main/installer-amd64/current/images/netboot/mini.iso", function(response) {
  response.pipe(file);
});
