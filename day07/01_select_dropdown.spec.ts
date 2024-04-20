import { chromium, test } from "@playwright/test";

test.only('Test to create a new lead', async ({page}) => {

    //Load the url
    await page.goto("http://leaftaps.com/opentaps/control/main");

    //Enter the username
   await page.fill("#username", "demosalesmanager");
    
    //Enter the password
    await page.fill("[name='PASSWORD']", "crmsfa");

    //Click Login
    await page.click(".decorativeSubmit");

    //Click CRM/SFA
    await page.locator("text=CRM/SFA").click();

    //Click Leads
    await page.click("text=Leads");

    //Click Create Lead
    await page.click("text=Create Lead" );

    //Enter company name
    const companyName = page.locator("[id='createLeadForm_companyName']");
    await companyName.fill("Testleaf");

    //Enter first name
    await page.fill("#createLeadForm_firstName","Ranjini");

    //Enter last name
    await page.fill("input[id='createLeadForm_lastName']", "R");

    //Select the Source dropdown
    //Locate the dropdown
    await page.selectOption("#createLeadForm_dataSourceId", {value:'LEAD_DIRECTMAIL'});

    //To get the count of values --> .count()
    const dropdown = page.locator("#createLeadForm_dataSourceId option");
    const dropdownCount = await dropdown.count();
    console.log(`No. of items ${dropdownCount}`);

    for (let index = 0; index < dropdownCount; index++) {

        console.log(await dropdown.nth(index).innerText());   
        
    }
    
    //Select Country Dropdown
    await page.selectOption("#createLeadForm_generalCountryGeoId", {label:"India"});

    //Using index
    await page.selectOption("#createLeadForm_generalCountryGeoId", {index:33});


    //Click Create Lead button
    await page.click("[name='submitButton']");

    //Print the status
    let status = page.locator("#viewLead_statusId_sp");
    const value = await status.innerText();
    console.log(`The status of the lead is ${value}`);
       
})

