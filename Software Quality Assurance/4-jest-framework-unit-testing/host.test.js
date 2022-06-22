
//1. test the greeting function from host.js file
const Host = require('./host')

// test method will take two arguments a message and an anonynomous function
test('testing the greating function', () => {
    expect(Host.greeting('hello')).toBe('hello')
})

// test('greeting stranger', () => {
//     expect(Host.greetingSomeBody()).toBe('hello stranger')
// })

// test('greeting mirwais', () => {
//     expect(Host.greetingSomeBody('mirwais')).toBe('hello mirwais')
// })

// 2. describe(): to group above two tests on same function use describe()
// describe('host should ', () => {
//     test('greet stranger', () => {
//         const host = new Host();
//         expect(host.greetingSomeBody()).toBe('hello stranger')
//     })
    
//     test('greet mirwais', () => {
//         const host = new Host();
//         expect(host.greetingSomeBody('mirwais')).toBe('hello mirwais')
//     })
// })

// 3. beforeEach(): use it to instantiate class object before each test. We have beforeAll() method as well.
describe('host should ', () => {

    let host;
    beforeEach(() => {
        host = new Host();
    })

    test('greet stranger', () => {
        expect(host.greetingSomeBody()).toBe('hello stranger')
    })
    
    test('greet mirwais', () => {
        expect(host.greetingSomeBody('mirwais')).toBe('hello mirwais')
    })
})