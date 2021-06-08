const http = require('http');
const url = require('url');
// scafholding object
const app = {};
app.config = {
    port: 3000,
};
app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    server.listen(app.config.port, () => {
        console.log(`port litesing...${app.config.port}`);
    });
};

app.handleReqRes = (req, res) => {
    const parseurl = url.parse(req.url, true);
    // path
    const path = parseurl.pathname;
    // trimmed path
    const trimmedPath = path.replace(/^\/+|\/+$/g, '');
    // print variable
    // get method print
    const method = req.method.toLowerCase();
    // querystringobject
    const queryStringObject = parseurl.query;
    const headersInfo = req.headers;

    // print console.........

    console.log(headersInfo);
    console.log(queryStringObject);
    console.log(method);
    console.log(trimmedPath);
    res.end('hello khokan bhai');
};

app.createServer();
