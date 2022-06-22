
// 1. Red: A simple test which fails because no function is written yet.
const adder = require('./test-driven-development')
/*
describe('adder', () => {
    it('should add two numbers', () => {
        expect(adder(1,2)).toBe(3)
    })
})
*/
// above test fails.

// 2.  Now lets add the adder function and pass the test
describe('adder', () => {
    it('should add two numbers', () => {
        expect(adder(1,2)).toBe(3)
    })
})

// 3. Run the above test again once the function is refactored.

// 4. add some more tests and refactor the adder function
describe('adder', () => {
    it('should add two numbers', () => {
        expect(adder(1,2)).toBe(3)
    });

    it('should add two numbers', () => {
        expect(adder(1,2,3)).toBe(6)
    });

    it('should add two numbers', () => {
        expect(adder(0)).toBe(0)
    });

    it('should add two numbers', () => {
        expect(adder(1,2,3,4,5,6)).toBe(21)
    });
})