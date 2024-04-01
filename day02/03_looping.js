/**
 * for loop, while loop, do while loop
 * 
 * for loop 
 * used to execute a block of code repeatedly, as long as a specified 
 * condition is true
 * 
 * Syntax: for loop
 * 
 * for(Initilization; condition; increment){
 *      //code block
 *      //incremented by 1
 * }
 * 
 */
//Print the values from 1 to 10
for (let index = 1; index <= 10; index++) {
                   
        console.log(index);
        
}

/**
 * while --> execute the block as long as a specified condition is true
 * 
 * Syntax: while(condition){
 *  //code to be executed
 * }
 * 
 */
//Print the values from 10 to 1
let count = 0;
while (count>0) {   
    console.log(count); 
    count--; 
}

/**
 * execute code block at least one time - do while
 * 
 * Syntax: do {
 *  //Code block to be executed
 * }while(true)
 * 
 */

let i = 1;
do{
    console.log(i); //1
    i++;
    //2
}while (i<1);


let continueRunning = true;
while (continueRunning) {
    console.log("Keep running");
}

//Logical Operator

/*
true && true --> true
fales && true --> false

true || false --> true
false || false --> false */

for (let index = 1; index <= 10; index++) {
    if(index>5 && index%2===0){               
    console.log(index);
    }
    
}

