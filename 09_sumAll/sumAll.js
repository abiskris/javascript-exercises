const sumAll = function (low, high) {

    let firstType = typeof low;
    let secondType = typeof high;

    if (firstType !== "number" || secondType !== "number") {
        return "ERROR";
    }

    if (low < 0) {
        return "ERROR";
    }

    if (low % 1 !== 0 || high % 1 !== 0) {
        return "ERROR";
    }

    if (low > high) {
        return sumAll(high, low);
    }


    let sum = 0;

    for (let i = low; i <= high; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
