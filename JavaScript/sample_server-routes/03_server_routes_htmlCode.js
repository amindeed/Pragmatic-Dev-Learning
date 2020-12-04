const http = require("http");
const fs = require("fs");

const hostname = "127.0.0.1";
const port = 3000;

const server = http.createServer((req, res) => {

  const routeMap = {
    "": "index.html",
    about: "about.html",
    services: "services.html",
  };

  render(res, routeMap[req.url.slice(1)]);
  // The 'url' property is only valid for request obtained from 'http.Server',
  // we would need to import the 'url' module (url = require("url");) if we want to parse the request URL.
});

function render(res, htmlFile) {
  fs.stat(`./${htmlFile}`, (err, stats) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");

    if (stats) {
      fs.createReadStream(htmlFile).pipe(res);
    } else {
      res.statusCode = 404;
      res.end("Sorry, page not found");
    }
  });
}

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});


// req.url = '/amindeed/kadeery?foo=bar&hello=world'


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
