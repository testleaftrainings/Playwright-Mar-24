var EmployeeDetails = /** @class */ (function () {
    function EmployeeDetails() {
        this.empSalary = 4983000;
        this.empId = 120;
    }
    EmployeeDetails.prototype.printDetails = function () {
        console.log("Employee Details ".concat(this.empId, " :").concat(this.empName, " :").concat(this.empSalary));
    };
    return EmployeeDetails;
}());
var emp = new EmployeeDetails();
emp.printDetails();
