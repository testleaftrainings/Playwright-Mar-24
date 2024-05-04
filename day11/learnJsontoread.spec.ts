import {test} from '@playwright/test'
import fs from 'fs';
import path from 'path';

const testData=JSON.parse(fs.readFileSync(path.join(__dirname,"credentials.json"),'utf-8'))

//../day11/credentials.json

for(const data of testData ){
    test(`Learn to read data from json file for ${data.testId}`,async({page})=>{
    await page.goto("http://www.leaftaps.com/opentaps");
    await page.fill("#username",data.username);
    await page.fill("#password",data.password);
    await page.click(".decorativeSubmit");

})

}