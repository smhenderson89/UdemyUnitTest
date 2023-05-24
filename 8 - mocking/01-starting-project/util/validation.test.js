import { it, expect } from 'vitest';
import { validateNotEmpty } from './validation';

it ('should throw an error if empty string is provided', () => {
    const testInput = '';

    const validationFn = () => validateNotEmpty(testInput);

    expect(validationFn).toThrow();
});

it ('should throw an error if blanks string is provided', () => {
    const testInput = '   ';

    const validationFn = () => validateNotEmpty(testInput);

    expect(validationFn).toThrow();
});

it ('should throw error with a provided message', () => {
    const testInput = '   ';
    const testErrorMessage = 'Test';

    const validationFn = () => validateNotEmpty(testInput, testErrorMessage);

    expect(validationFn).toThrow(testErrorMessage);
});

