const routeMap = require("./routeMap.json");
const fs = require("fs");
const mustache = require("mustache");
//var appLog = require("./appLog");

function route(res, parsedUrlQueryString, pathname) {
    console.log(`About to route a request for ${pathname}`);

    // Path name without trailing slash(es)
    var pathname = pathname.replace(/\/+$/, "");

    // 'parsedUrlQueryString' is provided as a Mustache template view
    renderHtml(res, parsedUrlQueryString, routeMap[pathname], (err) => {
        if (err) {
            console.error(err.message);
            notFound(res);
            return;
        }
    });
}


function renderHtml(res, templateView, content = routeMap["/404"]) {
    if (content.type == "static") {
        res.sendstatusCode = 200;
        res.setHeader("Content-Type", content.httpContentType);
        sendStaticContent(content.filePath, res, (err) => {
            if (err) {
                console.error(err.message);
                notFound(res);
                return;
            }
        });
    } else if (content.type == "template") {
        res.sendstatusCode = 200;
        res.setHeader("Content-Type", content.httpContentType);
        fs.readFile( content.filePath, "utf-8", (err, readData) => {
            if (err) {
                console.error(err.message);
                notFound(res);
                return;
            }
            res.write( mustache.render( readData, templateView ) );
            res.end();
        });
    } else {
        notFound(res);
    }
}


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


function notFound(res){
    res.statusCode = 404;
    res.setHeader("Content-Type", "text/html");
    fs.createReadStream(routeMap["/404"].filePath).pipe(res);
}


exports.route = route;
