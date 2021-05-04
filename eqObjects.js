//compare two arrays
const eqArrays = require('./eqArrays');
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let result = false;
  let object1Keys = Object.keys(object1).sort();
  let object2Keys = Object.keys(object2).sort();
  if (eqArrays(object1Keys,object2Keys)) {
    result = true;
    for (const objectKeys of object1Keys) {
      if (Array.isArray(object1[objectKeys]) && Array.isArray(object2[objectKeys])) {
        result = result && (eqArrays(object1[objectKeys],object2[objectKeys]));
      } else {
        result = result && (object1[objectKeys] === object2[objectKeys]);
      }
    }
  }
  return result;
};

module.exports = eqObjects;