/**
 * 1. Optional parameters
 * 2. Default Parameters
 * 
 * First Name
 * Last Name
 * Sur Name //optional
 * Phone Number
 * Email
 * Address //optional
 * Country
 */
function userRegistration(fName: string, lName: string, age:number, sName?: string, height?:number){
    console.log(`Sign up with ${fName}, ${lName}, ${sName}, ${age}, ${height}`);
    
}
// userRegistration("Nalini", "Reddy", 28, "NR", 167);

// function profileContent(firstName:string, age: number, userProfile:string = "Available", dob?:string){

//     console.log(`Profile Details ${firstName}, ${age}, ${userProfile}`);
    
// }
// profileContent("Senthil", 29)
userRegistration("Nalini", "Reddy", 28, "NR", 167);

function profileContent(firstName:string, age: number, userProfile:string = "Available", dob?:string){

    console.log(`Profile Details ${firstName}, ${age}, ${userProfile}`);
    
}
profileContent("Senthil", 29, "Away")