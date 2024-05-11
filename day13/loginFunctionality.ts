import { chromium, Page } from "playwright"
import { GenerateData } from "./learnStatic"

class Leaftaps{

 readonly lppage:Page
 username:string
 password:string

 
 //launch url
 //fill -->usrname and password
 //click -->login

constructor(page:Page){
    this.lppage=page
    
}
 async navigate(){
   await this.lppage.goto("http://www.leaftaps.com/opentaps")
 }
async fillUsername(uname:string){
    await this.lppage.locator("#username").fill(uname)
}
async fillPassword(pwd:string){
    await this.lppage.locator("#password").fill(pwd)
}
async clickLogin(){
    await this.lppage.click('.decorativeSubmit')
}
}

async function doLogin(){
     const browser=await chromium.launch({headless:false})
     const context=await browser.newContext();
     const bpage=await context.newPage(); 
     const loginPage=new Leaftaps(bpage);
     loginPage.navigate();
     loginPage.fillUsername("demoSalesManager");
     loginPage.fillPassword("crmsfa");
     loginPage.clickLogin();
    //const testData= new GenerateData()
     const companyName=GenerateData.getData();
}
doLogin();