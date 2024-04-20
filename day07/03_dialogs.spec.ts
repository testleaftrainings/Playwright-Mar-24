import { expect, test} from "@playwright/test";

test(`Handling dialogs - auto dismiss`, async({page})=>{

    await page.goto("https://leafground.com/alert.xhtml");
   //Simple dialog
    await page.locator("text=Show").first().click();
    
    //Confirmation Dialog
    await page.locator(".card").filter({hasText:" Alert (Confirm Dialog)"}).locator("//span[text()='Show']").click();
   
    //Prompt Dialog
    const cardLocator = page.locator(".card").filter({hasText:" Alert (Prompt Dialog)"});
    await cardLocator.locator("button").filter({hasText:"Show"}).click()
    
});

test.only(`Interact with dialogs`, async({page})=>{

    await page.goto("https://leafground.com/alert.xhtml");

    page.on('dialog', async dialog =>{
        const message = dialog.message();
        console.log(`The message says ${message}`);
        const type = dialog.type();
        console.log(`The type of the alert is ${type}`);
        await dialog.accept();
        //await dialog.accept("Ranjini");
 
     })
    /*page.on('dialog', async dialog =>{
       const message = dialog.message();
       console.log(`The message says ${message}`);
       const type = dialog.type();
       console.log(`The type of the alert is ${type}`);
        if(dialog.type()==='confirm'){
           await dialog.accept();
        }else if(dialog.type()==='prompt'){
            await dialog.dismiss();
        }else
        await dialog.accept();

    })*/
   //Simple dialog
    await page.locator("text=Show").first().click();
 
    //Confirmation Dialog
    await page.locator(".card").filter({hasText:" Alert (Confirm Dialog)"}).locator("//span[text()='Show']").click();
    
    //Prompt Dialog
    const cardLocator = page.locator(".card").filter({hasText:" Alert (Prompt Dialog)"});
    await cardLocator.locator("button").filter({hasText:"Show"}).click()
   
    //To turn off your event listener - page.off() or page.removeListener
   
});

test(`Interact with a particular dialog`, async({page})=>{

    await page.goto("https://leafground.com/alert.xhtml");
   
   //Simple dialog
    await page.locator("text=Show").first().click();
    
    //Confirmation Dialog
    await page.locator(".card").filter({hasText:" Alert (Confirm Dialog)"}).locator("//span[text()='Show']").click();
   
    page.once('dialog', async dialog =>{
        const message = dialog.message();
        console.log(`The message says ${message}`);
        const type = dialog.type();
        console.log(`The type of the alert is ${type}`);
        await dialog.accept("Ranjini");
 
     }) 
    //Prompt Dialog
    const cardLocator = page.locator(".card").filter({hasText:" Alert (Prompt Dialog)"});
    await cardLocator.locator("button").filter({hasText:"Show"}).click()
    
   
});