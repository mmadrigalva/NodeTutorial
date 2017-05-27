function init(){
    var inputsArray = process.argv; 
    var result=0;
    for(var i = 2; i< inputsArray.length;i++){
        if(isNumber(inputsArray[i])){
            result+=Number(inputsArray[i]);
        }
    }
    console.log(result);
}
function isNumber(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}
init();