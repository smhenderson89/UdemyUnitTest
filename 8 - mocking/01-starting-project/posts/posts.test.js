import { describe, expect, it, beforeEach } from "vitest";
import { extractPostData } from "./posts";

// Create constants
const testTitle = 'Test Title';
const testContent = 'Test Content';
let testFormData; // intialize variable before set variable in later tests

describe('extractPostData()', () => {
    beforeEach(() => {
        // Mocking the functionality of the Form data
        testFormData = {
            title : testTitle,
            content: testContent,
            get(identifer) {
                return this[identifer]
            }
        };
    });

    it('should extract title and content from the provided form data', ()=>{
        const data = extractPostData(testFormData)

        expect(data.title).toBe(testTitle);
        expect(data.content).toBe(testContent);
    })
})