/**
 * Annotations - explicitly specify the type
 * Basic types, Array, void, any, null, undefined
 * 
 * Array 
 * 1. Literal - type[]--> let numbers: number[] = [1,5,7,9]
 * 2.Constructor - <type> let names: Array<string> = ["Rajesh", "Vishnu"]
 * 
 * Union Type - |
 * let id:number|string
 * 
 */

// let userProfile:number|string|boolean = 28;
// userProfile = "Jagadeesh";
// userProfile = "Anbarasan";
// userProfile = true;
// console.log(userProfile);

/*Type Aliases
type AliasName = Type;
type StringAlias = string
type stringOrNumber = string|number;


*/

type stringOrNumber = string|number;
let userProfile:stringOrNumber = "Roopa";
userProfile = 28;

type supportedBrowsers = "Chrome"|"Firefox";

function invokeBrowser(browserName:supportedBrowsers):void{

    if(browserName === "Chrome"){
        console.log("Launch Chrome Browser");
        
    }else
    console.log("Launch Firefox Browser");
    

}

invokeBrowser("Chrome");

/**
 * 
 * Intersection Type - & 
 * 
 * Object Literal --> key-value pair (properties)
 * name: "Sai"
 * age: 26
 * Syntax:
 * let objectName: {key1: type1; key2: type2;..}={
 * key1: value1,
 * key2: value2,
 * key3: value3,
 * ...
 * };
 * 
 * }
 * 
 */
let userData:{
    name: string;
    age: number;
    email:string;
    isActive: boolean
}={
    name: "Sai",
    age: 29,
    email:"sai@gmail.com",
    isActive: true

};

//Dot Notation
console.log(userData.name);
console.log(userData.age);
console.log(userData.email);
console.log(userData.isActive);

//Bracket notation
console.log(userData["name"]);
console.log(userData["age"]);
console.log(userData["email"]);
console.log(userData["isActive"]);


type Employee  = {id:number, empName:string};
type Department = {department:string};

type Team = Employee & Department

let emp1:Team ={id: 1003, empName:"Nandhini", department:"QA"};
console.log(emp1);

/**
 * Define the type supportedBrowser - Chrome & Safari (|)
 * Drfine the type browserVersion - 121 & 123 (|)
 * Define the type browserProfile - supportedBrowser & browserVersion (object literal)
 * Define a function and pass the argument(browser)
 * Launch the Chrome browser
 * Call the function
 */
type supportedBrowser = "Chrome"|"Safari";
type browserVersion = "121"|"123";
type browserProfile={
    browserName: supportedBrowser;
    version: browserVersion
}
function callBrowser(browser: browserProfile):void{
    if(browser.browserName==="Chrome" && browser.version==="121"){

        console.log("Launch the Chrome browser");
        
    } else
        console.log("Launch the Firefox browser");

}

const chromeBrowser: browserProfile={
    browserName: "Chrome",
    version:"121"
}
const safariBrowser: browserProfile = {
    browserName: "Safari",
    version: "123"
}

callBrowser(chromeBrowser);
