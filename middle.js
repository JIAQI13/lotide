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

const middle = function(target) {
  let result = [];
  if (target.length <= 2) {
    //pass
  } else if (target.length % 2 === 0) {
    result.push(target[target.length / 2 - 1]);
    result.push(target[target.length / 2]);
  } else {
    result.push(target[Math.floor(target.length / 2)]);
  }
  console.log(result);
  return result;
};

