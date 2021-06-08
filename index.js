const http = require('http');
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
    res.end('hello khokan');
};

app.createServer();
