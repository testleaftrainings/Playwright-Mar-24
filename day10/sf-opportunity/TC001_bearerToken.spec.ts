import { expect, test } from "@playwright/test";

let accessToken:any;
let instUrl: any;
let id: any;
test(`To generate the access token`, async({request}) =>{

    const clientID = "3MVG9pRzvMkjMb6lZlt3YjDQwe2bBFgxaGg1AafnOCe8TDUlUrknHd9L3duwgwKjSNXq6jPDhOof7G.woO5OW";
    const clientSecret = "934248279368ADBBA1A68B31CFFE0C2EF697F483C8BA1A4BC0DF5F733A71E6B3";
    const grant_type = "password";
    const username = "ranjini.r@testleaf.com";
    const password = "Testleaf$4321";
    const url = "https://login.salesforce.com/services/oauth2/token";

    const generatingToken = await request.post(url,{
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
    //Access Token
    accessToken = generatingTokenJSON.access_token;
    console.log(`Access Token generated: ${accessToken}`);
    //Instance url
    instUrl = generatingTokenJSON.instance_url;
    console.log(`Instance url is: ${instUrl}`);
    
    
})

test(`Test to create a new opportunity`, async({request}) =>{
    const oppUrl = `${instUrl}/services/data/v58.0/sobjects/Opportunity`
   const opportunity = await request.post(oppUrl, {
        headers:{
            "Authorization": `Bearer ${accessToken}`,
            "Content-Type": "application/json"
        },
        data:{
            "name" : "Created from Playwright",
            "stageName" : "Value Proposition",
            "closeDate" : "2024-05-31",

        }
    })
    const opp_response = await opportunity.json();
    console.log(opp_response);

    //To get the opportunity id
    id = opp_response.id;
    console.log(`Opporunty id is; ${id}`);
    
    
})

test(`Test to update the opportunity`, async({request}) =>{
    const update_opp_url = `${instUrl}/services/data/v58.0/sobjects/Opportunity/${id}`
   const upd_opportunity = await request.patch(update_opp_url, {
        headers:{
            "Authorization": `Bearer ${accessToken}`,
            "Content-Type": "application/json"
        },
        data:{
            "amount" : "75000",
            "type"  : "New Customer"
        }
    })
    

    //Status code
    const statusCode = upd_opportunity.status();
    console.log(`Status code is ${statusCode}`);
    expect(statusCode).toBe(204);
    

    
})
test(`Test to retrieve the updated opportunity`, async({request}) =>{
    const get_opp_url = `${instUrl}/services/data/v58.0/sobjects/Opportunity/${id}`
   const get_opportunity = await request.get(get_opp_url, {
        headers:{
            "Authorization": `Bearer ${accessToken}`,
            "Content-Type": "application/json"
        }
    })
    //Response Body
    const response = await get_opportunity.json();
    console.log(response);
    

    //Status code
    const statusCode = get_opportunity.status();
    console.log(`Status code is ${statusCode}`);
    expect(statusCode).toBe(200);
    

    
})