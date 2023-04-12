const repeatString = function(string, num) {
    let myString = "";
    for(let i = 0; i < num; i++){
        myString = myString + string;
    }
    if(num < 0){
        return "ERROR";
    } else{
        return myString;
    }
    
};

// Do not edit below this line
module.exports = repeatString;
