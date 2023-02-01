const stringLength = (string) => {
  let count = 0;

  string.forEach(() => {
    count += 1;

    if (string.length < 1 && string.length > 10) {
      throw new Error('String length is not within range');
    } else {
      return count;
    }
  });
};

const reverseString = (string) => {
  string.split('').reverse().join('');
};

module.exports = { stringLength, reverseString };