
import {test as baseTest} from '@playwright/test'
export const test=baseTest.extend({
    page:async({page},use,testInfo) =>{
        page.clickAndDelay=async(selector:string)=>{
         //original method
        await page.click(selector);
        if(testInfo.retry){
            await page.waitForTimeout(3000);
        }
          } 
          await use(page);          
        }
})


