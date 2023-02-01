const { test } = require('@jest/globals');
const Calculator = require('./Calculator');
let calculator;

describe('Add', () => {
  beforeEach(() => {
    calculator = new Calculator();
  });

  test('adds 1 and 2 to equal 3', () => {
    expect(calculator.add(1, 2)).toBe(3);
  });
  
  test('adds 8 and 2 to equal 10', () => {
    expect(calculator.add(8, 2)).toBe(10);
  });
  
  test('adds 97 and 3 to equal 100', () => {
    expect(calculator.add(97, 3)).toBe(100);
  });
});

describe('Subtract', () => {
  beforeEach(() => {
    calculator = new Calculator();
  });

  test('subtracts 1 from 2 to equal 1', () => {
    expect(calculator.subtract(2, 1)).toBe(1);
  });
  
  test('subtracts 2 from 8 to equal 6', () => {
    expect(calculator.subtract(8, 2)).toBe(6);
  });
  
  test('subtracts 3 from 97 to equal 94', () => {
    expect(calculator.subtract(97, 3)).toBe(94);
  });
});

describe('Multiply', () => {
  beforeEach(() => {
    calculator = new Calculator();
  });

  test('multiplies 1 and 2 to equal 2', () => {
    expect(calculator.multiply(1, 2)).toBe(2);
  });
  
  test('multiplies 8 and 2 to equal 16', () => {
    expect(calculator.multiply(8, 2)).toBe(16);
  });
  
  test('multiplies 97 and 3 to equal 291', () => {
    expect(calculator.multiply(97, 3)).toBe(291);
  });

});

describe('Divide', () => {
  beforeEach(() => {
    calculator = new Calculator();
  });

  test('divides 4 by 2 to equal 2', () => {
    expect(calculator.divide(4, 2)).toBe(2);
  });
  
  test('divides 8 by 2 to equal 4', () => {
    expect(calculator.divide(8, 2)).toBe(4);
  });
  
  test('divide 100 by 5', () => {
    expect(calculator.divide(100, 5)).toBe(20);
  });
});

