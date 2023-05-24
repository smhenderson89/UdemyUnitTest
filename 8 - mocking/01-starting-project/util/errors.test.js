import { it, expect, describe, beforeEach, test } from 'vitest';
import { HttpError, ValidationError } from './errors';

describe('HttpError Class', () => {
    it('should store each values', () => {
        const testStatusCode = 200;
        const testMessage = 'testMessage';
        const testData = 'testData';
        const testHttpError = new HttpError(testStatusCode, testMessage, testData)
        expect(testHttpError.statusCode).toBe(testStatusCode);
        expect(testHttpError.message).toBe(testMessage);
        expect(testHttpError.data).toBe(testData);
    })

    it('should contain undefined as data if not data is provided', () => {
        const testStatusCode = 200;
        const testMessage = 'testMessage';
        const testHttpError = new HttpError(testStatusCode, testMessage)
        expect(testHttpError.statusCode).toBe(testStatusCode);
        expect(testHttpError.message).toBe(testMessage);
        expect(testHttpError.data).toBeUndefined();
    })
})

describe('ValdiateErrors()', () => {
    it('should have saved message', () => {
        const testMessage = 'test';

        const testErorr = new ValidationError(testMessage);

        expect(testErorr.message).toBe(testMessage);
    })
})