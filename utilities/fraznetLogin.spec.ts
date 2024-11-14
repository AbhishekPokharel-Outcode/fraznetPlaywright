import { test, expect } from '@playwright/test';

test('test_default_login', async ({ page }) => {
    await page.goto(process.env.APP_URL);
    await page.getByPlaceholder('Username').click();
    await page.getByPlaceholder('Username').fill(process.env.USERNAME);
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill(process.env.PASSWORD);
    await page.getByRole('button', { name: 'Sign In' }).click();
});