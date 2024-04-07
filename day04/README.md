# Week 2 Day 2 [Sunday]

*Agenda: Dig Deeper into Playwright*

    - CSS & Playwright Selectors
    - Understanding Fixtures
    - Playwright config file walkthrough
    - Assertions using expect library

## Table of Contents

- [CSS Selectors](#css-selectors)
- [Playwright Locator Strategies](#playwright-locator-strategies)
- [Fixtures](#fixtures)
  - [What is a Fixture?](#what-is-a-fixture)
  - [The Page Fixture](#the-page-fixture)
- [Assertions](#assertions)
  - [Auto-Retrying Assertions](#auto-retrying-assertions)
  - [Non-Retrying Assertions](#non-retrying-assertions)
  - [Negating Matches](#negating-matches)
  - [Soft Assertions](#soft-assertions)
  - [Hard Assertions](#hard-assertions)
- [Playwright Config File](#playwright-config-file)

## CSS Selectors

- *Universal Selector (`*`)*: Selects all elements within a page. 
  
- *Class Selector (`.className`)*: Selects all elements with a specific class. 
  
- *ID Selector (`#idName`)*: Selects a single element with a specific ID. 

### Combinators

- *Descendant Selector (`space`)*: Selects all elements that are descendants of a specified element.
 
- *Child Selector (`>`)*: Selects all elements that are direct children of a specified element.
  
- *Adjacent Sibling Selector (`+`)*: Selects all elements that are immediately preceded by a specific element.
 
- *General Sibling Selector (`~`)*: Selects all elements that are siblings of a specific element.
 
### Attribute Selectors

- *Presence and Value Attribute Selectors*: 
  - `[attribute]`: Selects elements with a specific attribute.
    - Example: `a[target]` targets all `<a>` elements with a "target" attribute.
  - `[attribute="value"]`: Selects elements with a specific attribute and value.
    - Example: `input[type="text"]` targets all `<input>` elements with a type of "text".
  
- *Substring Value Attribute Selector*:
  - `[attribute*="value"]`: Selects elements with an attribute value containing a specified substring.
    - Example: `a[href*="example"]` targets all `<a>` elements whose href attribute contains "example".

## Playwright Locator Strategies

    - page.getByRole() - to locate by explicit and implicit accessibility attributes.
    - page.getByText() - to locate by text content.
    - page.getByLabel() - to locate a form control by associated label's text.
    - page.getByPlaceholder() - to locate an input by placeholder.
    - page.getByAltText() - to locate an element, usually image, by its text alternative.
    - page.getByTitle() - to locate an element by its title attribute.
    - page.getByTestId() to locate an element based on its data-testid attribute

## Fixtures

Fixtures in Playwright provide a powerful way to setup and tear down resources needed for your tests, helping you manage common objects like browser instances, pages, and custom configurations in a reusable manner.

### What is a Fixture?

A fixture is essentially a piece of code that can run before and after each test, or a suite of tests, to set up the environment in which the tests will run. This can include creating a new browser instance, a new page, logging into an application.

### The Page Fixture

One of the most commonly used fixtures in Playwright tests is the `page` fixture. It provides a fresh browser page for each test, ensuring test isolation and reducing the likelihood of side effects between tests.

#### Usage

When using Playwright Test, the `page` fixture is automatically available in each test, and you do not need to explicitly declare it. Here’s how you can use it:


import { test, expect } from '@playwright/test';

test("Learning fixtures", async ({page}) =>{

    await page.goto("https://login.salesforce.com/");
    await page.fill("#username", "ranjini.r@testleaf.com");
    await page.fill("#password", "Testleaf$4321");
    await page.click("#Login");

});

## Assertions

Playwright's assertion library is designed to work seamlessly with its locators, supporting both auto-retrying and non-retrying assertions.

### Auto-Retrying Assertions

These assertions automatically retry until a certain condition is met or a timeout is reached. Ideal for dynamic content or elements that may take time to appear:

- `expect(locator).toHaveText('text', { timeout: 3000 })`
- `expect(locator).toBeVisible()`
- `expect(locator).toHaveCount(3)`

### Non-Retrying Assertions

Non-retrying assertions are those that execute and evaluate conditions at a point in time without any retries:

- `expect(await locator.textContent()).toBe('static text')`

### Negating Matches

To negate any matcher, prepend `not` before the assertion:

- `expect(locator).not.toHaveText('forbidden text')`
- `expect(locator).not.toBeVisible()`

### Soft Assertions

Soft assertions allow tests to continue after a failed assertion, collecting and reporting all failures at the end of the test.

### Hard Assertions

Hard assertions are the default behavior in Playwright, where a failed assertion immediately stops the test execution.

## Playwright Config File

import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  timeout: 120 * 1000,
  //Assertion timeout
  expect:{
    timeout: 15000
  },
  //Test folder
  testDir: './tests',
  //Execute the test in parallel mode
  fullyParallel: true,
  //No. of times to retry the failed test 
  retries: 1,
  //No.of workers to opt parallel tests
  workers: 2,
  //Reporter
  reporter: 'html',

  use: {
    //Enable trace for all test execution 
    trace: 'on',
    //Run the test in headed mode
    headless: false,
    //Enable video for all test execution
    video: 'on',
    //Enable screenshot for all test execution
    screenshot:'on'
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
      //Run the test that matches 03_login.spec.ts
      testMatch: "03_login.spec.ts"
    },
  ],
});

















