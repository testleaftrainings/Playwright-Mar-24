import test, { chromium, devices } from '@playwright/test'
test("Learn to emulate devices",async()=>{

    const mydevice=devices['Moto G4']

    const browser =await chromium.launch();
    const context=await browser.newContext({...mydevice,        
    }
    );
    const page=await context.newPage();
    await page.goto("http://www.leaftaps.com/opentaps")
    await page.fill("#username","demoSalesManager")
    await page.fill("#password","crmsfa")
    await page.click(".decorativeSubmit");
})