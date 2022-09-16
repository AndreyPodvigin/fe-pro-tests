import {
  changeStringCase,
  sumOfArray,
  divisibleBy,
  addDotsToString,
  objectEntries,
} from '../index';

describe('changeStringCase()', () => {
  test('function should return lowercased string', () => {
    const testResult = changeStringCase('THIS IS TEST STRING', 'lowercase');

    expect(testResult).toStrictEqual('this is test string');
  });

  test('function should return uppercased string', () => {
    const testResult = changeStringCase('this is test string', 'uppercase');

    expect(testResult).toStrictEqual('THIS IS TEST STRING');
  });

  test('function should return initial string - test 1', () => {
    const testResult = changeStringCase('This is Test String', 'LOWERCASE');

    expect(testResult).toStrictEqual('This is Test String');
  });

  test('function should return initial string - test 2', () => {
    const testResult = changeStringCase('This is Test String', 'randomText');

    expect(testResult).toStrictEqual('This is Test String');
  });

  test('function should not work for anything except strings', () => {
    expect(() => changeStringCase(12233, 'lowercase').toThrow());
  });
});

describe('sumOfArray()', () => {
  it('should return sum of all numbers from array with numbers only', () => {
    const testArray = [1, 2, 3];

    expect(sumOfArray(testArray)).toStrictEqual(6);
  });

  it('should return sum of numbers from mixed array (strings and numbers)', () => {
    const testArray = [1, 2, '3', 4, '5'];

    expect(sumOfArray(testArray)).toStrictEqual(7);
  });

  it('should return 0 from array with strings', () => {
    const testArray = ['1', '2', '3', '4', '5'];

    expect(sumOfArray(testArray)).toStrictEqual(0);
  });

  it('should return 0 from empty array', () => {
    const testArray = [];

    expect(sumOfArray(testArray)).toStrictEqual(0);
  });

  it('should not work with anything except arrays', () => {
    const testValue = { 1: 1, 2: 2, 3: 3 };

    expect(() => sumOfArray(testValue).toThrow());
  });
});

describe('divisibleBy()', () => {
  it('should return only even numbers', () => {
    const testArray = [1, 2, 3, 4, 5, 6];

    expect(divisibleBy(testArray, 2)).toEqual([2, 4, 6]);
  });

  it('should return numbers devided by 3', () => {
    const testArray = [1, 2, 3, 4, 5, 6];

    expect(divisibleBy(testArray, 3)).toEqual([3, 6]);
  });

  it('should return all numbers', () => {
    const testArray = [1, 2, 3, 4, 5, 6];

    expect(divisibleBy(testArray, 1)).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it('should not work with 0 as divider', () => {
    const testArray = [1, 2, 3, 4, 5, 6];

    expect(() => divisibleBy(testArray, 0).toThrow());
  });
});

describe('addDotsToString()', () => {
  it('should return same string', () => {
    const testString = 'Test';

    expect(addDotsToString(testString, 5)).toStrictEqual('Test');
  });

  it('should return string with dots at the end', () => {
    const testString = 'TestForDots';

    expect(addDotsToString(testString, 5)).toStrictEqual('Te...');
  });
});

describe('objectEntries()', () => {
  it('should return array of arrays out of object', () => {
    const testObject = {
      key1: 'value1',
      key2: 'value2',
      key3: 'value3',
    }

    expect(objectEntries(testObject)).toEqual([['key1', 'value1'], ['key2', 'value2'], ['key3', 'value3']])
  });
});
