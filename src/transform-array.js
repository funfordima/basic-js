const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error();
  }

  let res = [...arr];

  const methods = {
    '--discard-next': (myArray) => {
      if (myArray.findIndex((item) => item == '--discard-next') == myArray.length - 1) {
        myArray = myArray.slice(0, -1);
      }

      if (myArray.includes('--discard-next')) {
        let index = myArray.findIndex((item) => item == '--discard-next');
        myArray.splice(index, 2);
      }
      return myArray;
    },
    '--discard-prev': (myArray) => {
      if (myArray.findIndex((item) => item == '--discard-prev') == 0) {
        myArray.splice(0, 1);
      }

      if (myArray.includes('--discard-prev')) {
        let index = myArray.findIndex((item) => item == '--discard-prev');
        myArray.splice(index - 1, 2);
      }
      return myArray;
    },
    '--double-next': (myArray) => {
      if ((myArray.findIndex((item) => item == '--double-next')) === myArray.length - 1) {
        myArray = myArray.slice(0, -1);
      }

      myArray = myArray.map((item, i, mas) => {
        if (item == '--double-next') {
          item = mas[i + 1];
        }
        return item;
      });
      return myArray;
    },
    '--double-prev': (myArray) => {
      if (myArray.findIndex((item) => item == '--double-prev') == 0) {
        myArray.splice(0, 1);
      }

      myArray = myArray.map((item, i, mas) => {
        if (item == '--double-prev') {
          item = mas[i - 1];
        }
        return item;
      });
      return myArray;
    }
  };

  if (res[0] == '--discard-prev' || res[0] == '--double-prev') {
    res.splice(0, 1);
    // console.log(res);
  }
  if (res[res.length - 1] == '--discard-next' || res[res.length - 1] == '--double-next') {
    res = res.slice(0, -1);
    // console.log(res);
  }

  while (res.find((item) => item == '--discard-prev' || item == '--discard-next' || item == '--double-prev' || item == '--double-next')) {
    const items = res.filter((item) => item == '--discard-prev' || item == '--discard-next' || item == '--double-prev' || item == '--double-next');

    if (items.length == 1) {
      res = methods[items[0]](res);
    } else {
      let index1 = res.findIndex((item) => item == items[0]);
      let index2 = res.findIndex((item) => item == items[1]);
      if (index1 !== index2) {
        let left = res.slice(0, index1);
        let temp = res.slice(index1, index2 + 1);
        let right = res.slice(index2 + 1);
        temp = methods[items[0]](temp);
        temp = methods[items[1]](temp);
        res = [...left, ...temp, ...right];
      } else {
        res = methods[items[0]](res);
      }
    }
  }

  const items = res.filter((item) => item == '--discard-prev' || item == '--discard-next' || item == '--double-prev' || item == '--double-next');
  items.forEach((method) => {
    while (res.find((item) => item == method)) {
      res = methods[method](res);
    }
  });


  if (arr.find((item) => typeof item == 'string')) {
    return res;
  } else {
    return arr;
  }
};

// console.log(transform(['--double-prev', 3.14, '--double-prev', 22, '--discard-next', true, '--discard-next', false, '--discard-prev', 333, '[object Object]', '[object Object]', Infinity, '[object Object]', '--double-next']));





// for (let i = 0; i < arr.length; i++) {
//   switch (arr[i]) {
//     case '--discard-next': {
//       if (i < arr.length - 1) {
//         i++;
//       }
//       break;
//     }
//     case '--discard-prev': {
//       result.pop();
//       break;
//     }
//     case '--double-next': {
//       if (i < arr.length - 1) {
//         result.push(arr[i + 1]);
//       }
//       break;
//     }
//     case '--double-prev': {
//       if (i > 0) {
//         result.push(arr[i - 1]);
//       }
//       break;
//     }
//     default: {
//       result.push(arr[i]);
//       break;
//     }
//   }
// }