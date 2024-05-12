import { log } from "console";
import { customeReports } from "./learnInterface";

class LaunchBrowser implements customeReports{
    startReport(): void {
       console.log("Start the reports");
    }
    endReport(): void {
       console.log("End of the report");
       
    }
    launchBrowser(): void {
       console.log("Launch the chrome Browser");
       
    }
    locator(): string {
       return 'locatorValue';
    }
    getStatus(): void {
       console.log("Test is successful");
       
    }
    
}

const lb=new LaunchBrowser();
lb.launchBrowser();
lb.getStatus();
lb.startReport();
lb.endReport();
console.log(lb.locator());
