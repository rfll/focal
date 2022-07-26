const back = process.argv.slice(2);

const backwards = function(newString) {
  let oneString = [];
  let twoString = "";

  for (let j = 0; j < back.length; j++) {
    oneString = back[j] + "\n";
    for (let i = oneString.length - 1; i >= 0; i--) {
      twoString += oneString[i];
    }
  }
  return twoString.trim();
};

console.log(backwards(back));


// const newBack = function(newStr) {
//   let oneStr = "";
//   for (let j = newStr.length - 1; j >= 0; j--) {
//     oneStr += newStr[j];
//   }
//   return oneStr;
// };



// const newArr = function(back) {
//   let oneArr = [];
//   for (let i = 0; i < back.length; i++) {
//     oneArr.push(back[i]);
//     console.log(newBack(back[i]));
//   }
//   return oneArr;
// };

