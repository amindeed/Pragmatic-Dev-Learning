const http = require("http");

const port = 3000;

const server = http.createServer((req, res) => {
  homeRoute(req, res);
});

function homeRoute(req, res) {
  if (req.url === "/") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    // OR, in one function call :
    // res.writeHead(200, { "Content-Type": "text/text" });
    res.end("Set Home Route\n");
  } /* else if (req.url === "/about") {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.end("Set About Route\n");
  } */
}

server.listen(port, () => {
  console.log("Server running at http://:${port}/");
});
