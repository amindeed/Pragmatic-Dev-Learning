const fs = require("fs");

const routeMap = {
    "": "./index.html",
    about: "./pages/about.html",
    services: "./pages/services.html",
  };

function route(res, pathname) {
  console.log(`About to route a request for ${pathname}`);

  // Render the requested page
  var fileMatchedToRoute = routeMap[pathname.slice(1)];
  fs.stat(`${fileMatchedToRoute}`, (err, stats) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/html");

    if (stats) {
      fs.createReadStream(fileMatchedToRoute).pipe(res);
    } else {
      res.statusCode = 404;
      res.end("Sorry, page not found");
    }
  });

}

exports.route = route;
