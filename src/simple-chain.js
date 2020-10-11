const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length;
  },
  addLink(value = '(  )') {
    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (position <= 0 || position > this.chain.length - 1 || !Number.isInteger(position)) {
      this.chain = [];
      throw new Error();
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain = this.chain.reverse();
    return this;
  },
  finishChain() {
    let result = this.chain.join('~~');
    this.chain = [];
    return `${result}`;
  }
};

module.exports = chainMaker;