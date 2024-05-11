"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var BaseClass_1 = require("./BaseClass");
var Payroll = /** @class */ (function (_super) {
    __extends(Payroll, _super);
    function Payroll() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // constructor(){
    //     super() //to call the parent configuration
    //     console.log(`From parent ${this.empName}`)
    // }
    Payroll.prototype.printPayRollDetails = function () {
        _super.prototype.printEmpdetails.call(this);
        this.empName = 'Neeraj';
        console.log("From Child Configuration ".concat(this.empName));
    };
    return Payroll;
}(BaseClass_1.Employee));
var pr = new Payroll();
pr.printPayRollDetails(); //subclassmethod
