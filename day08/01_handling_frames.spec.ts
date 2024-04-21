/**
 * To select frames,
 * 1. The name or id
 * 2. Url
 * 3. index
 * Frame - class
 * frame
 * frameLocator
 * frames
 * mainFrame#document (https://leafground.com/default.xhtml)
 * 
 */

import { expect, test} from "@playwright/test";

test(`Handling frames using frame object`, async({page})=>{

    await page.goto("https://leafground.com/frame.xhtml");
   
    //Interact with iframes using url
    const frame = page.frame({url:"https://leafground.com/default.xhtml"});
    
    //Optional Chaining
    await frame?.click("button#Click") //returns the frame if the frame is present or null 
                                // if there is no such frame

    //Conditional Check
    /*if(frame!==null){
     //   select
     //    click the button
    }
    //Non-null Assertion operator
    frame!.click("")*/
    
    const allFrames = page.frames();
    const count = allFrames.length;
    console.log(`The total count is ${count}`);
    
    //Using index
    await allFrames[4].click('button#Click');
    

});

test.only(`Handling frames using frameLocator object`, async({page})=>{

    await page.goto("https://leafground.com/frame.xhtml");
    //Interact with frame using frameLocator
    const frame = page.frameLocator('iframe').first();
    await frame.locator("#Click").click();
    
    //Interact with nested frames
    const card = page.locator(".card").filter({hasText:' Click Me (Inside Nested frame)'});
    const frame_one = card.frameLocator("iframe");
    const frame_two = frame_one.frameLocator("iframe");
    await frame_two.locator("#Click").click()

    // await page.locator(".card").filter({hasText:' Click Me (Inside Nested frame)'})
    // .frameLocator("iframe").frameLocator("iframe").locator("#Click)").click()
    
});

