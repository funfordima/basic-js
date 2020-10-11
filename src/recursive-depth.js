const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  // calculateDepth(arr) {
  //   let depth = 1;

  //   arr.forEach(el => {
  //     if (Array.isArray(el)) {
  //       const nestedDepth = calculateDepth(el);

  //       if (depth < 1 + nestedDepth) {
  //         depth = 1 + nestedDepth;
  //       }
  //     }
  //   });

  //   return depth;
  // }
  calculateDepth(arr, count = 0, array = []) {
    count++;
    array.push(count);
    arr.forEach(item => {
      if (Array.isArray(item)) this.calculateDepth(item, count, array)
    });
    // console.log(arr);
    // console.log(count);
    return Math.max(...array);
  }
};




// class DepthCalculator {
//   calculateDepth(arr) {
//     let depth = 1;

//     arr.forEach(el => {
//       if (Array.isArray(el)) {
//         const nestedDepth = calculateDepth(el);

//         if (depth < 1 + nestedDepth) {
//           depth = 1 + nestedDepth;
//         }
//       }
//     });

//     return depth;
//   }
// };


// const depthCalc = new DepthCalculator();
// const { calculateDepth } = depthCalc;
// // console.log(calculateDepth([[[]]]));  //3
// // // console.log(depthCalc.calculateDepth([1, 2, 3, 4, 5, [1]])); //2
// // // console.log(depthCalc.calculateDepth([1, 2, 3, [1], 4, 5, [1]])); //2
// // // console.log(depthCalc.calculateDepth([1, 2, 3, [8, [2]], 4, 5, []])); //3
// // // console.log(depthCalc.calculateDepth([1, [8, [[]]], 2, 3, [8, []], 4, 5, []])); //4
// console.log(depthCalc.calculateDepth([1, [8, [[]]], 2, 3, [8, []], 4, 5, ['6575', ['adas', ['dfg', [0]]]]])); //5
// console.log(depthCalc.calculateDepth([1, [8, [[]]], 2, 3, [8, [[[[[[[[[[[[[]]]]]]]]]]]]]], 4, 5, ['6575', ['adas', ['dfg', [0]]]]])); //15
// console.log(depthCalc.calculateDepth([1, [8, [[]]], 2, 3, [8, [[[[[[[[[[[[[]]]]]]]]]]]]]], [8, [[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]], 4, 5, ['6575', ['adas', ['dfg', [0]]]]])); //25
// console.log(depthCalc.calculateDepth([1, [8, [[]]], [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]], []]]], []]]]]]]]], []]]], []]]]]]]]]], 2, 3, [8, [[[[[[[[[[[[[[]]]]]]]]]]]]]]], [8, [[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]], 4, 5, ['6575', ['adas', ['dfg', [0]]]]])); //31

// console.log([[]][0]);
// 