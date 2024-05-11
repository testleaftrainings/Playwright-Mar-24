//constructor -->to initialize the object
//assign the value for the instance variable as default value

class LoginFunctionality{
    username:string
    password:string
    empId:number

    //parametrized Constructor
constructor(uname:string,pwd:string,id:number){ //explicitly defining the constructor
    this.username=uname
    this.password=pwd
    this.empId=id
}

// constructor(uname:string,pwd:string){ //explicitly defining the constructor
//     this.username=uname
//     this.password=pwd
 //not allowed
// }

printDetails(){
    console.log(`Login Credentials ${this.username}:${this.password}:${this.empId}`)
}

}
const user1=new LoginFunctionality("sankar","S@12",34); 
user1.printDetails();

const user2=new LoginFunctionality("Vivega",'12$v',12); 
user2.printDetails();