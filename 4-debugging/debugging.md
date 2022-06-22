# Debugging and developer tools
Debugging is the process of finding and fixing code errors/bugs.

> Node: Quality Assurance (QA) is a complex discipline that monitors the whole software development process. Debugging is just a small part of QA.

## Why Debugging is Important?
- No one has written a perfect peice of code yet. It is unlikily that you would be the first. You may end up writing code with bugs and errors. But atleast you can fix some errors in the early stage of writing code collaboratively.

## JavaScript Debuggers
- There are built-in debuggers for javascript in browsers. Only we need to tun on and off them.
- Some of debugging methods are as follows.

1. The console.log() Method: To display values in the debugger window.
2. Setting Breakpoints: To stop excution of code in a specific point and debug the code.
3. The debugger Keyword: Use of debugger keyword to stop the execution same as break point.

## Debugging with git bisect
- Git bisect is useful when you can't easily trace a bug to a specific piece of code. It runs a binary search on all the commits between good state (no bugs) and bad state (that bug you were looking for).

- It is a way to find bad commits in your application.

### Example
Implement the bisect on the bisect.js file.
#### Steps
1. git log => to find out all the commits on your file
