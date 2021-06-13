/* eslint-disable no-underscore-dangle */
/*
 *Title: User Handler
 *Description: User Handler
 *Author: Md Khokanuzzaman khokan
 * Date: 11/06/2021
 */

// dependencies

const data = require('../../lib/data');

const handler = {};

handler.userHandler = (handlerProperties, callback) => {
    console.log('user handler');
    const acceptedMethod = ['get', 'post', 'put', 'delete'];
    if (acceptedMethod.indexOf(handlerProperties.method) > -1) {
        // eslint-disable-next-line no-underscore-dangle
        handler._users[handlerProperties.method](handlerProperties, callback);
    } else {
        callback(405);
    }
};

// eslint-disable-next-line no-underscore-dangle
handler._users = {};

// eslint-disable-next-line no-underscore-dangle
handler._users.post = (handlerProperties, callback) => {
    // eslint-disable-next-line prettier/prettier
    const firstName = typeof (handlerProperties.body.firstName) === 'string' && handlerProperties.body.firstName.trim().length > 0 ? handlerProperties.body.firstName : false;
    // eslint-disable-next-line prettier/prettier
    const lastName = typeof (handlerProperties.body.lastName) === 'string' && handlerProperties.body.firstName.trim().length > 0 ? handlerProperties.body.lastName : false;
    // eslint-disable-next-line prettier/prettier
    const phone = typeof (handlerProperties.body.phone) === 'string' && handlerProperties.body.firstName.trim().length === 11 ? handlerProperties.body.phone : false;
    // eslint-disable-next-line prettier/prettier
    const password = typeof (handlerProperties.body.password) === 'string' && handlerProperties.body.firstName.trim().length > 0 ? handlerProperties.body.password : false;

    if (firstName && lastName && phone && password) {
        data.read('user', phone, (err, user) => {
            if (err) {
            } else {
                callback(500, {
                    error: 'There was a problem! may user already exist!',
                });
            }
        });
    } else {
        callback(400, {
            error: 'you have a problem with your request',
        });
    }
};

handler._users.get = (handlerProperties, callback) => {
    console.log('user handler');
    callback(200);
};

handler._users.put = (handlerProperties, callback) => {};

handler._users.delete = (handlerProperties, callback) => {};

module.exports = handler;
