import { Locator, Page } from "playwright/test";

export class LTLoginPage{


//enter username
//enter pwd
//click login
page:Page;
usernamefield:Locator
passwordfield:Locator
loginButton:Locator
url:string

constructor(page:Page){
this.page=page;
this.usernamefield=this.page.locator("#username")
this.passwordfield=this.page.locator("#password")
this.loginButton=this.page.locator(".decorativeSubmit")
this.url='http://www.leaftaps.com/opentaps'
}

async loadUrl(){
    await this.page.goto(this.url)

}
async enterUserName(uname:string){
    await this.usernamefield.fill(uname)

}
async enterPassword(pwd:string){
  await this.passwordfield.fill(pwd)
}


async clickLogin(){
  await this.loginButton.click();
}


}