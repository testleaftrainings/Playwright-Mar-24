import {test} from './retryLogic'
import { HomePage } from "../pages/homePage";
import { createIssue } from './jiraIntegrationwithAxios';
import { logdefectinJira } from './jiraWithAfterHooks';

// testData=JSON.parse(fs.readFileSync(path.join(__dirname,"credentials.json"),'utf-8'))
test("Login to the app" ,async({page})=>{    
    const hp=new HomePage(page);
     await hp.doLogin("demoSalesManager","crmsfa");
    await hp.clickCrm();

})