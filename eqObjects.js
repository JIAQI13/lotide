//compare two arrays
const eqArrays = function(first,second) {
  let result = false;
  if (first.length === 0 & second.length === 0) {
    return true;
  }
  if (first.length === second.length) {
    for (let i = 0; i < first.length; i++) {
      result = (first[i] === second[i]);
    }
  }
  return result;
};

const assertArrayEqual = function(actual, expected) {
  if (eqArrays(actual,expected)) {
    console.log(`🤙Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`💩💩💩💩💩💩Assertion Failed: ${actual} !== ${expected}`);
  }
};
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
    let result = false;
    let object1Keys = Object.keys(object1).sort();
    let object2Keys = Object.keys(object2).sort();
    if (eqArrays(object1Keys,object2Keys)){
      result = true;
      for (const objectKeys of object1Keys){
        result = result && (eqArrays(object1[objectKeys],object2[objectKeys]));
      }
    }
    return result;
};

