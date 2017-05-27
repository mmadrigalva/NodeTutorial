var mymodule = require("./mymodule");
var arguments = process.argv;
function callBack(err,data){
    if(err){
        console.log("An error has ocurred" + err);
    }else{        
        data.forEach(function(item){
            console.log(item);  
        });           
    }
}
mymodule(arguments[2],arguments[3],callBack);