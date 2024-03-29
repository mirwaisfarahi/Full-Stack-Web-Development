# Code Testing
- The application should be tested for bugs by testers and QA engineers other than code author. Because author miss a bug or forget to check an edge case.
- Testers check each functionality independently from the developer in manual and automated way.

## Why is testing important?
- It save time and money.
- It will be easy to add new feature in the future without the risk of breaking existing functioanlity.
- Good tests can also be used for documentation purpose of the project.

## Software Testing
- The process of evaluating or assessing the completeness and quality of computer software. It can be manual and automated testing.

### 1. Manual Testing
- Applican testing happens manually and the test cases/scenarios are executed one by one by Testers without readymade tools.
- manual testing is a process in which we compare the behavior of a piece of software function, module, etc with the predefined and expected behavior which is set during the initial phase of SDLC.
- Manual testing always should be used before automate testing to ensure:
1. The application meets the system requirements
2. Find out bugs/errors which may arrise while running the application

#### When to do Manual Testing?
- UX and exploratory testing.
- Complex test scenarios that are not efficient and sometimes not feasible to automate.
- Test scenarios that are only being validated once in a while.
- Usability Testing: We perform usability testing to assess how convenient, efficient, and user-friendly the product has turned out to be for the end-users. 

#### What are the different types of manual testing?
1. Unit Testing: A single component or feature of the software and it is mostly done by the developer, not by QA engineer.
2. Integration Testing: After unit testing, once the compenents are integrated together.
3. System Testing: Once components are integrated then the whole applicaion is tested to meets all the quality standards.
4. Acceptance Testing: It is performed by the client against the requirements.
5. Black Box Testing: It is about the application behavior and its output against expected output. There is no knowledge about the internal code of the application.
6. White Box Testing: The tester knows the internal codes and structure of the software. The tester chosses inputs and executes the test by giving the inputs to the system through the codes and determines the appropriate outputs. The main focus of White Box Testing is on strengthening the security and om improving the design and usability of the software.

#### Steps to follow for Manual Testing
1. Gather Requirements using requirements analysis step and understand what is the expected behavior for the system.
2. Plan the Test Cases to test the whole application.
3. Review the test cases with the team leader and with the client if needed to correct our test cases if any error is there.
4. Execute the test cases and define the state for each test as passed, failed and skipped (if the test cannot complete because of some limitations ar unforeseen (unexpcted or predicted) circumstances)

#### Advantages of Manual Testing
- Uses human intelligence to find errors.
- Lets testers focus on complex features and functions.
- Tester knowledge of the project.
- Detects errors outside of the code.
- Provides accurate emulation of user experience.
- It helps maintain a testable system.

#### Disadvantages of Manual Testing
- Manual Testing is time-consuming mainly while doing regression testing. Manual testing is less reliable compared to automation testing because it is conducted by humans. So there will always be prone to errors and mistakes. Expensive over automation testing in the long run.

#### Key Takeaways
- Manual testing requires creative skill and imagination, using which a tester can imagine various scenarios to test a particular application.
- Additionally, the manual tester is not required to have expert software skills, but creativity and imagination are essential.
- Although nowadays, we can test almost all applications using automation, manual testing still is required as the base of testing.
- Also, we can find specific bugs only by testing the application manually.


### 2. Automated Testing
Compared to manual testing, automated testing is

1. Faster: it tests more of your product in less time.
2. More reliable: it’s less prone to error than a human is.
3. Maintainable: you can review, edit, and extend a collection of tests.

- Avoid losing huge costs, tests help to fix bugs early in the development cycle and save costs. especially if the development team works on a bank system or ERP system, or e-commerce system and financial systems, etc..

- Imagine a customer is checking her bank account online. You have $2,000. The system is updated overnight and she checks again in the morning. Her balance is $1000. Does her money vanish?

- It speeds up maintenance time and fixing errors. Testing allows the programmer to refactor code at a later date, and make sure the module still works correctly. The procedure is to write test cases for all functions and methods so that whenever a change causes a fault, it can be quickly identified and fixed.

- You are also forced to write cleaner, more modular code, it will be easier to test. we need the modular nature for unit testing.

#### Types of Tests(automated tests):
1. Unit Testing: Test one isolated unit/ piece of code (a function). Complexity is full isolated, testing one function.
2. Integration test: Test units with dependencies so we have no isolated code anymore, we might have a function call another function, the result of the function we are testing depends on another function, so here we test the combination of features.
3. End-to-End (e2e) or UI test: is a test of full interaction path in your app, (the sign-in process). 

#### Advantages to Performing Unit Testing:
1. Code Quality
2. Maintenance & Refactor Code
3. Unit tests help to fix bugs early in the development cycle and save costs, it is very useful with typos errors.
4. Good unit tests serve as project documentation, It helps the developers to understand the code base and enables them to make changes quickly.

> Note: Programmers think that Integration Testing will catch all errors and do not execute a unit test to save time. Once units are integrated, very simple errors that could have very easily found and fixed in unit tested take a very long time to be traced and fixed.

#### How to Think Before Writing Unit Testing?
1. If the code that you write is async or sync.
2. I should know very well what this unit of code does.
3. pre requests: what are things that this unit or class of code need to execute: because some units need an object or receive variables of data from APIs.
4. A unit test should be clear all team members understand it.

#### Basic Example without Testing Framework:

```
/*
====================================
Divide function
====================================
*/
function divide(x,y){
  if(x === 0 && y !== 0)
    return "Invalid!";
  
  if(x === 0 && y === 0)
    return "Not Allowed!";
  
  if(x !== 0 && y === 0)
    return "Not Allowed!";
  
  return x/y;
}

/*
Unit Test Function test divide function
*/
function canDivide(x,y,result){
  console.log("--> it can be divide "+ x + " by " + y + " to equal to "+ res);
  if(divide(x,y) === res){
    console.log("Succeed!");
  }
  else{
    console.log("Failed!");
  }
}

canDivide( 24 , 2 , 12 );
canDivide( 0 , 1 , "Invalid!" );
canDivide( 10 , 0 , "Not Allowed!" );
canDivide( 0 , 0 , "Not Allowed!" );
```

#### Integrated Testing
- A typical software project consists of multiple software modules, coded by different programmers. The purpose of this level of testing is to expose defects in the interaction between these software modules when they are integrated.

#### Let check the example below:
```
/*
====================================
checkAndGenerate function
====================================
*/
exports.checkAndGenerate = (name, age) => {
if (!validateInput(name, true, false) || !validateInput(age, false, true)) {
return false
}
return generateText(name, age)
}

/*
====================================
Integration Test
====================================
*/
test('should generate a valid text output', () => {
  const text = checkAndGenerate('Max', 29)
  expect(text).toBe('Max (29 years old)')
})
```

- You might think that integration tests are redundant if you have unit tests for the following functions: `validateInput` and `generateText` , but in case we change ‘checkAndGenerate’ function:

```
exports.checkAndGenerate = (name, age) => {
if (validateInput(name, true, false) || !validateInput(age, false, true)) {
return false
}
return generateText(name, age)
}
```
#### End-to-End (e2e)/ UI test:
- End-to-end testing is a Software testing methodology to test an application flow from start to end. The purpose of End to end testing is to simulate the real user scenario and validate the system under test and its components for integration and data integrity.
- These kinds of tests simulate a certain user interaction flow with your app. This involves clicking, entering text, etc.
- And since it involves this, we need a headless browser. Actually, all tests run in the headless browser but they’ll not load up your app. They just need a browser JavaScript environment (i.e. essentially an empty browser window that’s loaded up behind the scenes).

```
test('should create an element with text and correct class', async () => {
  const browser = await puppeteer.launch({
    headless: true,
  })
  const page = await browser.newPage()
  await page.goto('localhost:4002/page-name')
  await page.click('input#userName')
  await page.type('input#userName', 'robert')
  await page.click('input#age')
  await page.type('input#age', '40')
  await page.click('#btnAddUser')
  const finalText = await page.$eval('.user-item', el => el.textContent)
  expect(finalText).toBe('Anna (40 years old)')
}, 10000)
```
- In Example above: we simply tell the browser what to do, we can get access to the DOM elements and validate their state, and values.

> Note: To know about various testing tools visit [The Criteria For Choosing JavaScript Testing Frameworks](https://medium.com/weekly-webtips/mastering-testing-world-in-javascript-web-ea0180b469b4)

> Note: We will look at Jest Framekwork to test javascript code.

#### Unit Testing and the Arrange, Act and Assert (AAA) Pattern
- he AAA (Arrange-Act-Assert) pattern has become almost a standard across the industry. it says to plan your test in three sections called Arrange (where code required to setup that specific test. Here objects would be created, mocks setup (if you are using one) and potentially expectations would be set), Act, which should be the invocation of the method being tested and Assert (defend, stand up for) simply means to check expectations were met.

- Example:
```
// arrange
var repository = Substitute.For<IClientRepository>();
var client = new Client(repository);
// act
client.Save();
// assert
mock.Received.SomeMethod();
```

> Note: More details [Unit Testing and the Arrange, Act and Assert (AAA) Pattern](https://medium.com/@pjbgf/title-testing-code-ocd-and-the-aaa-pattern-df453975ab80)