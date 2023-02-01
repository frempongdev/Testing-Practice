const stringLength = require('./index.js');

test('stringLength of Mango', () => {
  expect(stringLength('Mango')).toBe(5);
});

test('stringLength of Microverse', () => {
  expect(stringLength('Microverse')).toBe(10);
});

test('stringLength of Frempong', () => {
  expect(stringLength('Frempong')).toBe(8);
});
