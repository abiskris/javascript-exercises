let fib = [];
fib[0] = 1;
fib[1] = 1;

const fibonacci = function (n) {

    n = parseInt(n);

    if(n < 0){
        return "OOPS";
    }

    if (n == 0) {
        return 0;
    }

    if (n <= 2) {
        return fib[n - 1];
    }

    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }

    return fib[n - 1];
};

// Do not edit below this line
module.exports = fibonacci;
