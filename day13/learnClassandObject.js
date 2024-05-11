var Employee = /** @class */ (function () {
    function Employee() {
    }
    //method declaration
    Employee.prototype.printempInfo = function (empPhno) {
        console.log(this);
        console.log("Employee Details : ".concat(this.empId, ":").concat(this.empName, " :").concat(empPhno));
    };
    return Employee;
}());
//object should be created outside the class
//to create object  
//syntax--> const variableName=new ClassName();
var emp = new Employee(); //constructor -->default constructor -->initialize the object
//objVariable.method();
//objVariable.variableName=value
emp.empId = 123;
emp.empName = "Srinivasan";
emp.printempInfo(879202090);
