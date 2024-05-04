import {test} from '@playwright/test'

    test.use({storageState:"creds/loginDetails.json"}
        
    )
    test(`Executing the sf with storageState`,async({page})=>{
    await page.goto("/home");

})