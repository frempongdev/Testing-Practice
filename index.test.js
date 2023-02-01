// const stringLength = require('./index.js');

// test('stringLength of Mango', () => {
//   expect(stringLength('Mango')).toBe(5);
// });

// test('stringLength of Microverse', () => {
//   expect(stringLength('Microverse')).toBe(10);
// });

// test('stringLength of Frempong', () => {
//   expect(stringLength('Frempong')).toBe(8);
// });

const { stringLength, reverseString } = require('./index.js');

describe('stringLength', () => {
  test('returns the correct length of the string', () => {
    expect(stringLength('hello')).toBe(5);
    expect(stringLength('goodbye')).toBe(7);
  });

  test('throws an error if string length is not within range', () => {
    expect(() => {
      stringLength('');
    }).toThrowError('String length is not within range');

    expect(() => {
      stringLength('this string is too long');
    }).toThrowError('String length is not within range');
  });
});

describe('reverseString', () => {
  test('reverses the string correctly', () => {
    expect(reverseString('hello')).toBe('olleh');
    expect(reverseString('goodbye')).toBe('eybdoog');
  });
});
