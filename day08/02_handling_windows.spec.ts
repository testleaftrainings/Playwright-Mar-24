import { expect, test} from "@playwright/test";

test(`Handling Windows`, async({context,page})=>{

    const page1 = await context.newPage()
    await page.goto("https://leafground.com/window.xhtml");
    await page1.goto("https://www.amazon.in/");

    //To get the count of all the opened pages inside the context
    const allPages = context.pages();
    console.log(allPages);
    console.log(`No.of opened pages: ${allPages.length}`);

    //To get the title of opened pages
    for (let pages of allPages ) {

       let title =  await pages.title();
       console.log(`The title of the page is ${title}`);
        
    }
    
    await allPages[0].bringToFront();
    await page.waitForTimeout(5000);
   
    
});

/**
 * Interact with multiple windows
 * 
 * 1. Sequential approach - one action after the other
 * Step 1: Create a promse in your code to tell that this will resolve into a new page
 *      const windowPromise = context.waitForEvent('page')
 * Step 2: Now perform the user action which is supposed to open a new window
 *      page.locator("").click();
 * 3. Now wait for the promise to get completed (for the promise you created in step 1)
 *      const window = await windowPromise;
 * 4. Switch to the new window for performing further actions
 *      window.bringToFront()
 * 2. Concurrent approach - simultaneous
 *      Promise.all[promise1, promise 2, promise 3] - resolved to a single promise
 *      resolved/rejected
 *      
 * 
 * Sequential - 1. wait for the event - new page
 *              2. user action - clicked Open
 *              3. a new page opened
 * 
 * Concurrent - Promise.all[ At the same time, you will wait for the event (new page) and 
 *              the user action (clicking the open button)] -> resolved into a single 
 *              promise
 */
test('Sequential approach', async({context,page})=>{

    await page.goto("https://leafground.com/window.xhtml");
    const windowPromise = context.waitForEvent('page');
    await page.getByText("Open",{exact:true}).click();
    const window = await windowPromise; //new page is opened
    expect(window).toHaveURL("https://leafground.com/dashboard.xhtml");
    console.log(`The url of the new page is ${window.url()}`);

    //Interact with the new window
    await window.fill("#email", "rr7@gmail.com");
    await window.close();

    //Interact with the main window
    await page.click("i[class='pi pi-home']");
   

})

test(`Test to interact with a window using Concurrent approach`, async({context,page})=>{

    await page.goto("https://leafground.com/window.xhtml");
    //Concurrent actions
    const [newWindow] = await Promise.all([
        context.waitForEvent('page'),
        page.getByText("Open",{exact:true}).click()
    ])

    console.log(`The url of the new window is ${newWindow.url()}`);
    //Interact with the new window
    await newWindow.fill("#email", "rr7@gmail.com");
    await newWindow.waitForTimeout(3000);
    await newWindow.close();



})
test.only(`Test to interact with multiple windows`, async({context,page})=>{

    await page.goto("https://leafground.com/window.xhtml");
    //Concurrent actions
    const [multiplePages] = await Promise.all([
        context.waitForEvent('page'),
        page.getByText("Open Multiple",{exact:true}).click()
    ])

    const pages = multiplePages.context().pages();
    console.log(`Count is ${pages.length}`);

    pages.forEach(async tabs => {
        const url = tabs.url();
        console.log(`The url is ${url}`);
        const title  =  await tabs.title();
        console.log(`The title of the page is ${title}`);
        
    });

    //Using index
    let webPage:any;
    for (let index = 0; index < pages.length; index++) {
       const pageTitle = await pages[index].title();
       if (pageTitle === 'Web Table'){
            webPage = pages[index];
       }

    }
    await webPage.bringToFront();
    await webPage.fill("input[placeholder='Search']", "Amy Elsner");
    


})

