import {test} from '@playwright/test'
import fs from 'fs';
import path from 'path';
import {parse} from 'csv-parse/sync';

const loginData=parse(fs.readFileSync(path.join(__dirname,"testData.csv")),{
    columns:true,
    skip_empty_lines:true,
    skip_records_with_empty_values:true
    
})
//../day11/credentials.json

for(const data of loginData){
    test(`Learn to read data from csv file for ${data.testId}`,async({page})=>{
    await page.goto("http://www.leaftaps.com/opentaps");
    await page.fill("#username",data.username);
    await page.fill("#password",data.password);
    await page.click(".decorativeSubmit");
})

}
const csData=parse(fs.readFileSync(path.join(__dirname,"testData.csv")),{
    skip_empty_lines:true,
    skip_records_with_empty_values:true
    
})

async function writeCSV(filePath: string, data: any[]) {
    const csvData = data.map(row => Object.values(row).join(',')).join('\n');
    fs.writeFile(filePath, csvData, (err) => {
        if (err) {
            console.error('Error writing to CSV file:', err);
        } else {
            console.log('Data has been written to CSV file successfully.');
        }
    });
}
writeCSV('output.csv', csData);


    test(`Learn to read data from csv file for a single.value ${loginData[1].testId}`,async({page})=>{
    await page.goto("http://www.leaftaps.com/opentaps");
    await page.fill("#username",loginData[1].username);
    await page.fill("#password",loginData[1].password);
    await page.click(".decorativeSubmit");
})



