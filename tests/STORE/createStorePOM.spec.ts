import {test} from '@playwright/test';
import {CreateStorePage} from "../../page-objects/STORE/CreateStore";

test('test create store from contract', async ({page}) => {
    const createStorePage = new CreateStorePage(page);

    await createStorePage.navigateToContractsPage();
    await createStorePage.clickCreateStore();
    await createStorePage.clickCreateStore(); // Appears twice in original script
    await createStorePage.selectStore('Store name Fraznet');
    await createStorePage.selectChain('ARAMARK');
    await createStorePage.resolveStore();
    await createStorePage.createStore('123446', '2');
});
