import { Locator, Page } from "playwright/test";
import { LTLoginPage } from "./loginPage";

export class LTHomePage extends LTLoginPage{

    crmlink:Locator
    constructor(page:Page){
        super(page);
        this.crmlink=this.page.getByText("CRM/SFA");
    }
    async clickCrm(){
        await this.crmlink.click();
    }
    
}