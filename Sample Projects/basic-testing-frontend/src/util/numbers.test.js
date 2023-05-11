import { it, expect } from 'vitest';
import { transformToNumber } from './numbers';

// Tests
// Should convert number string to number
// Should pass a number as a number

it('should convert number string to number', () => {
  const inputs = '1';

  const results = transformToNumber(inputs);

  const expectedResult = parseInt(inputs);

  expect(results).toBeTypeOf('number');
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