const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let countCat = 0;

  matrix.forEach((arr) => {
    arr.forEach((element) => {
      if (element === '^^') {
        countCat++;
      }
    });
  });

  return countCat;
};
