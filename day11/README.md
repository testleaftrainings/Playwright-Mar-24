# Reading Data, Storage State & Playwright Test

## Reading Data from JSON, CSV, ENV in Playwright JS

### Overview
This guide outlines how to efficiently read data from various sources such as JSON, CSV, and environment variables in your test scripts.

### JSON
You can read data from a JSON file using Node.js `fs` module or any other preferred library. Here's an example:

```javascript
import fs from 'fs';
const jsonData = JSON.parse(fs.readFileSync('data.json', 'utf8'));
```

### CSV
To read data from a CSV file, you can utilize libraries like `csv-parser` combined with `fs`. Example:

```javascript
import fs from 'fs';
import path from 'path';
import {parse} from 'csv-parse/sync';

const loginData=parse(fs.readFileSync(path.join(__dirname,"testData.csv")),{
    columns:true,
    skip_empty_lines:true,
    skip_records_with_empty_values:true
    
})

for(const data of loginData){
    test(`Learn to read data from csv file for ${data.testId}`,async({page})=>{
    await page.goto("http://www.leaftaps.com/opentaps");
    await page.fill("#username",data.username);
    await page.fill("#password",data.password);
    await page.click(".decorativeSubmit");
})
```

### Environment Variables (ENV)
Accessing environment variables in  tests can be done using `process.env`. Example:

```javascript
const username = process.env.USERNAME;
const password = process.env.PASSWORD;
```


## Storage State Using `test.use()`

### Overview
Playwright provides the `test.use()` function to manage browser contexts and their state across tests. This is particularly useful for scenarios where you want to maintain certain states, such as logged-in sessions, across multiple tests.

### Example
```javascript

test.use({ storageState: 'state.json' });

test('Logged-In User Test', async ({ page }) => {
  // Your test code here
});

test('Another Test', async ({ page }) => {
  // Your test code here
});
```

### Note
Ensure to use the correct path to your storage state file.

---

## Test Functions

### Overview
The Playwright `test` class provides a robust framework for writing and organizing your automated tests. It offers a variety of methods to define test behavior, manage test execution, and utilize hooks for setting up and tearing down conditions.

### Key Features
- **Basic Test Declaration**: Define tests using `test('name', async ({ page }) => {...})`.
- **Test Modifiers**: Enhance tests with tags and annotations to categorize and provide additional information, such as linking to issues.
- **Hooks**: Utilize `beforeEach`, `afterEach`, `beforeAll`, and `afterAll` to set up preconditions and clean up after your tests.
- **Grouping Tests**: Use `test.describe` to group tests logically. This structure supports nested groups for detailed organization.
- **Execution Control**: Control test execution through methods like `test.only`, `test.skip`, and `test.fail`, to focus on specific tests or exclude them under certain conditions.
- **Configuration**: Configure test execution environment using `test.describe.configure`, allowing adjustments like parallel or serial execution.
