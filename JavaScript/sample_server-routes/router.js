const routeMap = require("./routeMap.json");
const fs = require("fs");
const mustache = require("mustache");

function route(res, queryObj, pathname) {
    console.log(`About to route a request for ${pathname}`);

    // Path name without trailing slash(es)
    var pathname = pathname.replace(/\/+$/, "");

    // Parsed HTTP request query 'queryObj' is provided here as Mustache template view
    renderHtml(res, queryObj, routeMap[pathname], (err) => {
        if (err) {
            console.error("############ ", err.message);
            return;
        }
        console.log("************ Page well rendered!");
    });
}


function renderHtml(res, templateView, content, callback) {
    //try {
        if (content.contentType == "static") {
            res.sendstatusCode = 200;
            res.setHeader("Content-Type", "text/html");
            sendStaticContent(content.filePath, res, (err) => {
                //if (err) throw err;
                //if (err) {console.log('File not !! Error msg: ', err.message); return}
                if (err) return errorHandler(err);
                console.log("Static content sent back!");
            });
            //res.end();

        } else if (content.contentType == "template") {
            res.sendstatusCode = 200;
            res.setHeader("Content-Type", "text/html");
            fs.readFile( content.filePath, "utf-8", (err, readData) => {
                //if (err) throw err;
                if (err) return errorHandler(err);
                res.write( mustache.render( readData, templateView ) );
                res.end();
            });
        } else {
            res.statusCode = 404;
            fs.createReadStream(routeMap["/404"].filePath).pipe(res);
        }
        //callback(null);
    //}
    /* catch (err) {
        res.statusCode = 404;
        fs.createReadStream(routeMap["/404"].filePath).pipe(res);
        callback(new Error(err.message));
    } */
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


exports.route = route;
