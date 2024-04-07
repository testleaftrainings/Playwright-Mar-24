import { test, chromium } from "@playwright/test";

test("Learning fixtures", async ({page}) =>{

    //Launch the browser
    //Create a context
    //Create a page

    await page.goto("https://login.salesforce.com/");
    await page.fill("#username", "ranjini.r@testleaf.com");
    await page.fill("#password", "Testleaf$4321");
    await page.click("#Login");


})