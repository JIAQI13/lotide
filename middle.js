
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
  //console.log(result);
  return result;
};
module.exports = middle;

