//constructor -->to initialize the object
//assign the value for the instance variable as default value
var LoginFunctionality = /** @class */ (function () {
    function LoginFunctionality(uname, pwd, id) {
        this.username = uname;
        this.password = pwd;
        this.empId = id;
    }
    LoginFunctionality.prototype.printDetails = function () {
        console.log("Login Credentials ".concat(this.username, ":").concat(this.password, ":").concat(this.empId));
    };
    return LoginFunctionality;
}());
var user1 = new LoginFunctionality("sankar", "S@12", 34);
user1.printDetails();
var user2 = new LoginFunctionality("Vivega", '12$v', 12);
user2.printDetails();
