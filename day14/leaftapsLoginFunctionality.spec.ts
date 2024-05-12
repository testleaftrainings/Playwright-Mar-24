import test from '@playwright/test'
import { LTHomePage } from './homePage'


test("Login to leaftaps",async({page})=>{
  const hp=new LTHomePage(page)
  await hp.loadUrl();
  await hp.enterUserName('demoSalesManager');
  await hp.enterPassword('crmsfa')
  await hp.clickLogin();
  await hp.clickCrm();
})