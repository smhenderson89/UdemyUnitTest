import fs from 'fs'; // import the file system
import path from 'path';

import { beforeEach, it, vi, expect } from 'vitest';
import { Window } from 'happy-dom';

import { showError } from './dom';

const htmlDocPath = path.join(process.cwd(), 'index.html'); // read the index.html
const htmlDocumentContent = fs.readFileSync(htmlDocPath).toString(); // read into virtual DOM

const window = new Window();
const document = window.document;
vi.stubGlobal('document', document); // Render our test document within our test

beforeEach(() => {
    document.body.innerHTML = ''; // Clear the body before writing new html;
    document.write(htmlDocumentContent); // renders the page virtual
})

it('should add an error paragraph to the id="errors" paragraph', () => {
  showError('Test');

  const errorsEl = document.getElementById('errors'); // grabbing from the virtual dom
  const erorrParagraph = errorsEl.firstElementChild;

  expect(erorrParagraph).not.toBeNull();
})

it('should not contain an error paragraph intially', () => {
    const errorsEl = document.getElementById('errors'); // grabbing from the virtual dom
    const erorrParagraph = errorsEl.firstElementChild;
    expect(erorrParagraph).toBeNull();
})

it('should output the provided message in the error paragraph', () => {
    const testErrorMessage = 'Test';
    showError(testErrorMessage);

    const errorsEl = document.getElementById('errors'); // grabbing from the virtual dom
    const erorrParagraph = errorsEl.firstElementChild;

    expect(erorrParagraph.textContent).toBe(testErrorMessage);
})