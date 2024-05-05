import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('about:blank');
  await page.goto('http://www.leaftaps.com/opentaps/control/main');
  await page.getByLabel('Username').click();
  await page.getByLabel('Username').fill('demoCSR');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('crmsfa');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'CRM/SFA' }).click();
});