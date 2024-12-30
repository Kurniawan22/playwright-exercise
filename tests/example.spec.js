// @ts-check
const { test, expect } = require('@playwright/test');

test('cara traditional', async ({ page }) => {
  await page.goto('https://www.saucedemo.com/');

  //cara kesatu
  await expect(page).toHaveTitle('Swag Labs');

  //cara kedua
  const getTtile = await page.title();
  console.log(`title adalah : ${getTtile}`);
  await expect(getTtile).toBe('Swag Labs');

  //cara traditional input button
  const inputUsername = page.locator('//*[@id="user-name"]');
  await inputUsername.fill('standard_user');

  const inputPassword = page.locator('//*[@id="password"]');
  await inputPassword.fill('secret_sauce');

  //cara xpath
  //await page.locator('//*[@id="login-button"]').click();
  
  //cara click button selector
  await page.locator('#login-button').click();
});

test('cara login pakai page object models', async ({ page }) => {

});