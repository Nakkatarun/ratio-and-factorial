const factorialOfNumber = require("../factorial/index");
const ratioOfTwoNumbers = require("../ratio/index");

const ratioAndFactorial = (n1, n2, n3) => {
  return ratioOfTwoNumbers(n1, n2), factorialOfNumber(n3);
};

module.exports = ratioAndFactorial;
