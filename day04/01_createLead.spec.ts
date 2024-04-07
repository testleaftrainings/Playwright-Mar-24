import { chromium, test } from "@playwright/test";

test('Test to create a new lead', async () => {

    //Create a browser instance
    const browser = await chromium.launch();

    //Create a browser context
    const browserContext = await browser.newContext();

    //Create a new page
    const page = await browserContext.newPage();

    //Load the url
    await page.goto("http://leaftaps.com/opentaps/control/main");

    //Enter the username
    await page.fill("#username", "demosalesmanager");
    await page.waitForTimeout(2000);
    //Enter the password
    await page.fill("[name='PASSWORD']", "crmsfa");

    //Click Login
    await page.click(".decorativeSubmit");

    //Click CRM/SFA
    await page.locator("text=CRM/SFA").click();

    //Click Leads
    await page.click("text=Leads", {timeout:20000});

    //Click Create Lead
    await page.click("text=Create Lead", {timeout:10000});

    await page.waitForLoadState("load");

    //Enter company name
    const companyName = page.locator("[id='createLeadForm_companyName']");
    await companyName.fill("Testleaf");

    //Enter first name
    await page.fill("#createLeadForm_firstName","Ranjini");

    //Enter last name
    await page.fill("input[id='createLeadForm_lastName']", "R");

    //Click Create Lead button
    await page.click("[name='submitButton']", {timeout:20000});

    //Print the status
    let status = page.locator("#viewLead_statusId_sp");
    await status.innerText({timeout:20000});
    console.log(`The status of the lead is ${status}`);
       
})

test("Test using inbuilt locators", async () => {
    
    //Create a browser instance
    const browser = await chromium.launch();

    //Create a browser context
    const browserContext = await browser.newContext();

    //Create a new page
    const page = await browserContext.newPage();

    //Load the url
    await page.goto("http://leaftaps.com/opentaps/control/main");

    //Enter the username
    await page.getByLabel("Username").fill("demosalesmanager");
    //Enter the password
   await page.getByLabel("Password").fill("crmsfa");
    //Click Login
    await page.click(".decorativeSubmit");

    //Click CRM/SFA
    await page.getByText('CRM/SFA').click();
})