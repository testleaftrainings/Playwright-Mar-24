"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestReport = void 0;
var TestReport = /** @class */ (function () {
    function TestReport() {
    }
    TestReport.prototype.takeScreenshot = function () {
        console.log("Take screenshot for each step");
    };
    return TestReport;
}());
exports.TestReport = TestReport;
//const tr=new TestReport() -->not allowed
