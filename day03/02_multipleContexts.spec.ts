import { test, chromium } from "@playwright/test";

test("Testing multiple contexts", async () => {

    const browser = await chromium.launch();

    const browserContext1 = await browser.newContext();

    const browserContext2 = await browser.newContext();

    const page1 = await browserContext1.newPage();
    const page3 = await browserContext1.newPage();
    await page1.goto("https://leafground.com/");
    await page3.goto("https://www.facebook.com/login/");
    await page1.waitForTimeout(10000);
    await page3.waitForTimeout(10000);

    const page2 = await browserContext2.newPage();
    await page2.goto("https://www.facebook.com/login/");
    await page2.waitForTimeout(10000);


    
})