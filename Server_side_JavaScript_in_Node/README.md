# Server side JavaScript in Node


## Week 2 Recall

1. JS is dynamically typed language : JS does not require the explicit declaration of the variables before they're used.
2. JS Function is block of code designed to perform perticular task.
3. JS function is defined with the function keyword, followed by a name and parentheses().
4. Inside a function, the parameters behave as local variables.
5. Code should be executed, by the function inside curly brackets : {}.
6. JS function is executed when a function is getting invoked like : Event occures and call function and self invoke

### Assignment 1: Banking Application

### Assignment 2: Cricket Series

### Assignment 3: JavaScript Logic Building


## Week 3 Recall

1. Module in Node.js is simple or complex functionality organized in single or multiple JavaScript files that can be reused throughout the Node.js application.
2. The CommonJS module specification is the standard used in Node.js for working with modules.
3. CommonJS modules basically contain two primary parts:
    a. A variable named exports, which contains the functions, variables that a module wishes to make available to other JavaScript programs.
    b. A require function that JavaScript programs can use to import the exports of the module.
4. npm helps to install external package avaialble in npm registry.
5. After installing external npm module following structure will be created:
    a. node_modules
    b. package-lock.json
    c. package.json
6. It's the package.json file that enables npm to start the project, run scripts, install dependencies, and publish to the npm registry.
7. package.json is the central place to configure and describe how to interact with and run your application.

### Assignment 1: String Manipulation

### Assignment 2: Arrays Manipulation using lodash

## Week 4 Recall : Asynchronous programming

1. The global setTimeout() sets a timer that executes a function or a specifies peice of code once the timer expires.
2. The setTimeout() takes two parameters- a callback function and the time in milliseconds after which the callback function must execute.
3. The callback() always takes error as the first parameter.
4. Steps to use Promises in asynchronous programming:
    1. return a Promise object from the function that performs the asynchronous operation.
    2. Call the function using the then() block with the onFulfilled and onRejected callback functions as parameters as it returns Promise.
5. Promises allow a programmer to gracefully write chained asynchronous calls called Promise chaining.
6.  An async function is a special type of function in which it's possible to use the await expression to pause the execution of a given promise until it is resolved.
7. Promise chaining can be simplified by using async/await.


### Assignment 1: Employees of an organization

### Assignment 2: Todo List

### Assignment 3: Users

### Assignment 3: Grade Evaluation


## Week 5 Recall : Working with File system using Node.js

1. Data can be read or written from file in two ways
    a. Synchronously : This tells Node.js to block all other processess and make the current file read or write only.
        1. The fs.readFileSync(path, options) method is used to read the specified data synchronously from a file.
        2. The fs.writeFileSync(path, options) method is used to write the specified data synchronously to a file.
    b. Asynchronously : Here file is read or written in non blocking way.

### Assignment 1: Sales Analyzer
