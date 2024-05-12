import { TestReport } from "./learnAstractClass";

class MyReports extends TestReport{
    startCustomReport(): void {
       console.log("Using Allure report");
           }
    }
const myreport=new MyReports();
myreport.startCustomReport();