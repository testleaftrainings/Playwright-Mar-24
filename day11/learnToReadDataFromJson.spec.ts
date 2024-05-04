import {test} from '@playwright/test'
import testData from '../day11/credentials.json'

for(const data of testData ){
    test(`Learnto read data from json file for ${data.testId}`,async({page})=>{
    await page.goto("http://www.leaftaps.com/opentaps");
    await page.fill("#username",data.username);
    await page.fill("#password",data.password);
    await page.click(".decorativeSubmit");

})



}