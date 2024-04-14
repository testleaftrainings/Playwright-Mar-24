/**
 * Enum
 * - set of named constants
 * 1. Numeric Enums
 *  enum enumName {
 *    enum Members
 *  
 * }
 * 
 * 
 */
enum TestResult {
    Pass = 1,
    Fail =3, 
    Pending,
    Warn,
    Skip,
    Error

}

function logTestResult(testName: string, result: TestResult){

    console.log(`Test: ${testName}, Result Code: ${result}`);
    
}

logTestResult("Login Test", TestResult.Pass);
logTestResult("Registration Test", TestResult.Pending);

//String enums

enum BrowserType {
    Chrome = "chrome",
    Edge = 'edge',
    Safari = 'safari',
    Firefox = 'firefox',
    Opera = 'opera'
}

function launchBrowser(browserType: BrowserType){

    console.log(`Launching ${browserType} browser`);
    
}
launchBrowser(BrowserType.Chrome);
launchBrowser(BrowserType.Firefox);

//Heterogeneous enum
enum BrowserStatus{
    Opened = 1,
    Closed = "closed",
    Crashed = 0,
    Unknown = "unknown"

}
function reportBrowserStatus(status:BrowserStatus){
    console.log(`Current browser status: ${status}`);
    
}
reportBrowserStatus(BrowserStatus.Opened);
reportBrowserStatus(BrowserStatus.Unknown)