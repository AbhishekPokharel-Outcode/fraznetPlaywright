// store.spec.ts
import { test } from '@playwright/test';
// import { StorePage } from './storePage';
import {StorePage} from "../../page-objects/STORE/storePage";


test('Auth', async ({page}) => {
    // page is authenticated
});
test('Add/Create a new store default', async ({ page }) => {
    const storePage = new StorePage(page);

    await storePage.navigateToAddStore();
    await storePage.fillStoreDetails();
});
