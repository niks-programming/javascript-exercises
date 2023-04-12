const sumAll = function(num1, num2) {
    // decide which number to start with
    if(num1 < 0 || num2 < 0 || typeof(num1) != "number" || typeof(num2) != "number"){
        return "ERROR";
    } else{
        let smallest = Math.min(num1, num2);
        let biggest = Math.max(num1, num2);

        if(smallest == biggest){
            // in the event the numbers are the same
            return smallest;
        } else{
            let totSum = 0;
            for(let i = smallest; i <= biggest; i++){
                totSum = totSum + i;
            }
            return totSum;
        }
    }
};

// Do not edit below this line
module.exports = sumAll;
