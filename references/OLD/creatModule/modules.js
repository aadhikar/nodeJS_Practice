var arith = require("./arith");
var pattern = require("./pattern");
var a = 10;
var b = 3;

console.log(a+" + "+ b+" -->"+arith.getSum(a, b));
console.log(a+" - "+ b+" -->"+arith.getDiffernce(a, b));
console.log(a+" * "+ b+" -->"+arith.getProduct(a, b));
console.log(a+" / "+ b+" -->"+arith.getPortions(a, b));
console.log(a+" % "+ b+" -->"+arith.getReminder(a, b));
console.log(pattern.adder(a, b));
console.log(pattern.findLength('Hello everyone, I am Anil'));
