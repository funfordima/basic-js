const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date) {
    return 'Unable to determine the time of year!';
  }

  if (Object.prototype.toString.call(date) !== '[object Date]' || isNaN(date.getDate())) {
    throw new Error();
  }

  const season = ['winter', 'winter', 'spring', 'spring', 'spring', 'summer', 'summer', 'summer', 'autumn', 'autumn', 'autumn', 'winter'];
  return season[date.getMonth()];
};