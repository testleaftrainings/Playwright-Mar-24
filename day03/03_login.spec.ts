import { chromium, test } from "@playwright/test";


test.skip("Test to login: Approach 1", async () => {

    //To launch the browser
    const browser = await chromium.launch({channel:"msedge"});


    //Create a browser context
    const browserContext = await browser.newContext();

    //Create a new page
    const page = await browserContext.newPage();

    //Load the url
    await page.goto("http://leaftaps.com/opentaps/control/main");

    //Enter the username
    await page.locator("#username").fill("demosalesmanager");
    
    //Enter the password
    await page.locator("#password").fill("crmsfa");
   
    //Click Login
    await page.locator(".decorativeSubmit").click();
    
    await page.waitForTimeout(5000);
    
})

test("Test to login: Approach 2", async () => {

    //To launch the browser
    const browser = await chromium.launch({channel:"chrome"});


    //Create a browser context
    const browserContext = await browser.newContext();

    //Create a new page
    const page = await browserContext.newPage();

    //Load the url
    await page.goto("http://leaftaps.com/opentaps/control/main");

    //Enter the username
    await page.fill("#username","demosalesmanager");
    
    //Enter the password
    await page.fill("#password","crmsfa");
   
    //Click Login
    await page.click(".decorativeSubmit");
    
    await page.waitForTimeout(5000);
    
})

test.only("Test to login: Approach 3", async () => {

    //To launch the browser
    const browser = await chromium.launch({channel:"chrome"});


    //Create a browser context
    const browserContext = await browser.newContext();

    //Create a new page
    const page = await browserContext.newPage();

    //Load the url
    await page.goto("http://leaftaps.com/opentaps/control/main");

    //Enter the username
    const username = page.locator("#username");
    await username.fill("demosalesmanager");

    //Enter the password
    const password = page.locator("#password");
    await password.fill("crmsfa")

    //Click Login
    
    await page.waitForTimeout(5000);

    //Get the title of the page
    const title = await page.title();
    console.log(`The title of the page is ${title}`);

    //Get the url of the page
    const url = page.url();
    console.log(`The url of the page is ${url}`);
    
    
    
})