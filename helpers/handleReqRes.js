/*
 *Title: Handle Request Response
 *Description: Handle Request and response
 *Author: Md Khokanuzzaman khokan
 * Date: 09/06/2021
 */

//  dependencies
const url = require('url');
const { StringDecoder } = require('string_decoder');
// eslint-disable-next-line import/no-unresolved
const routes = require('../routes');
const { notFoundHanlder } = require('../handlers/routeHandlers/notFoundHanlders');

// scafholding object
const handler = {};
handler.handleReqRes = (req, res) => {
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
    const decoder = new StringDecoder('utf-8');
    // eslint-disable-next-line no-unused-vars
    let realData = '';

    const handlerProperties = {
        parseurl,
        path,
        trimmedPath,
        method,
        queryStringObject,
        headersInfo,
    };

    const chosenHandler = routes[trimmedPath] ? routes[trimmedPath] : notFoundHanlder;
    chosenHandler(handlerProperties, (statusCode, payload) => {
        // eslint-disable-next-line no-param-reassign
        statusCode = typeof statusCode === 'number' ? statusCode : 500;
        // eslint-disable-next-line no-param-reassign
        payload = typeof payload === 'object' ? payload : {};

        const payloadString = JSON.stringify(payload);

        res.writeHead(statusCode);
        res.end(payloadString);
    });

    req.on('data', (buffer) => {
        realData += decoder.write(buffer);
    });

    req.on('end', () => {
        realData += decoder.end();
        // console.log('body data: ', realData);
        // console.log('header info: ', headersInfo);
        // console.log('query data', queryStringObject);
        // console.log('request method: ', method);
        // console.log('trimmed path: ', trimmedPath);
        res.end();
    });
};
module.exports = handler;
