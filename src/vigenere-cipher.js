const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(isDirectly = true) {
    this.isDirectly = isDirectly;
    this.alphabets = [];
    this.alphabets[0] = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (let i = 1; i < this.alphabets[0].length; i++) {
      this.alphabets[i] = this.alphabets[0].slice(i) + this.alphabets[0].slice(0, i);
    }
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Parameters is empty');
    }

    let encryptedMessage = '';
    let mesLength = message.length;
    let keyIndex = 0;

    message = message.toUpperCase();
    key = key.toUpperCase();

    for (let i = 0; i < mesLength; i++) {
      if (keyIndex >= key.length) {
        keyIndex = 0;
      }

      let columnIndex = this.alphabets[0].indexOf(message[i]);
      let rowIndex = this.alphabets[0].indexOf(key[keyIndex]);

      if (columnIndex === -1 || rowIndex === -1) {
        encryptedMessage += message[i];
      } else {
        encryptedMessage += this.alphabets[rowIndex][columnIndex];
        keyIndex++;
      }
    }

    return this.isDirectly ? encryptedMessage : encryptedMessage.split('').reverse().join('');
  }

  decrypt(message, key) {
    if (!message || !key) {
      throw new Error('Parameters is empty');
    }

    let decryptedMessage = '';
    let mesLength = message.length;
    let keyIndex = 0;

    message = message.toUpperCase();
    key = key.toUpperCase();

    for (let i = 0; i < mesLength; i++) {
      if (keyIndex >= key.length) {
        keyIndex = 0;
      }

      let rowIndex = this.alphabets[0].indexOf(key[keyIndex]);
      let columnIndex = this.alphabets[rowIndex].indexOf(message[i]);

      if (columnIndex === -1 || rowIndex === -1) {
        decryptedMessage += message[i];
      } else {
        decryptedMessage += this.alphabets[0][columnIndex];
        keyIndex++;
      }
    }

    return this.isDirectly ? decryptedMessage : decryptedMessage.split('').reverse().join('');
  }
}

module.exports = VigenereCipheringMachine;

// const vinegar = new VigenereCipheringMachine();

// console.log(vinegar.encrypt('attack at dawn!', 'alphonse'));
