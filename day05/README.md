# JavaScript and TypeScript Guide

This guide provides an overview of essential JavaScript features, including arrays and functions, and introduces TypeScript, a powerful tool to bring strong typing to JavaScript.

## Table of Contents

1. [Arrays in JavaScript]
2. [Function and Types in JavaScript]
3. [Asynchronous JavaScript]
4. [Introduction to TypeScript]

## Arrays in JavaScript

### What is an Array?

An array is a single, ordered collection of multiple items, called elements, that are indexed by a numerical value. Arrays are used to store multiple values in a single variable, allowing for efficient access and manipulation of each element using its index.

### Array Declaration

In JavaScript, arrays can be declared in several ways:

1. **Literal Syntax**: The simplest and most common way to create an array.

```javascript
let testTypes = ["Smoke", "Sanity", "Regression"];
```

2. **Constructor with Array Keyword**: Using the `Array` constructor to create an array.

```javascript
let browsers = new Array("chrome", "firefox", "edge");
```

3. **Array Constructor with Single Length**: Creating an array with a predefined length.

```javascript
let scores = new Array(10);  // Creates an array with 10 undefined items
```

### Array Methods

JavaScript arrays come with a number of built-in methods:

- `push()`: Adds one or more elements to the end of an array and returns the new length of the array.
- `pop()`: Removes the last element from an array and returns that element.
- `shift()`: Removes the first element from an array and returns that removed element.
- `unshift()`: Adds one or more elements to the beginning of an array and returns the new length.
- `forEach()`: Executes a provided function once for each array element.
- `map()`: Creates a new array populated with the results of calling a provided function on every element in the calling array.
- `filter()`: Creates a new array with all elements that pass the test implemented by the provided function.
- `reduce()`: Executes a reducer function on each element of the array, resulting in a single output value.

## Functions and Types in JavaScript

### Function Declaration

A standard function declaration defines a function with the specified parameters.

```javascript
function displayName(name) {
    console.log("Hello " + name);
}
```

### Arrow Function

An arrow function expression is a compact alternative to a traditional function expression, but is limited and can't be used in all situations.

```javascript
const message = name => console.log("Hello " + name);
```

### Anonymous Function

An anonymous function is a function that is defined without a name, often used where functions are used as temporary expressions or passed as arguments to other functions. Here's a simple example of an anonymous function in JavaScript, which logs a message to the console:

```javascript
setTimeout(function() {
    console.log("This is an anonymous function");
}, 1000);
```

In this example, an anonymous function is passed as the first argument to `setTimeout`. It executes after a delay of 1000 milliseconds (or 1 second), logging "This is an anonymous function" to the console.

### Callback and Callback Hell

A callback is a function passed into another function as an argument to be executed later.

**Callback Hell**, also known as the pyramid of doom, is a situation where callbacks are nested within other callbacks several levels deep, making the code hard to read and maintain.

## Asynchronous JavaScript

### Promises

A Promise is an object representing the eventual completion or failure of an asynchronous operation.

```javascript
let myPromise = new Promise(function(resolve, reject) {
    setTimeout(() => resolve("Data received"), 3000);
});
```

### Async/Await

`async` and `await` are syntactic sugar built on top of promises. They make asynchronous code look and behave a little more like synchronous code.

```javascript
async function fetchData() {
    let data = await fetch('https://api.leaftaps.com/data');
    console.log(data);
}
```

## Introduction to TypeScript

### TypeScript (TS) and TypeScript Compiler (TSC)

TypeScript is a superset of JavaScript that adds static types. To run TypeScript, you need to compile it into JavaScript using the TypeScript Compiler (TSC).

### Installation Commands

Install TypeScript globally via npm:

```bash
npm install -g typescript
```

### TypeScript Variable Declaration and Syntax

Variables in TypeScript can be declared using `let` or `const`, similar to JavaScript.

```typescript
let username: string = "John Doe";
```

### TypeScript Data Types

TypeScript supports several data types including Boolean, Number, String, Array, Tuple, Enum, Any, Void, Null, Undefined, Never, and Object.

```typescript
let isActive: boolean = true;
let age: number = 30;
let fullName: string = "Alice Johnson";
```