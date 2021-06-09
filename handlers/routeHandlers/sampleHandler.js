/*
 *Title: Sample Hander
 *Description: Sample Handler
 *Author: Md Khokanuzzaman khokan
 * Date: 09/06/2021
 */
const handler = {};

handler.sampleHandler = (handlerProperties, callback) => {
    console.log(handlerProperties);
    callback(200, {
        message: 'This is the valid URL',
    });
};

module.exports = handler;
