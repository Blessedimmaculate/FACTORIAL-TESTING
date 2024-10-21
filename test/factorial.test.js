// test/factorial.test.js
import { assert } from 'chai';
import factorial from '../factorial.js';

describe('Factorial Function', () => {
    it('should return 1 for factorial of 0', () => {
        assert.equal(factorial(0), 1);
    });

    it('should return 1 for factorial of 1', () => {
        assert.equal(factorial(1), 1);
    });

    it('should return 120 for factorial of 5', () => {
        assert.equal(factorial(5), 120);
    });

    it('should return 720 for factorial of 6', () => {
        assert.equal(factorial(6), 720);
    });

    it('should throw an error for negative input', () => {
        assert.throws(() => factorial(-1), Error, "Negative numbers are not allowed.");
    });
});
