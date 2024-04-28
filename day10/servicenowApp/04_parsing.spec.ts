import { chromium, expect, test } from "@playwright/test";

test('Parsing text to json', async({request})=>{
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


//Parsing
const respBody = await response.text();
console.log(respBody);
const parsedJSON = JSON.parse(respBody);
console.log(parsedJSON);

//To get the status code
const apiStatusCode = response.status();
console.log(`The status code is ${apiStatusCode}`);

//Assertion
expect(apiStatusCode,'expecting api status code to be 201').toBe(201);

//To get the incident number
const inc_num = parsedJSON.result.number;
console.log(`Incident number is ${inc_num}`);

//To get the sys_id
const sys_id = parsedJSON.result.sys_id;
console.log(`The sys id is ${sys_id}`);

const endTime = performance.now();
const respTime = endTime - startTime;
console.log(`Response time is ${respTime}`);
//Assertion
expect(respTime).toBeLessThan(2000);


})
