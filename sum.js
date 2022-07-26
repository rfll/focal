// const args = process.argv.slice(2);
// const totalSum = function (num) {
// let sum = 0;
// for (let i = 0; i < args.length; i++) {
//   sum += Number(args[i]);
// }
// return sum;
// }
// console.log(totalSum(args));

const args = process.argv.slice(2);
const totalSum = function(num) {
  let sum = Number(num[0]) + Number(num[1]);
  return sum;
};
console.log(totalSum(args));