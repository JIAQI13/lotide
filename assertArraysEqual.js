//compare two arrays
const eqArrays = require('./eqArrays');

const assertArrayEqual = function(actual, expected) {
  if (eqArrays(actual,expected)) {
    console.log(`🤙Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`💩Assertion Failed: ${actual} !== ${expected}`);
  }
};
module.exports = assertArrayEqual;



