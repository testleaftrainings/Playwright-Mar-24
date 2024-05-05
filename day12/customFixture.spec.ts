import  {test as baseTest} from  '@playwright/test'

export const test=baseTest.extend({basepage:async({page},use)=>{

    await page.goto("http://www.leaftaps.com/opentaps")
    await page.fill("#username","demoSalesManager")
    await page.fill("#password","crmsfa")
    await page.click(".decorativeSubmit")
    use(page);
}
})