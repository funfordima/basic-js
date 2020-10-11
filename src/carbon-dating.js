const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string' || Math.sign(sampleActivity) !== 1 || +sampleActivity > 15) {
    return false;
  }

  return Math.ceil(-HALF_LIFE_PERIOD * Math.log(+sampleActivity / MODERN_ACTIVITY) / 0.693);
};
