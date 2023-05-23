import { it, expect, describe, beforeEach } from 'vitest';
import { HttpError } from './errors';

const testStatusCode = 200;
const testMessage = 'testMessage';
const testData = 'testData';
let testHttpError = new HttpError(testStatusCode, testMessage, testData)

describe('HttpError Class Checks', () => {
    it('should have StatusCode, Message, Data classes', () => {
        expect(testHttpError).toHaveProperty('statusCode');
        expect(testHttpError).toHaveProperty('message');
        expect(testHttpError).toHaveProperty('data');
    })

    it('should store each values', () => {
        expect(testHttpError.statusCode).toBe(testStatusCode);
        expect(testHttpError.message).toBe(testMessage);
        expect(testHttpError.data).toBe(testData);
    })
})

describe('ValdiateErrors()', () => {
    
})