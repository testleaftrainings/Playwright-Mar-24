import {test} from '@playwright/test'

    test(`Learn to skip login using storagestate`,async({page})=>{
    await page.goto("https://login.salesforce.com/");
    await page.fill("#username","vidyar@testleaf.com");
    await page.fill("#password","Sforce@123");
    await page.click("#Login");    
    await page.context().storageState({path:"../creds/loginDetails.json"})


})

