var fs = require('fs');
var pth = require('path');
module.exports = function (directory, extension, callBack) {
    fs.readdir(directory,function(err,list){
        if(err){
            return callBack(err);
        }else{
            list = list.filter(function(item){
                if(pth.extname(item)=="." +extension)
                    return true;
            });
            return callBack(null,list);
        }
    });
}