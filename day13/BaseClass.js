"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
var Employee = /** @class */ (function () {
    function Employee() {
        this.empName = 'Vishnu';
    }
    Employee.prototype.printEmpdetails = function () {
        console.log("Employee Name: ".concat(this.empName));
    };
    return Employee;
}());
exports.Employee = Employee;
//export {Employee}
