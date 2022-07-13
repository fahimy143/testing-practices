const stringLength = require('./stringLenght.js');
const reverseString = require('./reverseString.js');
const calculator = require('./calculator.js');
const capitalize = require('./capitalize.js');

test('length of string to equal 6', () => {
    expect(stringLength("string")).toBe(6);
});

test('reverse string', () => {
    expect(reverseString("word")).toBe('drow');
});

//calculator

describe('calculator test:', () => {
    describe('sum test: ', () => {
      test('add',() => {
        expect(calculator.add(5,2)).toBe(5+2);
      });
    });

    describe('substract test: ', () => {
      test('subtract',() => {
        expect(calculator.subtract(5,2)).toBe(5-2);
      });
    });

    describe('divide test: ', () => {
      test('divide',() => {
        expect(calculator.divide(20,2)).toBe(10);
      });
    })

    describe('multiply test: ', () => {
      test('multiply',() => {
        expect(calculator.multiply(20,2)).toBe(20*2);
      });
    })
  });

  //capitalize

  test('capitalize word', () => {
    expect(capitalize('word')).toBe('Word');
  });