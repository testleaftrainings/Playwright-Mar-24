/**
 * 1. setInputFiles - no user action
 * 2. waitForEvent('fileChooser') - user action
 * 
 * 
 */

import { expect, test} from "@playwright/test";
import path from "path";

test(`Upload file using setInputFile`, async({page})=>{

    await page.goto("https://leafground.com/file.xhtml");

    const card =  page.locator(".card").filter({has:page.getByText("Basic Upload")});
    card.locator("input[type='file']").setInputFiles([path.join(__dirname,'01_Login_Salesforce.pdf')]);
                           //page.locator("").setInputFiles(['path/file1.img','path/file2.mp4'])
  
     await expect(card.locator(".ui-fileupload-filename")).toContainText("01_Login_Salesforce.pdf")                  
     await page.waitForTimeout(3000); 
    })

    test.only(`Upload file using waitForEvent`, async({page})=>{

        await page.goto("https://the-internet.herokuapp.com/upload");
        //Creating a promise
        const fileChooserPromise = page.waitForEvent("filechooser");
        await page.click("#drag-drop-upload");
        //Promise is getting resolved
        const fileChooser = await fileChooserPromise;
        await fileChooser.setFiles([path.join(__dirname,'01_Login_Salesforce.pdf')]);

        //Assertion
        await expect(page.locator("#drag-drop-upload")).toHaveClass("dz-success-mark dz-clickable dz-started");
        
        })

    