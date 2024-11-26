import {test} from '@playwright/test';
import {CreateStorePage} from "../../page-objects/STORE/CreateStore";


test('Auth', async ({page}) => {
    // page is authenticated
});
test('create a store from contract', async ({page}) => {
    const createStorePage = new CreateStorePage(page);

    await createStorePage.navigateToContractsPage();
    await createStorePage.clickCreateStore();
    await createStorePage.selectStore('Store name Fraznet1');
    await createStorePage.selectChain('ARAMARK');
    await createStorePage.resolveStore();
    await createStorePage.createStore('123446', '2');
});
