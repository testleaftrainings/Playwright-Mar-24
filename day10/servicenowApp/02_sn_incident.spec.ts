import { chromium, expect, test } from "@playwright/test";

test.skip('Test to create a new incident', async({request})=>{

   //Without using fixtures
//    const browser = await chromium.launch();
//    const browserContext = await browser.newContext();
//    const apiRequestContext = browserContext.request;
   
//    const page = await browserContext.newPage();
//    const apiPageRequest = page.request;
  
//To create a new incident
const response = await request.post("https://dev201976.service-now.com/api/now/table/incident",
    {
        headers:{
            "Content-Type":"application/json",
            "Authorization": "Basic YWRtaW46cWNYWjlVLyV6cTVE"
        },

        data:{
            "short_description": "Created via Playwright"
        }
    });


//To get the json response
const respBody = await response.json();
console.log(respBody);

//To get the status code
const apiStatusCode = response.status();
console.log(`The status code is ${apiStatusCode}`);
//Assertion
expect(apiStatusCode,'expecting api status code to be 201').toBe(201);

//To get the incident number
const inc_num = respBody.result.number;
console.log(`Incident number is ${inc_num}`);

//To get the sys_id
const sys_id = respBody.result.sys_id;
console.log(`The sys id is ${sys_id}`);





})
test.skip('Test to get a specific', async({request})=>{

//To get a specific incident details
const getResponse = await request.get("https://dev201976.service-now.com/api/now/table/incident/ea9c14d293fd8210da8a322efaba1088  ",
    {
        headers:{
            "Content-Type":"application/json",
            "Authorization": "Basic YWRtaW46cWNYWjlVLyV6cTVE"
        }
    });


//To get the json response
const respBody = await getResponse.json();
console.log(respBody);

//To get the incident number
const inc_num = respBody.result.number;
console.log(`Incident number is ${inc_num}`);


//To get the status code
const apiStatusCode = getResponse.status();
console.log(`The status code is ${apiStatusCode}`);
//Assertion
expect(apiStatusCode,'expecting api status code to be 200').toBe(200);


})

test('To delete the incident INC0010147', async({request})=>{

  const delRequest = await request.delete("https://dev201976.service-now.com/api/now/table/incident/ea9c14d293fd8210da8a322efaba1088",
        {
            headers:{
                "Content-Type":"application/json",
                "Authorization": "Basic YWRtaW46cWNYWjlVLyV6cTVE"
            }
        }
    )

    //To get the status code
const status = delRequest.status();
console.log(`The status code is ${status}`);

//To get the status text
const text = delRequest.statusText();
console.log(`Status text is ${text}`);

//Assertion
expect(status,'expecting api status code to be 204').toBe(204);
})