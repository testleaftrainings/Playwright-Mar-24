import { firefox, chromium, test } from "@playwright/test";


test("Test to launch the browser", async () => {

    //To launch the browser
   // const browser = await chromium.launch({headless:false, channel:"chrome"});
   //To launch firefox browser
   //const browser = await firefox.launch({headless:false});
   const browser = await firefox.launch();

    //Create a browser context
    const browserContext = await browser.newContext();

    //Create a new page
    const page = await browserContext.newPage();

    //Load the url
    await page.goto("https://leafground.com/");

    await page.waitForTimeout(10000);

    //Close the page
    await page.close();

    //Close the context
    await browserContext.close();

    //Close the browser instance
    await browser.close();
    
})