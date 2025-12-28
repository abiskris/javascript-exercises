const removeFromArray = function(arr,...nums) {

    for(const num of nums){
        for(let i=0;i<arr.length;i++){
            if(arr[i] === num){
                arr.splice(i,1);
                i--;
            }
        }
    }

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
