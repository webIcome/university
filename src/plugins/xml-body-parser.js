import xml2js from 'xml2js';

export default (req, res, next) => {
    if (req._body) return next();

    req.body = req.body || {};

    if ("GET" == req.method || 'HEAD' == req.method) return next();

    if (!(req.is("application/xml") || req.is("text/xml"))) return next();

    req._body = true;

    var buf = '';
    req.setEncoding('utf8');
    req.on('data', function (chunk) {
        buf += chunk;
    });
    req.on('end', function () {
        var parseString = xml2js.parseString;
        parseString(buf, {explicitRoot: false, explicitArray: false}, function (err, json) {
            if (err) {
                err.status = 400;
                next(err);
            } else {
                req.body = json;
                next();
            }
        });
    });
}