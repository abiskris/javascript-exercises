const contains = function (obj, val) {
  // Handle NaN
  if (typeof obj !== "object" || obj === null) {
    return obj === val || (Number.isNaN(obj) && Number.isNaN(val));
  }

  // Direct reference match for objects/arrays
  if (obj === val) return true;

  // Recurse through object values
  for (const key in obj) {
    if (contains(obj[key], val)) {
      return true;
    }
  }

  return false;
};

// Do not edit below this line
module.exports = contains;
