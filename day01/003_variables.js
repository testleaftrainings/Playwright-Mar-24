/**
 * Variables
 * 
 * Best practices for variable naming conventions
 * - meaningful name
 * - a to z, A to Z, 0 to 9, _(underscore)
 * first_name
 * - don't start with number or _
 * - lower camelcase for readability
 *  fisrtNameWithInitial
 * var browserName
 * var browser_name
 * 
 * Variable declarations
 * var, let & const
 * var and let - you can change the value of var and let
 * const - constant - remains the same 
 * 
 * 
 * var and let 
 * before ES6, we only had var
 * ES6 - let was introduced
 * 
 * 
 * 1. Re-assignment
 * 2. Block level scoping
 * 3. Hoisting
 */
/**
 * 
 * Thirumal - Login Page
 * firstName
 * var firstName = " Thirumal"
 * Margaret - Payment
 * first name
 * var firstName = "Margaret"
 * 
 * 
 * 
 * 
 */

/*var firstName = "Vidya";
//console.log(firstName);
var firstName = "Paulson";
console.log(firstName);
//var - redeclaration is possible

let companyName = "Qeagle";
console.log(companyName);
companyName = "TCS";
console.log(companyName);
//let - redeclaration is not possible
//var & let - reassignment is possible
//const - redeclaration & reassignment is not possible

const browserName = "Chrome";
console.log(browserName);*/

//Variable Scoping --> level of accessibility of the variables
/**
 * 1. Global
 * 2. Function
 * 3. Block
 * 
 */
/*let gender = 'female' //global variable
function printGender() {
    let age = 25; //function scope  --> var & let
    if (gender.startsWith('female')) {
       let password ='blue';
        console.log("This is from the block" + password);
        console.log("She/Her");
    }else{
        console.log("He/His");
    } 
    console.log(age); 
   // console.log("This is from function " + password)
}
printGender();*/

//let--> block scoped variable
//var --> block & function scoped

//Hoisting
console.log(browserVersion);
var browserVersion = "123";
console.log(browserVersion);

//Internally
// var browserVersion;
// console.log(browserVersion);
// browserVersion = "123";
// console.log(browserVersion);

console.log(browserName);
let browserName = "Chrome";
console.log(browserName);

/*Internally,
let browserName;
console.log(browserName);
let browserName = "Chrome";

*/

