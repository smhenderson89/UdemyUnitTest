import { it, expect } from 'vitest';
import { add } from './math';

it('should summarize all numbers values in an array', () => {
    // Check function for the result
    const result = add([1, 2, 3]);

    // Expceted result
    expect(result).toBe(6); 
});

