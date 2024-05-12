"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LaunchBrowser = /** @class */ (function () {
    function LaunchBrowser() {
    }
    LaunchBrowser.prototype.startReport = function () {
        console.log("Start the reports");
    };
    LaunchBrowser.prototype.endReport = function () {
        console.log("End of the report");
    };
    LaunchBrowser.prototype.launchBrowser = function () {
        console.log("Launch the chrome Browser");
    };
    LaunchBrowser.prototype.locator = function () {
        return 'locatorValue';
    };
    LaunchBrowser.prototype.getStatus = function () {
        console.log("Test is successful");
    };
    return LaunchBrowser;
}());
var lb = new LaunchBrowser();
lb.launchBrowser();
lb.getStatus();
lb.startReport();
lb.endReport();
console.log(lb.locator());
