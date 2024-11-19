// MachinePage.ts
import {Page} from '@playwright/test';

export class CreateMachine {
    constructor(private page: Page) {
    }

    async navigate() {
        await this.page.goto('https://qa.fraznet.com/machines/create');
    }

    async fillBunnSerialNumber(serial: string) {
        await this.page.getByPlaceholder('Bunn Serial Number').fill(serial);
    }

    async fillQRCodeNumber(qrCode: string) {
        await this.page.getByPlaceholder('QR Code Number').fill(qrCode);
    }

    async selectPurchaseDate() {
        await this.page.getByPlaceholder('Purchase Date').click();
        await this.page.getByRole('cell', {name: '2', exact: true}).first().click();
    }

    async fillPurchasePrice(price: string) {
        await this.page.getByPlaceholder('Purchase Price').fill(price);
    }

    async fillInvoiceNumber(invoice: string) {
        await this.page.getByPlaceholder('Invoice Number').fill(invoice);
    }

    async selectOwnership() {
        await this.page.getByText('×Select Ownership').click();
        await this.page.getByRole('treeitem', {name: 'BUNDLE FP OWNED'}).click();
    }

    async selectMachineType() {
        await this.page.getByText('×Select Machine Type').click();
        await this.page.getByRole('treeitem', {name: 'BUNN ULTRANX BLK'}).click();
    }

    async selectDateLastVerified() {
        await this.page.getByPlaceholder('Date Last Verified').click();
        await this.page.getByRole('cell', {name: '10'}).click();
    }

    async selectMachineStatus() {
        await this.page.getByText('×Select Machine\'s').click();
        await this.page.getByRole('treeitem', {name: 'AVAILABLE', exact: true}).click();
    }

    async selectBrand() {
        await this.page.getByText('×Select a Brand').click();
        await this.page.getByRole('treeitem', {name: 'FRAZIL'}).click();
    }

    async setWarrantyDate() {
        await this.page.getByPlaceholder('Warranty Date').click();
    }

    async clickCreateButton() {
        await this.page.getByRole('button', {name: 'Create'}).click();
    }
}
