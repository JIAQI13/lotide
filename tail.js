const tail = function(target) {
  let result = [];
  for (let i = 1; i < target.length; i++) {
    result.push(target[i]);
  }
  return result;
};
module.exports = tail;
