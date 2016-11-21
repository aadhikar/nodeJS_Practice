var arith = require("./arith");
var a = 10;
var b = 3;

console.log(a+" + "+ b+" -->"+arith.getSum(a, b));
console.log(a+" - "+ b+" -->"+arith.getDiffernce(a, b));
console.log(a+" * "+ b+" -->"+arith.getProduct(a, b));
console.log(a+" / "+ b+" -->"+arith.getPortions(a, b));
console.log(a+" % "+ b+" -->"+arith.getReminder(a, b));