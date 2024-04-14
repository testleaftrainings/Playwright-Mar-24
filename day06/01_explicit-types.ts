/***
 * Variables - let and const
 * DataTypes - string, number, boolean, Array, any, void
 * 
 */

//let variableName:type = value;
let firstName:string = "Paulson";   //Explicit inference

/**Type Inference
 * 
 * 1. Implicit Inference
 * 2. Explicit Inference
 * 
 */

let companyName = "Testleaf"; //Implicit Inference

//let isBrowserClosed = true;
let isBrowserClosed:string = "No"; //Explicit Inference

//function funtionName(arg1:type, arg2:type):type
function add(x:number,y:number):number{
    return x+y;

}
console.log(add(10,5));

