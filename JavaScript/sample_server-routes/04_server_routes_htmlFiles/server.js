var http = require("http");
var url = require("url");

const hostname = "127.0.0.1";
const port = 8888;

function start(route) {
  http
    .createServer((request, response) => {

      var pathname = url.parse(request.url).pathname;
      console.log("Request for " + pathname + " received.");

      route(response, pathname);

    })
    .listen(port, hostname, () => {
        console.log(`Server running at http://${hostname}:${port}/`);
    });
}

exports.start = start;

/*
url.parse(request.url) =  Url {
  protocol: 'https:',
  slashes: true,
  auth: null,
  host: 'localhost:8888',        
  port: '8888',
  hostname: 'localhost',
  hash: null,
  search: '?foo=bar&hello=world',
  query: 'foo=bar&hello=world',
  pathname: '/amindeed/kadeery',
  path: '/amindeed/kadeery?foo=bar&hello=world',
  href: 'https://localhost:8888/amindeed/kadeery?foo=bar&hello=world'
}
*/
