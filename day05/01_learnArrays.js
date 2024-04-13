/**
 * Methods in Array

1. push - add one or more elements to the end of an array
let testingTypes = ['Regression', 'Smoke']
 * 
 * 
 */
let testingTypes = ['Regression', 'Smoke'];
testingTypes.push('Sanity');
console.log(testingTypes);

//pop() - remove the last element from an array
testingTypes.pop();
console.log(testingTypes);

//shift() - remove the first element from the array
let browserNames = ["Chrome","Edge","Firefox","Safari"];
browserNames.shift();
console.log(browserNames);

//unshift() - add one or more elements to the beginning of an array
browserNames.unshift("Chrome","Opera");
console.log(browserNames);

//slice() - returns the sliced value (copy the portion of an array into a new array
//object selected from the start index to the end index)
let bNames = browserNames.slice(1, 4);
console.log(bNames);

//splice() - changes the contents of an array by removing or replacing existing
//elements (add elements to the array)
let automationTools = ["Selenium","Playwright","Appium","Cypress","WebDriverIO", "UFT"];
automationTools.splice(2,1,'AccelQ',"RESTAssured");
console.log(automationTools);

//To get the length
console.log(automationTools.length);

console.log(testingTypes.length);
console.log(testingTypes);
testingTypes[1] = "Functional";
console.log(testingTypes);
testingTypes[2] = "Sanity";
testingTypes[3] = "Performance";
console.log(testingTypes);

let number = [];
console.log(number.length);
console.log(testingTypes[10]);
testingTypes[10] = "Security";
console.log(testingTypes);

//Heterogeneous
const mixedArray = [1,2,3,"Chrome",true,123.0,'$Qeagle5',['sanity','smoke']];
console.log(mixedArray);

//join() - joins the array to string using '-'
let joinedTestTypes = testingTypes.join("-");
console.log(joinedTestTypes);

let names = ["Jisha","Maha", "Tamil", "Paulson"];
let joinedNames = names.join();
console.log(joinedNames);

//concat - merges two arrays into a new array
let array1 = [1,2,3,4,5];
let array2 = [6,7,8,9,10];
let newArray = array1.concat(array2);
console.log(newArray);

//sort
let numArray = [4,1,7,3,8];
console.log(numArray);
numArray.sort();
console.log(numArray);

//Spread syntax
// let arr1 = ['a','b','c','d'];
// let arr2 = [...arr1,'e','f','g'];
// let arr3 = [...arr2,'h','i'];
// console.log(arr3);

//reverse()
numArray.reverse();
console.log(numArray);