import {test,chromium} from '@playwright/test'

test.skip('Launch browser in normal mode',async()=>{
        const browserContext=await chromium.launchPersistentContext('',{headless:false,channel:'chrome'});
      //  await chromium.launch({})
       const availablePages=browserContext.pages();
        const page=availablePages[0];
       //.newPage();
       await page.goto("https://login.salesforce.com/");
       await page.waitForTimeout(3000);
})
//to refer the test having bug in the funtionality
test('Leafground basicAuth',async()=>{
    //const userDataDir="./mydirdetails";
    const browserContext=await chromium.launchPersistentContext('',{headless:false,channel:'chrome',
    httpCredentials:{
        username:"admin",
        password:"testleaf",
        origin:"http://leafground.com:8090"
    }
    });

    const page=await browserContext.newPage();
    await page.goto("https://www.leafground.com/auth.xhtml")
    await page.getByRole('button',{name:'Basic Auth'}).click();
    await page.waitForTimeout(4000);
  
})
