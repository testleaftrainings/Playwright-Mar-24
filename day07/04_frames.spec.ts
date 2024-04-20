import { expect, test} from "@playwright/test";

test(`Handling frames`, async({page})=>{

    await page.goto("https://leafground.com/frame.xhtml");
    //To print the frames
    console.log(page.frames());
    //To get the count of frames
    const frameCount = page.frames().length;
    console.log(`The total frame count is ${frameCount}`);
    //To get the title of the frames present
    const allFrames = page.frames();
    for (let frame of allFrames){

        const title = await frame.title();
        console.log(`The title of the frames is ${title}`);

    }  
    

});

test.only(`Handling frames using oneindia app`, async({page})=>{

    await page.goto("https://www.oneindia.com/");
    //To print the frames
   // console.log(page.frames());
    //To get the count of frames
    const frameCount = page.frames().length;
    console.log(`The total frame count is ${frameCount}`);
    //To get the title of the frames present
   
    const allFrames = page.frames();
    
    for (let frame of allFrames){
        const title = await frame.title();
        console.log(`The title of the frames is ${title}`);

    }  
    

});