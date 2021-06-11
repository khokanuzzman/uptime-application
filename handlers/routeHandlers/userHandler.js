/*
 *Title: User Handler
 *Description: User Handler
 *Author: Md Khokanuzzaman khokan
 * Date: 11/06/2021
 */
 const handler = {};

 handler.userHandler = (handlerProperties, callback) => {
     const acceptedMethod = ['get','post','put','delete'];
     if(acceptedMethod.indexOf(handlerProperties.method) > -1){
        handler._users[handlerProperties.method](handlerProperties,callback);
     }else{
        callback(405);
     }
 };

 handler._users = {};

 handler._users.post = (handlerProperties,callback) =>{

 } 
 handler._users.get = (handlerProperties,callback) =>{
    callback(200);
 } 

 handler._users.put = (handlerProperties,callback) =>{

 } 

 handler._users.delete = (handlerProperties,callback) =>{

 }
 
 module.exports = handler;
 