import { expect, it } from 'vitest';
import { generateToken, generateTokenPromise } from './async-example';

it ('should generate a token value', (done) => {
    const testUserEmail = 'test@test@gmail.com';

    generateToken(testUserEmail, (err, token) => {
        try {
            expect(token).toBeDefined; // Test should exist 
            done(); // Call done when complete with async function
        } catch (err) {
            done(err)
        }
    })
})

// Testing with promises
it ('should generate a token value', () => {
    const testUserEmail = 'test@test@gmail.com';

    return expect(generateTokenPromise(testUserEmail)).resolves.toBeDefined();

})

// Testing with promises, with async/await
it ('should generate a token value', async () => {
    const testUserEmail = 'test@test@gmail.com';

    const token = await generateTokenPromise(testUserEmail);

    expect(token).toBeDefined();

})