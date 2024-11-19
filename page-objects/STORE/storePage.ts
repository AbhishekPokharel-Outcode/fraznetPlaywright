// storePage.ts
import { Page } from '@playwright/test';

export class StorePage {
    readonly page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigateToAddStore() {
        await this.page.getByRole('link', { name: ' Stores' }).click();
        await this.page.getByRole('link', { name: 'Add store' }).click();
        await this.page.goto('https://dev3.fraznet.com/stores/new');
    }

    async fillStoreDetails() {
        await this.page.getByRole('textbox', { name: 'Name' }).fill('Test store');
        await this.page.locator('#select2-id_store-distributor-container').click();
        await this.page.locator('input[type="search"]').fill('di');
        await this.page.getByRole('treeitem', { name: 'CAPITOL DISTRIBUTING' }).click();
        await this.page.getByText('Chain Select a chain 4').click();
        await this.page.locator('input[type="search"]').fill('ra');
        await this.page.getByRole('treeitem', { name: 'FOLLETT CORPORATION' }).click();
        await this.page.getByPlaceholder('Street').fill('Random');
        await this.page.getByPlaceholder('City').fill('utah');
        await this.page.getByPlaceholder('State').fill('UT');
        await this.page.getByPlaceholder('Zip').fill('984561');
        await this.page.getByPlaceholder('External Store ID').fill('10213444');
        await this.page.locator('#id_store-vr_score').selectOption('2');
        await this.page.locator('#id_store-acc_type').selectOption('BUNDLE');
        await this.page.locator('#id_contract_url').setInputFiles('/Users/gld/Downloads/Contract Upload Breeze Thru #30007.xlsx');
        await this.page.locator('#alertModal').click();
        await this.page.locator('#id_contract_url').setInputFiles('/Users/gld/Downloads/Circle K 2658275 - Exhibit A.pdf');
    }
}
