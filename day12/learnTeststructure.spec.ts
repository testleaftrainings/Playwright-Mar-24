import {test} from '@playwright/test'
//C:\Users\Vidyabharathi R\OneDrive - TestLeaf Software Solutions Private Limited\Desktop\Playwright_Mar\PlaywrightFeatures\tests\day11\creds\loginDetails.json

test.beforeAll("Testing with beforeall configuration",async()=>{
    console.log("Staring the report");
})

test.use({storageState:"../creds/loginDetails.json"})
test.beforeEach(`Leaftaps Application`,async({page})=>{
    await page.goto("https://testleaf-da-dev-ed.develop.lightning.force.com/lightning/setup/SetupOneHome/home")

})

test('Create Individual',{tag:"@Smoke"} ,async({page})=>{
    await page.locator(".slds-icon-waffle").click();
    console.log(await page.title());
})

test('Edit Individual' ,{tag:"@Reg"},async({page})=>{
    await page.locator(".slds-icon-waffle").click();
    console.log(await page.title());
})

test.afterEach("Testing the aftereach function",async()=>{
    console.log("Closing the browser")
})


test.afterAll("Testing the afterall funtion",async()=>{
    console.log("Closing the report config")
})