import loginLocators from "../locator/loginLocator";
import { expect } from "@playwright/test";

export default class loginActions {
    /**
     * @param {import('@playwright/test').Page} page
     */
    constructor(page) {
        this.page = page;
        this.loginLocator = new loginLocators();
        this.inputUsername = page.locator(this.loginLocator.inputUsername);
        this.inputPassword = page.locator(this.loginLocator.inputPassword);
        this.clickLogin = page.locator(this.loginLocator.buttonLogin);
    }

    async goto() {
        await this.page.goto('https://www.saucedemo.com/');
    }

    async InputLogin() {
        await this.inputUsername.fill('standard_user');
        await expect(this.inputUsername).toHaveValue('standard_user');
        await this.inputPassword.fill('secret_sauce');
        await expect(this.inputPassword).toHaveValue('secret_sauce');
        await this.clickLogin.click();

    }
}