import { expect, type Locator, type Page } from '@playwright/test';
export class Loginpage {
    readonly page: Page; I
    readonly username: Locator;
    readonly password: Locator;
    readonly submitBtn: Locator;

    constructor (page: Page) {
        this. page = page;
        this. username = page. locator ('[placeholder=\'Username\'] ');
        this. password = page. locator('[placeholder=\'Password\']')
        this. submitBtn = page. locator ('[type=\'submit\']')

}

async gotoUrl() {
    await this.page.goto (process.env.APP_URL);
}

async login (username: string, password: string){
    await this.username.fill(username);
    await this.password.fill (password);
    await this.submitBtn.click();
}
}