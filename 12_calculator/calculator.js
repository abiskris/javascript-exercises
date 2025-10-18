const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
	let sum = 0;
  for(num of arr){
    sum += num;
  }
  return sum;
};

const multiply = function(arr) {
  let product = 1;
  for(num of arr){
    product *= num;
  }
  return product;
};

const power = function(a,b) {
	return Math.pow(a,b);
};

const factorial = function(a) {
  let factorial = 1;
  for(let i=1;i<=a;i++){
    factorial *= i;
  }
  return factorial;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
