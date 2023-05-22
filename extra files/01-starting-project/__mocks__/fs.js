import { vi } from 'vitest';

// MOck, implement promise without calling the regular function

export const promises = {
    writeFile: vi.fn((path, data) => {
        return new Promise((resolve, reject) => {
            resolve();
        })
    })
}