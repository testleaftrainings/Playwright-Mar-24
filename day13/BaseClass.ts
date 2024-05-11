export class Employee{
    empId:number
    empName:string

    constructor(){
        this.empName='Vishnu'
    }

    printEmpdetails(){
        console.log(`Employee Name: ${this.empName}`)
    }
}

export class HRDepartment extends Employee {

    printHRInfo(){
        console.log("HRDepatment ")
    }
//logic

}








//export {Employee}