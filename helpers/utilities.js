/*
 *Title: utilities
 *Description: Utilites
 *Author: Md Khokanuzzaman khokan
 * Date: 13/06/2021
 */
const utilities = {};
utilities.parseJson = (jsonString) => {
    let output = '';
    try {
        output = JSON.stringify(jsonString);
    } catch {
        output = {};
    }
};

module.exports = utilities;
