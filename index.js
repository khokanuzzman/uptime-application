/*
 *Title: Handle Request Response
 *Description: Handle Request and response
 *Author: Md Khokanuzzaman khokan
 * Date: 09/06/2021
 */

const http = require('http');
const { handleReqRes } = require('./helpers/handleReqRes');
const environement = require('./helpers/environments');
const data = require('./lib/data');

// scafholding object
const app = {};

// testing file system
// @TODO: muche dibo pore

// write data
// data.create('test','newFile',{name:'bangladesh',language:'bangla'},(err)=>{
//     console.log("error was",err);
// });

// read data
// data.read('test','newFile',(err,data)=>{
//     console.log(err,data)
// })

// data.update('test','newFile', { name:'England',language:'English'},(err,data)=>{
//     console.log('error and data: ',err);
// })

data.delete('test','newFile',(err)=>{
    console.log(err);
});

app.createServer = () => {
    const server = http.createServer(app.handleReqRes);
    console.log('port: ',environement.port);
    server.listen(environement.port, () => {
        console.log(typeof(process.env))
        console.log(`the environment variable is ${process.env.NODE_ENV}`)
        console.log(`port litesing...${environement.port}`);
    });
};

app.handleReqRes = handleReqRes;

app.createServer();
