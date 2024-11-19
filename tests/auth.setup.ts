import { test as setup, expect } from '@playwright/test';
import * as path from 'path';
const authFile = path.join(__dirname, '../playwright/.auth/user.json');

setup('authenticate', async ({ page }) => {

    await page.goto(process.env.APP_URL);
    await page.getByPlaceholder('Username').click();
    await page.getByPlaceholder('Username').fill(process.env.USERNAME);
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill(process.env.PASSWORD);
    await page.getByRole('button', { name: 'Sign In' }).click();

    await page.context().storageState({ path: authFile });
});