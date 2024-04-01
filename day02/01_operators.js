/**
 * Arithmetic Operators
 * 1. Addition --> +
 * 2. Subtraction --> -
 * 3. Multiplication --> *
 * 4. Division --> / (quotient)
 * 5. Modulus --> % (remainder)
 * 
 */
let a = 10.456
let b = 789.9
console.log('Addition:', a+b );

let x = 10.456
let y = 789.9
console.log('Subtraction:', x-y );

let mul_1 = 10.456
let mul_2 = 789.9
console.log('Multiplication:', mul_1*mul_2 );

let div_1 = 10.456
let div_2 = 789.9
console.log('Division:', div_1/div_2 );

let mod_1 = 10.456
let mod_2 = 789.9
console.log('Modulus:', mod_1%mod_2);

/**
 * Increment Operators --> ++
 * i++ --> i=i+1
 * i=3
 * i = 3+1 = 4
 * 
 */
let val = 10
//Post increment 
console.log(val++);
console.log(val);
// val = 10
// val is incremented by 1 --> val = 10+1 = 11

//Pre increment operator
let num = 50;
//num = num+1 = 51
console.log(++num);
console.log(num);

//Decrement operator --
//Post decrement
let number = 100;
console.log(number--); //100
//100-1 =99
console.log(number); //99
//Pre decrement
console.log(--number); //98

//Equality operators --> Strict equality vs non-strict equality
//Strict equality --> === 1. compare the data type 2. compares the values
//Non-strict equality --> == Compares only the values and not the data type

console.log(1===1);
console.log(1===5);
console.log(1==='1');
console.log(1=='1');
console.log("chrome"=="Chrome");
console.log(true == "true"); //1 == "true"