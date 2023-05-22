import { it, expect } from 'vitest';
// Hooks
import { beforeAll, beforeEach, afterEach, afterAll } from 'vitest';
import { User } from './hooks';

// Can bring out some constants to be defined and avoid repeat code
const testEmail = 'test@test.com';
let user;

beforeAll(() => {
  user = new User(testEmail); // Can initilize value before all test as an option
  console.log('beforeAll()');
});

beforeEach(() => {
  console.log('beforeEach()');
  user = new User(testEmail)
});

afterEach(() => {
  console.log('afterEach()');
  // user = new User(testEmail)
});

afterAll(() => {
  console.log('afterAll()');
  // Can use to delete extra data that isn't needed after the tests are run
});

it.concurrent('should update the email', () => {
  const newTestEmail = 'test2@test.com';
  user.updateEmail(newTestEmail);
  expect(user.email).toBe(newTestEmail);
});

it.concurrent('should have an email property', () => {
  expect(user).toHaveProperty('email');
});

it.concurrent('should store the provided email value', () => {

  expect(user.email).toBe(testEmail);
});

it.concurrent('should clear the email', () => {

  user.clearEmail();

  expect(user.email).toBe('');
});

it.concurrent('should still have an email property after clearing the email', () => {

  user.clearEmail();

  expect(user).toHaveProperty('email');
});
