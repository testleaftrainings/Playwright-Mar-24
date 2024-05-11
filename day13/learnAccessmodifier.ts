class EmployeeDetails{

public empName:string
private empSalary:number
readonly empId:number 

constructor(){
    this.empSalary=4983000
    this.empId=120;
}

printDetails(){
    console.log(`Employee Details ${this.empId} :${this.empName} :${this.empSalary}`)
}

//for read permission the private variable
public get getSalary(){
    return this.empSalary;
}

//to permissionto modify the private variable
public set setSalary(value:number){
    this.empSalary=value;
}
}

const emp=new EmployeeDetails();
emp.printDetails();
const sal=emp.getSalary; //its a get property 
emp.setSalary=5630029; //this is a set property
