import { describe, it, expect } from 'vitest';
import { cleanedNumbers, cleanNumbers, transformToNumber } from './numbers';

// Tests
// Should convert number string to number
// Should pass a number as a number

describe('transformToNumber()', () => {
  it('should convert number string to number', () => {
    const inputs = '1';

    const results = transformToNumber(inputs);

    const expectedResult = parseInt(inputs);

    expect(results).toBe(expectedResult).toBeTypeOf('number');
  })

  it('should pass a number as a number', () => {
    const inputs = 5;

    const results = inputs;

    const expectedResult = inputs;

    expect (results).toBe(expectedResult);
  })

  it('should yield NaN for non-transformable values', () => {
    const input = 'invalid';

    const result = transformToNumber(input);

    expect(result).toBeNaN;
  })
})

// Intergration testing
// Making sure the total functions work all together and doesn't break
describe('cleanNumbers()', () => {
  it('should return an array of number values if an array of string number values is provided', () => {
    const numberValues = ['1', '2'];

    const cleanedNumbers = cleanNumbers(numberValues);

    // expect(cleanedNumbers[0]).toBeTypeOf('number');
    expect(cleanedNumbers).toEqual([1, 2]); // toBe()
  });

  // Check will throw an error if not valid inputs are entered
  it('should throw an error if an array with at least one empty string is provided', () => {
    const numberValues = ['', 1];

    const cleanFn = () => cleanNumbers(numberValues);

    expect(cleanFn).toThrow();
  }
  )
})