/**
 * string --> data type used to hold a sequence of characters
 * 
 * There are 2 ways
 * 1. Primitive or string literal
 * 2. string object
 */

//let browserName = 'Chrome'; //string literal

let browserName = new String("chrome"); //string object
browserName = new String("webkit");

let testType = 'It\'s a smoke test';
let sentence = "Hello, This is a \"\" double quote";

//Concatenation
let testcaseName = "Create a new Lead";
let testcaseId = 110;
let result = testcaseId+ "-" +testcaseName+" : passed in last execution"
console.log(result);
console.log(typeof result);

//Backticks --> ` -->${} --> template literal
let testcaseCount = 900;
let output = `There are ${testcaseCount} tests automated in our project`;
console.log(output);

//How to get the count of character in the string?
let courseName = "Playwright";
                //1,2,3,..
                //0,1,2
console.log(courseName.length);

//length starts with 1 and index with 0

//find the first character of the given string
console.log(courseName.charAt(2));
console.log(courseName.charAt(courseName.length-1));

courseName = "DSA";
//D - 0, S - 1, A - 2
console.log(courseName.length);
console.log(courseName.charAt(courseName.length-1));
                                //3-1=2
                                //charAt(2)


//index of the character
const randomIndex = courseName.indexOf('S');
console.log(randomIndex);
const noMatch = courseName.indexOf('s');
console.log(noMatch); //-1

//includes
courseName = "Selenium"
console.log(courseName.includes('ele'));

//lowercase, uppercase
let upperCase = courseName.toUpperCase();
console.log(upperCase);
courseName = "MICROSERVICES";
console.log(courseName.toLowerCase());

let description = "The price of the bag is 272 USD";
console.log(description.toUpperCase());

//slice
console.log(description.length);
console.log(description.slice(4,9));


//Reversing the String
//let str = 'Testleaf'; //[T,e,s,t,l,e,a,f]
        //1,2,3,4,5,6,7,8
        //0,1,2,3,4,5,6,7

function reverseStr(str){
    let chars = str.split("");
    let reversed = "";
    for (let index = chars.length-1; index >= 0 ; index--) {

        reversed = reversed + chars[index];
        
    }
    return reversed;

}
console.log(reverseStr("Testleaf")); 


