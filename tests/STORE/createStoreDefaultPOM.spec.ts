// store.spec.ts
import { test } from '@playwright/test';
// import { StorePage } from './storePage';
import {StorePage} from "../../page-objects/STORE/storePage";

test('Add a new store', async ({ page }) => {
    const storePage = new StorePage(page);

    await storePage.navigateToAddStore();
    await storePage.fillStoreDetails();
});
