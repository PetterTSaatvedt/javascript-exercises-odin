const removeFromArray = function(arr, ...items) {
    for (i = 0; i < items.length; i++){
        // Remove item from array
        for (j = 0; j < arr.length; j++){
            if (items[i] === arr[j]){
                arr.splice(j, 1);
                j--;
            }
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
