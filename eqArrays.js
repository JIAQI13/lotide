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
module.exports = eqArrays;