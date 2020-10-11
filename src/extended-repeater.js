const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str = '', options) {
  let {
    repeatTimes = 1,
    separator = '+',
    addition = '',
    additionRepeatTimes = 1,
    additionSeparator = '',
  } = options;

  str = String(str);
  addition = String(addition);
  separator = separator.toString();

  let res = [];

  for (let i = 0; i < repeatTimes; i++) {
    let tmp = '';
    let s = '';
    for (let j = 0; j < additionRepeatTimes - 1; j++) {
      s += additionSeparator + addition;
    }
    tmp = str + addition + s;
    res.push(tmp);
    tmp = '';
  }

  return res.join(separator);
};
