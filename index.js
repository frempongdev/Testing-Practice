const stringLength = (string) => {
    let count = 0;
  
    for (let i = 0; i < string.length; i += 1) {
      count += 1;
    }
  
    if (string.length < 1 || string.length > 10) {
      throw new Error('String length is not within range');
    } else {
      return count;
    }
  };
  
  const reverseString = (string) => {
    return string.split('').reverse().join('');
  };
  
  module.exports = { stringLength, reverseString };
  