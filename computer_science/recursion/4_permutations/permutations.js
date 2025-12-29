const permutations = function (input) {
  if (!Array.isArray(input)) {
    return undefined;
  }

  const result = [];

  // Correct empty case
  if (input.length === 0) {
    return [[]];
  }

  permutationsHelper(input, [], input.length, result);
  return result;
};

function permutationsHelper(input, current, size, result) {
  if (current.length === size) {
    result.push([...current]); // COPY
    return;
  }

  for (let i = 0; i < input.length; i++) {
    current.push(input[i]);

    permutationsHelper(
      input.filter((_, index) => index !== i),
      current,
      size,
      result
    );

    current.pop(); // BACKTRACK
  }
}

// Do not edit below this line
module.exports = permutations;
