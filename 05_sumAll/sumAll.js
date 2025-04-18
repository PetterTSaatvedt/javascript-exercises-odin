const sumAll = function(num1, num2) {
    
    
    if (num1 < 0 || num2 < 0 || typeof(num1) !== 'number' || typeof(num2) !== 'number') {
        return 'ERROR'
    } else if (!Number.isInteger(num1) || !Number.isInteger(num2)){
        return 'ERROR'
    }

    let largestNumber;
    let smallestNumber;
    if (num1 > num2){
        largestNumber = num1;
        smallestNumber = num2;
    } else {
        largestNumber = num2;
        smallestNumber = num1;
    }

    let sum = 0;

    for (let i = smallestNumber; i <= largestNumber; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
