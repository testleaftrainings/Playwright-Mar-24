/**
 * if else, if elseif, switch case
 * 
 * performs different actions based on the conditions
 * 
 * Syntax: if else
 * 
 * if(condition){
 * 
 * // code is executed if the condition is true
 * 
 * }else{
 * 
 * //code is executed if the condition is false
 * 
 * }
 * 
 * 
 * Syntax: if elseif
 * if(condition){
 * 
 * // code is executed if the condition is true
 * 
 * }else if(condition){
 * 
 * // code is executed if the condition is true
 * 
 * }else{ condition1 and condition2 are false
 * 
 * //code is executed if the condition is false
 * 
 * }
 */

function getBrowser(){
    if(browserName === 'chrome'){
        return "Supported browser"
       
    }else{
        return "Unsupported browser"
    }

}
//Call the function
let browserName = "safari";
console.log(getBrowser());

//if elseif
let browser = 'opera';
function getBrowserVersion(){
    
    if(browser==="chrome"){
        return 123.456
    } else if(browser==="firefox"){
        return 120.7
    } else if(browser==='edge'){
        return 121.98
    } else if(browser==='safari'){
        return 119.5
    } else{
        return "Unsupported browser"
    }
}
const func = getBrowserVersion();
console.log(func);

/**
 * switch case --> alternative to if-else-if block
 * when there are multiple conditions
 * Syntax: switch(expression) {
 *      case x:
 *          //code block
 *      break;
 *      case y:
 *          //code block
 *      break;
 * 
 *      default:
 *          //code block
 * 
 * }
 * 
 */

function getBrowserVersionOptimized(){

    switch (browser) {
        case "chrome":
            return 123.456;
        
        case "firefox":
            return 121.9;
        
        case "safari":
            return 119.56;
        
        case "edge":
            return 120.2;
            break;
        default:
            return "Unsupported browser"
    }

}
//browser = "chrome";
let version = getBrowserVersionOptimized();
console.log(version)