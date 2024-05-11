class Employee{    //define properties and methods

    empId:number
    empName:string //global/class/instance variable

    //method declaration
    printempInfo(empPhno:number){ //empPhno-->local variable
        console.log(this)       
        console.log(`Employee Details : ${this.empId}:${this.empName} :${empPhno}`)
    }
//this-->refers to the current class properties/method
}

//object should be created outside the class
//to create object  
//syntax--> const variableName=new ClassName();

const emp=new Employee();  //constructor -->default constructor -->initialize the object
//objVariable.method();
//objVariable.variableName=value
emp.empId=123;
emp.empName="Srinivasan"
emp.printempInfo(879202090);