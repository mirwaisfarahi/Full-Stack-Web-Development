# Unit Testing with Jest Framework

> Here we will cover Unit Testing with Jest Framework and Pure Functions and Why Use Them?

## Installation
1. Initiate npm node => npm init -y
2. Install jest library => npm install --save-dev jest
3. Change the test script inside package.json file => "test" : "jest"
4. Run to test => npm run test

## Example:
1. create a file named host.js with code
2. create a host.test.js file for testing the code
3. import host.js into host.test.js file
4. write the test(string, anonymousFunction) to test a function. In our case the greeting function from Host class.
5. Use describe() and beforeEach() functions as well.
6. add --coverage to 'test' script in package.json file => 'test' : 'jest --coverage'

> Note: Read this article about using [matchers](https://jestjs.io/docs/using-matchers), which will help you set the most common tests you might need for your applications.

## Test-Driven Development (TDD) with Jest
- Normally functions and applications are first developed and then tested. But with TDD you write a test before you write just enough production code to fulfill that test and then go on to refactor the production code. The primary goal of TDD is specification and not validation.

### Process
The process starts with writing some simple test code which fails then writing the function to pass the test then refactor our written code. This process repeats until our function is complete and all tests are passed. The following steps are there:

1. Red &#9746;: First write a test. The test fails because you haven't written any code yet.
2. Green &#10004;: Write code that passes your test (and all previous tests). Don't be clever, just write code so your tests pass.
3. Refactor: Refactor your code! There are many reasons to refactor, such as efficiency, code style, and readibility. Make sure your code still passes your tests as you refactor.

### Example
- look at test-driven-development.js and test-driven-development.test.js files for complete code about TDD.
- Another example from [JavaScript Testing - Mocking Async Code](https://www.youtube.com/watch?v=4Fl5GH4eYZ8) with index.html, __mock__, http.js, utils.js and utils.test.js Files.
- Another Example for DOM test using jest [DOM Manipulation](https://github.com/microverseinc/curriculum-transversal-skills/blob/main/testing/lesson_more_about_unit_tests_in_js.md)

## Learn More about Jest and DOM Manipulation
- Look at these two videos from  playlist [Unit Tests with DOM](https://www.youtube.com/playlist?list=PLvl8B47jLhkv6d8YogDhX9g7zCDgpDWSq)
> Notes: To use DOM Jest install => npm install jest-environment-jsdom then you can add the following code to the top of ..test.js File
```
/**
 * @jest-environment jsdom
 */
 ```


# Pure Functions and Why Use Them?
- The function always returns the same result if the same arguments are passed in. It does not depend on any state, or data, change during a program’s execution. It must only depend on its input arguments.
- The function does not produce any observable side effects such as network requests, input and output devices, or data mutation.


## What Are Observable Side Effects?
An observable side effect is any interaction with the outside world from within a function. That could be anything from changing a variable that exists outside the function, to calling another method from within a function.

> Note: If a pure function calls a pure function this isn’t a side effect and the calling function is still pure.

- Side effects include, but are not limited to:

  - Making a HTTP request
  - Mutating data
  - Printing to a screen or console
  - DOM Query/Manipulation
  - Math.random()
  - Getting the current time


### Pure Function Example In JavaScript

```
function priceAfterTax(productPrice) {
 return (productPrice * 0.20) + productPrice;
}
```

### Impure Function In JavaScript

```
var tax = 20;
function calculateTax(productPrice) {
 return (productPrice * (tax/100)) + productPrice; 
}
```
The above function result depends on an external variable called tax which makes it impure function.

## Importance of Pure Functions
1. Testability will be easier and strightforward with pure functions.
2. The function can be easily maintained and refactored and not have to worry about unintended side effects messing up the entire application and ending up in debugging hell.

> Source of Notes: [Pure Functions in Javascript](https://medium.com/@jamesjefferyuk/javascript-what-are-pure-functions-4d4d5392d49c)
