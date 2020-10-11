const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) {
    return false;
  }

  const result = [];

  members.forEach((element) => {
    if (typeof element !== 'string') {
      return;
    }

    element = element.trim().toUpperCase();
    result.push(element[0]);
  });

  return result.sort().join('');
};
