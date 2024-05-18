import axios from "axios"
const url = "https://vidya-bharathi.atlassian.net/rest/api/2/issue/"
const userName = "vidyar1926@gmail.com"
const apiKey = "ATATT3xFfGF01i1ifaNLKntCMcBeLQoHim_GTEEc3oI5r2ewFXoSJxkPqy--3BoMGwoL-SEwE_K49loJ5k8Tmsq2fLt1pw2jyCAV8KAsCHR-UaJlmXrmbRY4ARRMZB8reRvx1gGGVbcmBpwI7XjZ2LroSUGvk8c00EQ_1eUGtf6WnrYxqkuYQbg=0E2F83EA"
const projectKey = "JIRA"

async function createIssue(summary: string, description: string) {
    const issueBody = {
        "fields": {
            "project": {
                "key": "JIRA"
            },
            "summary": "Creating issue through api",
            "description": "Landing in homePage",
            "issuetype": {
                "name": "Bug"
            }
        }
    }


 const res=await axios.post(url,issueBody,{
    auth:{
        username:userName,
        password:apiKey
    },
    headers:{
        "Content-Type":"application/json"
    }
      })

      console.log("Issue is created through playwright")
    }

    export {createIssue}
