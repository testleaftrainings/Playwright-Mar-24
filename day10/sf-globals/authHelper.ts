import { chromium } from "@playwright/test";

async function getAccessToken(){
    const browser = await chromium.launch();
    const browserContext = await browser.newContext();
    const apiRequestContext = browserContext.request;

    const clientID = "3MVG9pRzvMkjMb6lZlt3YjDQwe2bBFgxaGg1AafnOCe8TDUlUrknHd9L3duwgwKjSNXq6jPDhOof7G.woO5OW";
    const clientSecret = "934248279368ADBBA1A68B31CFFE0C2EF697F483C8BA1A4BC0DF5F733A71E6B3";
    const grant_type = "password";
    const username = "ranjini.r@testleaf.com";
    const password = "Testleaf$4321";
    const url = "https://login.salesforce.com/services/oauth2/token";

    const generatingToken = await apiRequestContext.post(url,{
        headers:{
            "Content-Type": "application/x-www-form-urlencoded",
            "Connection": "keep-alive"
        
        },
        form:{
            "grant_type": grant_type,
            "client_id": clientID,
            "client_secret": clientSecret,
            "username": username,
            "password": password
        }
    })

    const generatingTokenJSON = await generatingToken.json();
    //console.log(generatingTokenJSON);
    return{
        accessToken: generatingTokenJSON.access_token,
        instUrl: generatingTokenJSON.instance_url
    }
   
}
export {getAccessToken}