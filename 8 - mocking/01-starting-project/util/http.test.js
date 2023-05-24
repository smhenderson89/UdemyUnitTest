import { it, vi, expect } from 'vitest';

import { sendDataRequest } from './http';
import { HttpError } from './errors';

const testResponseData = {testKey: 'testData'};
const testFetch = vi.fn((url, options) => {
    return new Promise((resolve, reject) => {
        if (typeof options.body !== 'string') {
            return reject('Not a string.')
        }
        const testResponse = {
            ok: true,
            json() {
                return new Promise ((resolve, reject) => {
                    resolve(testResponseData);
                });
            }
        };
        resolve(testResponse);
    })
}) // Spy funcitonality 

vi.stubGlobal('fetch', testFetch); // Replace global functions with a mocked function

it('should return any available response data', () => {
    const testData = {key: 'test'};

    return expect(sendDataRequest(testData)).resolves.toEqual(testResponseData);
});

it('should convert test data to JSON before sending the request', async () => {
    const testData = {key: 'test'};
    let errorMessage;
    try {
        await (sendDataRequest(testData));
    } catch (error) {
        errorMessage = error;
    }

    expect(errorMessage).not.toBe('Not a string.');

});

it('should throw an HTTPError in case of non-ok response', () => {
    testFetch.mockImplementationOnce((url, options) => {
        return new Promise((resolve, reject) => {
            const testResponse = {
                ok: false,
                json() {
                    return new Promise ((resolve, reject) => {
                        resolve(testResponseData);
                    });
                }
            };
            resolve(testResponse);
        })
    });

    const testData = {key: 'test'};

    return expect(sendDataRequest(testData)).rejects.toBeInstanceOf(HttpError);

})