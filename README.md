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

  TypeScript is an open-source programming language developed by MicroSoft, and the aim is to develop large appliactions.
  Moreover, it can be runned in every browsers, computers, and operating systems.

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
  ```

#### Create first TS project

- Steps:
  - 1. Create ts file:
    ```
            ① Create your project repository on Github.
            ② Use git clone your repository on your desktop, and open it in your IDE (Vscode).
            ③ Create your first TS file in your IDE: index.ts (Notice: Suffix name must be .ts).
    ```
    - 2. Write your code in index.ts file, and save it.
    ```
            console.log('Hello TS')
    ```
    - 3. Execute the code
    ```
            ① TS -> JS: In the terminal under the ts file folder, and execute the command: tsc index.ts. This command will automatically generate a js file.
            ② Execute js file: node index.js.
    ```
- Simplify execute ts steps:
  ```
          Two steps for execute TS code in general:
          1. tec index.ts
          2. node index.js
  ```
  Use <font color="660066">ts-node</font> package, to "directly" execute ts code.
  ```
             ① npm i ts-node -g
             ② use this command in terminal: ts-node index.js
  ```

#### Make comments for ts

Comments are an explanation of code for other programmers easier to read and understand the code.

Notice: Comments will not be executed.

```
One-line comment:
    // Two diagonal lines indicated a on-line comment
    // this is second line comment
    // Shortcut key: command + / (Mac) or ctrl + / (Window)

Multi-line comment:
    /*
        This is multi-line comment.
        Shortcut key: shift + option + a (Mac) or shift + alt + a (Window)
    */

ts-tips:
```

### B. Variables and Data Types of TS

#### Variable

In general, it is a container for storing data, and it is changeable.

##### How to use variable in TS

- Basic usage:
  1. Declearing variables and specifying types.
  ```
      let age: number;
  ```
  2. Assigning values to variables.
  ```
    age = 18;
  ```
  3. Simplify add value to variable
  ```
    let age: number = 19;
  ```

##### Type annotations

It is a method for adding type constraints for variables.

```
    // the variable "age" type is number (int)
    let age: number = 19;
```

<font color="dd0000">Notice: what type is specified is the only typeof value that can be assigned to the variable. </font>

##### The rules of variable name

1. <font color="dd00dd">Variable name only can include:</font> figures, letters, underscores, $, and cannot start with a figure.
2. Variable names are case-sensitive.

```
    // the "age" and "Age" are different variables
    let age: number = 19;
    let Age: number = 20;
```

3. Variable names should be <font color="dd0000">meaningful</font> , as the name implies.

```
    let age: number = 19; // good
    let a: number = 20;  // bad
```

4. Use Camel-Case rule (First letter lowercase, and first letter of each subswquent word capitalised).

```
    // Camel-Case
    let cityName: string = "auckland";
```

##### Data type in TS

- Original type (atomic data type)
  Common atomic data types include: <font color="dd0000">number / string / boolean</font> / undefined / null

  1. number type: it includes int and float figures.

  ```
    // int
    let size: number = 18;
    // float
    let size: number = 99.9

    // positive integers, the + can be omitted directly.
    let salary: number = +10000;
    // nagative integers, must use -.
    let withdraw: number = -100;
  ```

  2. string type: a string consisting of zero or more strings used to represent text infomation.
     Strings can be enclosed in single or double inverted commas. <font color="df0f0e">Recommend to use single inverted commas.</font>

  ```
    let cityName: string = 'auckland'; // recommended
    let cityName: string = "auckland";
  ```

  3. boolean: used to represent true or false.

  ```
  let isPlayingGame: boolean = true;
  let isEatingDiner: boolean = false;
  ```

  4. undefined/null: only have one value, the value is itself.

  ```
  The value of undefined type: undefind
  The value of null type: null

  let u: undefined = undefined
  let n: null = null

  undefined: used to indicate the value of a variable decleared but not assigned (value not found).
  null: used to indicate the value of a variable decleared and assigned value
  of null(it can be found, the value is null).
  ```

- Object type (complex data type)

#### Breakpoint debugging in VSCode

- Step 1: prepare a ts file for debug

```
        console.log('1 execute a for loop for debug')
        for(let i: number = 1; i <= 3; i++){
            console.log('debug: '+i);
        }
        console.log('2 finished')
```

- Step 2: add configuration for debugging
  1. open debug panel, click debug botton on VSCode left panel.
  2. generate default configuration: click debug dropdown box, and select add config.
  3. update below configurations:
  ```
      {
            // use IntelliSense to learn relevent attributes
            // hover to view the description of an existing property
            // learn more, see: https://go.microsoft.com/fwlink/?linkid=830387
            "version": "0.2.0",
            "configurations": [
                {
                    "type": "node",
                    "request": "launch",
                    "name": "debug ts code",
                    // ts-node command: "directly execute ts code"
                    "runtimeArgs" : ["-r", "ts-node/register"],
                    // here add ts file that you want to debug, current use 03_debug_test.ts file
                    "args" : ["${workspaceFolder}/02_variables/03_debug_test.ts"]
                }
            ]
      }
  ```
- Step 3: Install relevent package for debugging
  1. open terminal in current folder
  2. type below commands:
  ```
      npm i ts-node typescript
  ```
- Step 4: In VSCode left panel click debug, then start debugs.
  Also, you can add variable on watch panel in debug panel on the left.

#### Array

- Snytax 1 (recommond):

```
    let names: string[] = []
    // [] indicates array.
```

- Snytax 2

```
    let names: string[] = new Array()
```

#### Object

A collection of related properties and methods, and is unordered.

- Type annotation of object

```
    // interface
    let person:{
        name:string;
        age: number;
    }
    person = {
        name: "coco",
        age: "3"
    }
```

- Type annotation of object method

```

    let p1: {
        name: string;
        sayHi: () => void;
    }

    let p2: {
        sing: (name: string) => void;
    }

    let p3: {
        sum: (num1: number, num2: number) => number;
    }
```

- Interface

```
    interface IUser {
        name: string;
        age:number;
    }
    let p1: IUser = {
        name: 'Jack',
        age: 18
    }
```
