var adder = function (a, b){
  return `sum of ${a} and ${b} is ${a + b}`;
}

var findLength = function(str){
  return `Length of the string "${str}" is ${str.length}`
}

module.exports = {
  adder: adder,
  findLength: findLength
};
