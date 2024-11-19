// MachineTest.spec.ts
import {test} from '@playwright/test';
import {CreateMachine} from "../../page-objects/CREATE MACHINE/CreateMachine";

test('auth', async ({page}) => {
    // page is authenticated
});

test('Create a machine', async ({page}) => {
    const machinePage = new CreateMachine(page);

    await machinePage.navigate();
    await machinePage.fillBunnSerialNumber('ULTR0123045');
    await machinePage.fillQRCodeNumber('12456789');
    await machinePage.selectPurchaseDate();
    await machinePage.fillPurchasePrice('4500');
    await machinePage.fillInvoiceNumber('356');
    await machinePage.selectOwnership();
    await machinePage.selectMachineType();
    await machinePage.selectDateLastVerified();
    await machinePage.selectMachineStatus();
    await machinePage.selectBrand();
    await machinePage.setWarrantyDate();
    await machinePage.clickCreateButton();
});
