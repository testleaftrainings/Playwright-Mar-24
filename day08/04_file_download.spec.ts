import { expect, test} from "@playwright/test";
import path from "path";
test.only(`Download file using waitForEvent`, async({page})=>{

    await page.goto("https://leafground.com/file.xhtml");
    //Creating a promise
    const filedownloadPromise = page.waitForEvent("download");
    await page.getByText("Download", {exact:true}).click();
    //Promise is getting resolved
    const download = await filedownloadPromise;
    await download.saveAs(path.join("downloads/"+download.suggestedFilename()));

    console.log(`The url is ${download.url()}`);

   
    })