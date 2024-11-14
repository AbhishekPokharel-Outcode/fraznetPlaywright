import { test, expect } from '@playwright/test';
import { Loginpage } from '../page-objects/LoginPage';

test('Login POM', async ({ page }) => {
    const LoginPage = new Loginpage(page);
    await LoginPage.gotoUrl();
    // await LoginPage.=gotoUrl();
    await LoginPage. login( process.env.USERNAME, process.env.PASSWORD);
    // await page.context().storageState({ "./loginAuth.json"});

    // await page. context () storageState ({ path: "./LoginAuth.json" });

    // expect (await page. locator('[text ="Logged In??"] ')).toBeTruthy ();
});