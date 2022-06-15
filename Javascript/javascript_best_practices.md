# JavaScript best practices

## General practices

1. Keep all the JavaScript code in JS files, not in the `script` tag.
2. Keep your [code clean](https://devinduct.com/blogpost/22/javascript-clean-code-best-practices) following this advice about:
  - type checks.
  - naming.
  - simplicity.
  - DRY.
3. If you use node modules, .lock files should be in the repository to avoid problems with future versions of the dependencies.
4.  If you use ES6, use object destructuring to get the values from an object. This way you can avoid repeating a lot of code.

## JavaScript in the browser


1. Do not commit `console.log` to your repo. It’s ugly, it kills performance and it can make confidential data be visible to anyone using the browser tools to look at your website.
2. Do not use `window.alert()` or `window.confirm()`. It’s ugly, impossible to style, it stops code execution and displays differently on different browsers. Use custom modal instead.
3. Keep the number of changes/updates to the DOM as low as possible, they are very expensive for the browser.
4. Keep the application logic separated from DOM manipulation tasks.
5. Do not use `document.write` or `eval`
6. Add `node_modules` dir to your .gitignore file as all those files are not needed in your repo (each team member will install all packages thanks to your package.json file).
7. Do not commit old pieces of code as inline comments. They will make your project look messy. If you need to review a previous version of your code, you can always use git history.

## Refresher on JavaScript best practices
- [best practices by w3schools](https://github.com/microverseinc/curriculum-html-css/blob/main/articles/javascript_best_practices.md)
- [Check out JavaScript common mistakes by w3schools as well](https://www.w3schools.com/js/js_best_practices.asp)

## Why is clean code important?
> There is not a single coding style or a rigid set of rules that every programmer should follow. Given the number of existing programming languages, paradigms, and personal styles, that's simply impossible. But there are some principles that the community has embraced, independent of the language you are working in. Some of the most popular are:

- DRY: Don't repeat yourself! It simply means you should try to avoid having duplicated code. Instead, you should reuse your code when possible. Every piece of knowledge must have a single, unambiguous, authoritative representation within a system (Andrew Hunt & David Thomas, "The Pragmatic Programmer").

- KISS: Keep It Simple, Stupid. No further explanation is needed! Try to avoid unnecessary complexity, don't over-engineer your code. A simple, small, and easy-to understand code base is easier to maintain and scale.

- YAGNI: You Aren't Gonna Need It. Don't add anything you don't strictly need. Try to avoid the temptation of adding the most trendy technologies just because you think they may be useful in the future. Add things gradually, when they are really needed.