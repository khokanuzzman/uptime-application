/*
 *Title: Data handling
 *Description: Read write data
 *Author: Md Khokanuzzaman khokan
 * Date: 11/06/2021
 */
// dependencies

const fs = require('fs');
const path = require('path');

// scaffolding
 const lib = {}

//  base directory of the data folder

 lib.baseDir = path.join(__dirname, '/../.data/');

//  write data to file
lib.create = (dir,file,data,callback)=>{
    // open file for writting
    fs.open(lib.baseDir+dir+'/'+file+'.json','wx',(err,fileDriscriptor)=>{
        if(!err & fileDriscriptor){
            const dataString = JSON.stringify(data);
            fs.writeFile(fileDriscriptor,dataString,(err)=>{
               if(!err){
                fs.close(fileDriscriptor,(err)=>{
                    if(!err){
                        callback(false);
                    }else{
                        callback('Error closing the new file!');
                    }
                })
               }else{
                   callback('Error writting the new file!');
               }
            })
        }else{
            callback('the file was aleready existed or error happanded!');
        }
    })
}

// read file data
lib.read = (dir,file,callback) =>{
    fs.readFile(lib.baseDir+dir+'/'+file+'.json','utf8',(err,data) => {
        callback(err,data);
    });
}
// update file data
lib.update =(dir,file,data,callback)=>{
    fs.open(lib.baseDir+dir+'/'+file+'.json','r+',(err,fileDriscriptor)=>{
        if(!err & fileDriscriptor){
            fs.ftruncate(fileDriscriptor,(err)=>{
                const stringData = JSON.stringify(data);
                if(!err){
                    fs.writeFile(fileDriscriptor,stringData,(err)=>{
                        if(!err){
                            callback(false);
                        }else{
                            callback('');
                        }
                    })
                }else{
                    callback('error truncating file!');
                }
            })
        }else{
            callback('error updating...! The file may not exist!');
        }
    })
}

// delete files

lib.delete = (dir,file,callback)=>{
    fs.unlink(lib.baseDir+dir+'/'+file+'.json',(err)=>{
        if(!err){
            callback(false);
        }else{
            callback('error deleting file!')
        }
    })
}

module.exports = lib;