import { it, expect } from 'vitest';
import { add } from './math';

it('should summarize all numbers values in an array', () => {
    // Arrange
    const numbers = [1, 2]

    // Act
    const result = add(numbers);

    // Assert
    // Array reduce is similar to sum, just a fancy way of doing it
    const expectedResult = numbers.reduce(
        (prevValue, curValue) => prevValue + curValue, 0)

    expect(result).toBe(expectedResult); 
});

it('should yield NaN if atleast one invalid number is provided', () => {
    // Arrange
    const inputs = ['invalid', 1];

    // Act
    const results = add(inputs);

    // Assert
    expect(results).toBeNaN();

})

it('should yield a correct sum if an array of numeric string values is provided', () => {
    // Arrange
    const numbers = ['1', '2'];

    // Act
    const results = add(numbers);

    // Assert
    const expectedResult = numbers.reduce(
        (prevValue, curValue) => +prevValue + +curValue, 0)
    
    expect(results).toBe(expectedResult);
})

it('should yield 0 if an empty array is provided', () => {
    // Arrange
    const numbers = [];

    // Act
    const results = add(numbers);
    
    // Assert
    expect(results).toBe(0);
})

it('should throw an error if no value is passed into the funciton', () => {
    // Wrap test function without a function
    const resultFn = () => {
        add();
    };

    // Run function when test is run
    expect(resultFn).toThrow();
})

it('should throw an error if provided with multiple arguments instead of an array', () => {
    const num1 = 1;
    const num2 = 2;
    
    const resultFn = () => {
        add(num1, num2);
    };

    // Can include regular expressions for throw error
    expect(resultFn).toThrow(/is not iterable/); 
});