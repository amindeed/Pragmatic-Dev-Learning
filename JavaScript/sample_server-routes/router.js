const routeMap = require("./routeMap.json");
const fs = require("fs");
const mustache = require("mustache");

function route(res, queryObj, pathname) {
    console.log(`About to route a request for ${pathname}`);

    // Path name without trailing slash(es)
    var pathname = pathname.replace(/\/+$/, "");

    // Parsed HTTP request query 'queryObj' is provided here as Mustache template view
    if (routeMap[pathname]) {
        renderHtml(res, queryObj, routeMap[pathname]);
    } else {
        res.statusCode = 404;
        fs.createReadStream(routeMap["/404"].filePath).pipe(res);
    }
}

function renderHtml(res, templateView, content) {
    fs.stat(`${content.filePath}`, (err, stats) => {
        if (stats) {
            res.sendstatusCode = 200;
            res.setHeader("Content-Type", "text/html");

            if (content.contentType == "static") {
                fs.createReadStream(content.filePath).pipe(res);
                //res.end();
            } else if (content.contentType == "template") {
                fs.readFile(
                    content.filePath,
                    "utf-8",
                    function (err, readData) {
                        if (err) throw err;
                        var renderedContent = mustache.render(
                            readData,
                            templateView
                        );
                        res.write(renderedContent);
                        res.end();
                    }
                );
            }
        } else {
            res.statusCode = 404;
            fs.createReadStream(routeMap["/404"].filePath).pipe(res);
        }
    });
}

exports.route = route;
