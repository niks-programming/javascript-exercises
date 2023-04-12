const removeFromArray = function(myArray) {
    // get number of arguments excluding the input array
    let numArg = arguments.length - 1;

    // iterate through each argument to check if its in array
    for(let j = 1; j <= numArg; j++){
        for(let i = 0; i < myArray.length; i++){
            if(myArray[i] == arguments[j]){
                if(typeof(myArray[i]) === typeof(arguments[j])){
                    myArray.splice(i, 1);
                }
            }
            else{
                continue;
            }
        }
    }

    return myArray;
};

// Do not edit below this line
module.exports = removeFromArray;
