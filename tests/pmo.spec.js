const { test, expect } = require('@playwright/test');
const { default: loginAct } =  require('../tests/spec/actions/loginActions');

test('cara login pakai page object models', async ({ page }) => {
    const loginObj = new loginAct(page);
    await loginObj.goto();
    await loginObj.InputLogin();
});

  