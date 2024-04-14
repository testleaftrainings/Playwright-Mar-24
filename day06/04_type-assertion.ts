/**
 * Type Assertion
 * 1. Angle brackets
 * 2. as
 * 
 * let response: any = "Record created successfully";
 * let myResponse: number = (<string>response).length;
 * 
 */
let response: any = 123;
let myResponse = (<number>response);
console.log(typeof myResponse);

let statusCode: any = "Success";
let statusLength: number = (statusCode as string).length;
console.log(statusLength);


