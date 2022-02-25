# typescript-guide

Show the learning process about typescript

### A. TypeScript Overview

- What is JavaScript
  JavaScript (JS) is a programming language which runs on the client side (browser).
  When this language applied in browser, it will provide dynamic interaction feature for website, to make "animation" for website.
  &nbsp;
  The runtime environments for JavaScript: 1. browers 2. node.js.
  Node.js breaks down the broswer limitations with JavaScript, to achieve the serve side and client side programming.
  &nbsp;
  Overall: the JavaScript can run in frontend/backend, not only in browser but also in Node.js.
  &nbsp;
- What is TypeScript
  TypeScript (TS) is a superset of JavaScript.
  TypeScript = <font color="660000">Type</font> + JavaScript (add type system for JS)
  ```
    // TypeScript code: it has clear type for each variable, e.g., number (Number type)
    let age: number = 18
    // JavaScript code: without clear type for variables
    let age = 18
  ```
  TypeScript is an open-source programming language developed by MicroSoft, and the aim is to develop large appliactions. Moreover, it can be runned in every browsers, computers, and operating systems.
  &nbsp;
- What are TypeScript advantages compare to JavaScript
  1. To avoid type errors.
  2. Typology thinking. Make development more rigorous. It can find the error in advance, and reduce time to fix bug.
  3. Typology system can improve code readability, and make the code easier to maintain and re-build.
  4. Supplemented by interface and enumeration for large applications, which are JavaScript missed.

#### Install the toolkit for prasing TS

- Node.js/broswer only can identify JS code rather than TS code.
- Thus, we need convert TS to JS at first, then it can be run at Node.js/broswer environment.
  &nbsp;
  Steps:
  ```
    ① run npm i typescript -g  // typescript: it is a tookit for prasing TS. And it provides tsc command, achieved convert TS to JS.
    // npm: is used to install packages for frontend development, it will be automatically installed through installing Node.js.
    // i (install): is an abbreviation for install.
    // -g (--global): Global identification, that means we can use this toolkit in every project.
    ②
    ③
  ```
