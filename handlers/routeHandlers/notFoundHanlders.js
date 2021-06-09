/*
 *Title: Not Found Handler
 *Description: Not Found Handler
 *Author: Md Khokanuzzaman khokan
 * Date: 09/06/2021
 */

const handler = {};

handler.notFoundHanlder = (handlerProperties, callback) => {
    console.log(handlerProperties);
    callback(404, {
        message: 'the Url Was not found',
    });
};

module.exports = handler;
