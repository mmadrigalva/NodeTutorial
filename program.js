var fs = require('fs');
var pth = require('path');
var arguments = process.argv;
var ext = arguments[3];
fs.readdir(arguments[2],function callBack(err,list){
    for(var i = 0; i<list.length;i++)
        if(pth.extname(list[i])==("."+ext))
            console.log(list[i]);
});

// var fs = require('fs')
// var path = require('path')

// var folder = process.argv[2]
// var ext = '.' + process.argv[3]

// fs.readdir(folder, function (err, files) {
// if (err) return console.error(err)
// files.forEach(function (file) {
// if (path.extname(file) === ext) {
// console.log(file)
// }
// })
// })