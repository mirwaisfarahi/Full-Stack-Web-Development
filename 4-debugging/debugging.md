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
- The git bisect command is a way to make your investigations faster. Especially in the case of big projects, finding when and why a bug was introduced can be a neverending story.

### Example
Implement the bisect on the bisect.js file.
> Source : [Git bisect tutorial - How to find a bad bug commit](https://www.youtube.com/watch?v=D7JJnLFOn4A&t=6s)

#### Steps
1. git log => to find out all the commits on your file
2. git bisect start => To start the bisect
3. git bisect bad => mark the current commit as bad because there is bug and application is not working
4. git bisect good [commit-hash id] => the commit id when the application was working good. Now check whether the application is on its stable state. If not then type again => git bisect bad (to make bad the current revision of commit).
5. git bisect good => because the application is working. The file code has been reversed to the commit when the application was working fine.
6. git bisect reset => it will reset back to the commit that we were there before bisect and it will reset all the changes we made so far with bisect.

#### How to View the Changes?
1. git show [bad commit id] => which shows the changes we made in that particular commit.

#### How to Revert from a Commit?
1. git revert [bad commit id] => to revert the changes made in this commit.