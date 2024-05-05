import {test,chromium} from '@playwright/test'


test("learn to mock location",async()=>{

    
    const browser =await chromium.launch();
    const context=await browser.newContext({
        geolocation:{latitude:46.2276,
            longitude:2.2137},
        permissions:['geolocation']
                  
    }
    );
    //await context.grantPermissions(['geolocation','notification'])
    const page=await context.newPage();
    await page.goto("https://www.openstreetmap.org/");
    await page.waitForTimeout(5000);
    await page.locator("[aria-label='Show My Location']").click();
    await page.waitForTimeout(5000);
})