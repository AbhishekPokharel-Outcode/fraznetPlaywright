import { test, expect } from '@playwright/test';

test.use({
    viewport: {
        height: 1080,
        width: 1920
    }
});
test('logout', async ({ page }) => {


    // await page.waitForSelector('body > div.main-panel > div > div.row.content-header-section > div > div > div:nth-child(1) > div.col-md-6', { state: 'visible' });
    // await page.click('#select2-filter_by_dist_retailer-container');
    //
    // const options = await page.$$eval('#select2-filter_by_dist_retailer-results', spans => spans.map(span => span.textContent.trim()));
    // const randomOption = options[Math.floor(Math.random() * options.length)];
    // await page.selectOption('#select_dashboard', { label: randomOption });
    // console.log(`Selected option: ${randomOption}`);
    // await page.waitForTimeout(9000);

    await page.getByRole('link', { name: 'QA TESTER' }).click();
    await page.getByRole('button', { name: 'Sign Out' }).click();



});


