import test from '@playwright/test'
import dotenv from 'dotenv'
dotenv.config();

test(`Reading data from .env file`,async({page})=>{    
    await page.goto(process.env.QA_URL as string);
    await page.fill("#username",process.env.DEV_uname as string);
    await page.fill("#password",process.env.QA_pwd as string);
    await page.click(".decorativeSubmit");
})
