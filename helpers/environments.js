/*
 *Title: Environments 
 *Description: Handle environements operations
 *Author: Md Khokanuzzaman khokan
 * Date: 11/06/2021
 */

// configuration
// app scaffolding
const environements ={};

environements.staging ={
    port: 3000,
    envName:'staging'
};

environements.production ={
    port: 5000,
    envName: 'production'
}



const currentEnvironment = typeof(process.env.NODE_ENV) === 'string'? process.env.NODE_ENV :'staging';

console.log('currentEnvironment:',currentEnvironment);

const environementToExport = typeof(environements[currentEnvironment]) === 'object' ? environements[currentEnvironment] : environements.staging;
console.log('environmentTo Export:',environementToExport);
// export module
module.exports = environementToExport;