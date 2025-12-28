const reverseString = function(str) {
    let arr = str.split("");
    let n = arr.length;
    for(let i=0;i<n/2;i++){
        [arr[i],arr[n-i-1]] = [arr[n-i-1],arr[i]];
    }
    return arr.join("");
};

// Do not edit below this line
module.exports = reverseString;
