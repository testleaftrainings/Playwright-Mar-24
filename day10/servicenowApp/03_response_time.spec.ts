import { chromium, expect, test } from "@playwright/test";

test('Test to calculate the response time', async({request})=>{
  const startTime = performance.now()

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

const endTime = performance.now();
const respTime = endTime - startTime;
console.log(`Response time is ${respTime}`);
//Assertion
expect(respTime).toBeLessThan(1500);


})
