/*
 *Title: Handle Request Response
 *Description: Handle Request and response
 *Author: Md Khokanuzzaman khokan
 * Date: 09/06/2021
 */

const http = require('http');
const { handleReqRes } = require('./helpers/handleReqRes');

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

app.handleReqRes = handleReqRes;

app.createServer();
