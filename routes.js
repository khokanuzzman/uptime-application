/*
 *Title: Routes
 *Description: Application Routes
 *Author: Md Khokanuzzaman khokan
 * Date: 09/06/2021
 */

const { sampleHandler } = require('./handlers/routeHandlers/sampleHandler');
const { userHandler } = require('./handlers/routeHandlers/userHandler');

const routes = {
    sample: sampleHandler,
    user: userHandler,
};

module.exports = routes;
