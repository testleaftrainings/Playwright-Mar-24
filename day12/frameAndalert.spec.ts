import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm');
  await page.frameLocator('iframe[name="iframeResult"]').getByText('JavaScript Confirm Box Try it').click();
  await page.frameLocator('iframe[name="iframeResult"]').getByText('You pressed OK!').click();
});