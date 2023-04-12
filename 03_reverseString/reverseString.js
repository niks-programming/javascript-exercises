const reverseString = function(myString) {
    let newString = "";
    for(let i = 0; i < myString.length; i++){
        newString = newString + myString.slice((myString.length - 1) - i, myString.length - i);
    }
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
