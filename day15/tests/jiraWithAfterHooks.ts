import {TestInfo} from '@playwright/test'
import { createIssue } from './jiraIntegrationwithAxios'
async function logdefectinJira(testInfo:TestInfo){
   if(testInfo.status=="failed"){
     const summary=`Test failed with the title ${testInfo.title}`
     const descriptions=`Logging the defect ${testInfo.error?.message}`
     createIssue(summary,descriptions)
   }


}
export {logdefectinJira}