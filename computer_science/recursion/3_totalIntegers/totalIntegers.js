const totalIntegers = function (input) {
  if (typeof input !== "object") {
    return undefined;
  }

  return totalIntegersHelper(input, 0);
};

function totalIntegersHelper(input, numberOfIntegers) {
  if (typeof input === "number") {
    return 1;
  } else {
    for (let key in input) {
      if (typeof input[key] === "number" && Number.isInteger(input[key])) {
        numberOfIntegers++;
      } else if (typeof input[key] === "object" && input[key] !== null) {
        numberOfIntegers += totalIntegersHelper(input[key], 0);
      }
    }
  }
  return numberOfIntegers;
}

// Do not edit below this line
module.exports = totalIntegers;

/*
```javascript
totalIntegers([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]); // returns 7
totalIntegers({ a: 1, b: { a: [5, 10], b: 11 } }); // returns 4
```
*/
