import { expect, test } from "@playwright/test";
import { getAccessToken } from "./authHelper";

let bearerToken:any;
let instanceUrl: any;
let id: any;
test(`Use access token from the auth function`, async() =>{

    const authData = await getAccessToken();
    bearerToken = authData.accessToken;
    instanceUrl = authData.instUrl;
    
})

test(`Test to create a new opportunity`, async({request}) =>{
    const oppUrl = `${instanceUrl}/services/data/v58.0/sobjects/Opportunity`
   const opportunity = await request.post(oppUrl, {
        headers:{
            "Authorization": `Bearer ${bearerToken}`,
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
    const update_opp_url = `${instanceUrl}/services/data/v58.0/sobjects/Opportunity/${id}`
   const upd_opportunity = await request.patch(update_opp_url, {
        headers:{
            "Authorization": `Bearer ${bearerToken}`,
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
    const get_opp_url = `${instanceUrl}/services/data/v58.0/sobjects/Opportunity/${id}`
   const get_opportunity = await request.get(get_opp_url, {
        headers:{
            "Authorization": `Bearer ${bearerToken}`,
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