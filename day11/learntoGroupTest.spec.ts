import {test} from '@playwright/test'


test.beforeEach(`Leaftaps Application`,async({page})=>{
    await page.goto("http://www.leaftaps.com/opentaps");
    await page.fill("#username","DemoSalesManager");
    await page.fill("#password",'crmsfa');
    await page.click(".decorativeSubmit");

})

test.describe.configure({mode:'parallel'})

test.describe('smokeTestcases',async()=>{ 
test.describe.configure({mode:'serial',retries:2});

test('CreateLead',async({page})=>{
  await page.getByText('CRM/SFA').click();
  console.log("Lead is created successfully")
})
test('EditLead',async({page})=>{
    await page.getByText('CRM/SFA').click();
    await page.getByRole('link', { name: 'Leads' }).click();
    console.log("Updated the lead")
})

})

test.describe('RegTestcases',async()=>{ 
    test.describe.configure({mode:'default',retries:2});
    
    test('Createacc',async({page})=>{
      await page.getByText('CRM/SFA').click();
      console.log("Lead is created successfully")
    })
    test('EditAcc',async({page})=>{
        await page.getByText('CRM/SFA').click();
        await page.getByRole('link', { name: 'Leads' }).click();
        console.log("Updated the lead")
    })
    
    })