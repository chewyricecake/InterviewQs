//2160. Minimum Sum of Four Digit Number After Splitting Digits
/**
 * @param {number} num
 * @return {number}
 */

num = 2932;

var minimumSum = function (num) {
  num = num.toString().split("").sort();
  return Number(num[0] + num[2]) + Number(num[1] + num[3]);
};

console.log(minimumSum(num));
