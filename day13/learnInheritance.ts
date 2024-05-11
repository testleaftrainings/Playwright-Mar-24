import { Employee, HRDepartment } from "./BaseClass";

class Payroll extends Employee{

constructor(){
    super();
    //to call the parent configuration
    this.empId=34;
}
printPayRollDetails(){
    super.printEmpdetails()
    this.empName='Neeraj'
    console.log(`From Child Configuration ${this.empName}` )
}
}

const pr=new Payroll();
pr.printPayRollDetails() //subclassmethod

class HR extends HRDepartment{ //multilevel inheritance

}
const hr=new HR()
hr.printEmpdetails()//Employee
hr.printHRInfo();