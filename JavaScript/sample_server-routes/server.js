var http = require("http");
var url = require("url");
const querystring = require('querystring');

const hostname = "127.0.0.1";
const port = 8888;

function start(route) {
  http
    .createServer((request, response) => {

      var pathname = url.parse(request.url).pathname;
      console.log("Request for " + pathname + " received.");

      var urlQueryString = url.parse(request.url).query;
      var parsedQueryString = querystring.parse(urlQueryString);

      route(response, pathname, parsedQueryString);

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

/*
                               url.parse(string).query
                                           |
           url.parse(string).pathname      |
                       |                   |
                       |                   |
                     ------ -------------------
http://localhost:8888/start?foo=bar&hello=world
                                ---       -----
                                 |          |
                                 |          |
              querystring(string)["foo"]    |
                                            |
                         querystring(string)["hello"]
*/
