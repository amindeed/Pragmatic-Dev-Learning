const routeMap = require("./routeMap.json");
const fs = require("fs");
const mustache = require("mustache");
//var appLog = require("./appLog");


function route(res, pathname = "/404", parsedUrlQueryString = "", statusCode) {
    console.log(`About to route a request for ${pathname}`);

    // Path name without trailing slash(es)
    var pathname = pathname.replace(/\/+$/, "");

    // 'parsedUrlQueryString' is provided as a Mustache template view.
    // Is is correct to provide an error callback function as an argument?
    renderHtml(res, routeMap[pathname], parsedUrlQueryString, statusCode, (err) => {
        if (err) {
            console.error(err.message);
            notFound(res);
            return;
        }
    });
}


function renderHtml(res, content = routeMap["/404"], queryStringAsTemplateView = "", httpStatusCode) {
    if (content.redirect) {
        console.log('URL should be redirected');
        //res.statusCode = content.redirect.statusCode;
        // (1) Rewrite URL ?
        // (2) Full redirect URL, or just a path ?
        var newPathname = content.redirect.redirectPath;
        var redirectStatusCode = content.redirect.statusCode;
        route(res, newPathname, queryStringAsTemplateView, redirectStatusCode);
    } else if (content.type == "static") {
        if (content === routeMap["/404"]) { 
            notFound(res);
            return; 
        }
        res.statusCode = httpStatusCode?httpStatusCode:200;
        res.setHeader("Content-Type", content.httpContentType);
        sendStaticContent(content.filePath, res, (err) => {
            if (err) {
                console.error(err.message);
                notFound(res);
                return;
            }
        });
    } else if (content.type == "template") {
        res.statusCode = httpStatusCode?httpStatusCode:200;
        res.setHeader("Content-Type", content.httpContentType);
        fs.readFile( content.filePath, "utf-8", (err, readData) => {
            if (err) {
                console.error(err.message);
                notFound(res);
                return;
            }
            res.write( mustache.render( readData, queryStringAsTemplateView ) );
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
