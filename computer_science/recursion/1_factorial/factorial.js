const factorial = function (n) {
  if (!isNumber(n) || n < 0) {
    return undefined;
  }

  if (n === 0) {
    return 1;
  }

  return n * factorial(n - 1);
};

function isNumber(n) {
  if (typeof n === "number" && Number.isInteger(n)) {
    return true;
  }

  return false;
}

// Do not edit below this line
module.exports = factorial;
