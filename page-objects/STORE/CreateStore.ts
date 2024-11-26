import {Page} from '@playwright/test';

export class CreateStorePage {
    constructor(private page: Page) {
    }

    async navigateToContractsPage() {
        await this.page.goto('process.env.APP_URL');
    }

    async clickCreateStore() {
        await this.page.getByRole('link', {name: 'Create Store'}).first().click();
    }

    async selectStore(storeName: string) {
        await this.page.locator('#check-stores-modal div').filter({hasText: storeName}).nth(2).click();
    }

    async selectChain(chainName: string) {
        await this.page.locator('#select2-api_chain_select_40807-container').click();
        await this.page.locator('#check-stores-modal').getByRole('textbox').fill(chainName);
        await this.page.getByRole('treeitem', {name: chainName}).click();
    }

    async resolveStore() {
        await this.page.getByRole('button', {name: 'Resolve'}).click();
        await this.page.locator('#unresolved_store_state').getByRole('checkbox').check();
    }

    async createStore(externalStoreID: string, vrScore: string) {
        await this.page.getByRole('button', {name: 'Create'}).click();
        await this.page.getByPlaceholder('External Store ID').fill(externalStoreID);
        await this.page.locator('#id_store-vr_score').selectOption(vrScore);
        await this.page.getByRole('button', {name: 'Add New Store'}).click();
    }
}
