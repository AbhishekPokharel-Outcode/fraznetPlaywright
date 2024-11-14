import { test, expect } from '@playwright/test';

test.use({
    viewport: {
        height: 1080,
        width: 1920
    }
});
test('test for random dropdown value + logout', async ({ page }) => {
    await page.goto('https://qa.fraznet.com/sign-in/');
    await page.getByPlaceholder('Username').fill('qa@frazil.com');
    await page.getByPlaceholder('Password').fill('Fr@zilQA1');
    await page.getByRole('button', { name: 'Sign In' }).click();

//     await page.waitForSelector('div.row.content-header-section', { state: 'visible' });
//     await page.click('#select_dashboard');
//
//     const options = await page.$$eval('#select_dashboard option', spans => spans.map(span => span.textContent.trim()));
//     const randomOption = options[Math.floor(Math.random() * options.length)];
//     await page.selectOption('#select_dashboard', { label: randomOption });
//     console.log(`Selected option: ${randomOption}`);
//     await page.waitForTimeout(9000);
//
//     await page.getByRole('link', { name: 'QA TESTER' }).click();
//     await page.getByRole('button', { name: 'Sign Out' }).click();
//
// });
//
// test('test for random dynamic dropdown value + logout', async ({ page }) => {
//     await page.goto('https://qa.fraznet.com/sign-in/');
//     await page.getByPlaceholder('Username').fill('qa@frazil.com');
//     await page.getByPlaceholder('Password').fill('Fr@zilQA1');
//     await page.getByRole('button', { name: 'Sign In' }).click();
//
//
//
//     await page.getByTitle('FRAZIL GLOBAL COMPARISON\n                    ').click();
//     await page.locator('.select2-search').click();
//     await page.getByRole('textbox').nth(1).fill('ran', { delay: 10000} );
//     await page.getByRole('treeitem', { name: 'GRAND TETON LODGE CO.' }).click();
//     // const departFrom = page.locator('#select2-filter_by_dist_retailer-result-h0b3-0');
//     // // await departFrom.fill('2K', { delay: 1000 });
    // //
    // await page.locator('#select2-filter_by_dist_retailer-results')
    //         .getByRole('listitem')
    //         .filter({ hasText: '2K EXPRESS' })
    //         .click();
    // await page.locator('.select2-search').click();

    await page.waitForSelector('body > div.main-panel > div > div.row.content-header-section > div > div > div:nth-child(1) > div.col-md-6', { state: 'visible' });
    await page.click('#select2-filter_by_dist_retailer-container');

    const options = await page.$$eval('#select2-filter_by_dist_retailer-results', spans => spans.map(span => span.textContent.trim()));
    const randomOption = options[Math.floor(Math.random() * options.length)];
    await page.selectOption('#select_dashboard', { label: randomOption });
    console.log(`Selected option: ${randomOption}`);
    await page.waitForTimeout(9000);

    await page.getByRole('link', { name: 'QA TESTER' }).click();
    await page.getByRole('button', { name: 'Sign Out' }).click();



});



//
// test('test', async ({ page }) => {
//
//
//     // await page.goto('https://dev3.fraznet.com/');
//     await page.goto('https://qa.fraznet.com/sign-in/');
//     await page.getByPlaceholder('Username').click();
//     await page.getByPlaceholder('Username').fill('qa@frazil.com');
//     await page.getByPlaceholder('Username').press('Enter');
//     await page.getByPlaceholder('Password').fill('Fr@zilQA1');
//     await page.getByRole('button', { name: 'Sign In' }).click();
//
//
//     await page.waitForTimeout(6000);
//
//     await page.waitForSelector('body > div.main-panel > div > div.row.content-header-section > div > div > div:nth-child(2) > div > div:nth-child(1) > div', {state:'visible'});
//     await page.click('#select_dashboard');
//     await page.waitForSelector('#select_dashboard', { state: 'visible' });
//     const options = await page.$$eval('#select_dashboard', spans => spans.map(span => span.textContent.trim()));
//     const randomOption = options[Math.floor(Math.random() * options.length)];
//     await page.click(`text=${randomOption}`);
//     console.log(`Selected option: ${randomOption}`);
//     return randomOption; // Save the randomly selected option
//
//
//     await page.waitForTimeout(3000);
//     await page.getByRole('link', { name: 'QA TESTER' }).click();
//     await page.getByRole('button', { name: 'Sign Out' }).click();
//     await page.waitForTimeout(3000);
//
// });