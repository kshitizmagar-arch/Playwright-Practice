import { test, expect } from '@playwright/test';

test('Built-In Locators', async ({ page }) => {
    //open url 
    await page.goto('https://www.saucedemo.com');
    //enter username 
    await page.getByPlaceholder('Username').fill('standard_user');
    //enter password
    await page.getByPlaceholder('Password').fill('secret_sauce');
    //click login button
    await page.getByRole('button',{name:'Login'}).click();

    //asserting
    await expect(page).toHaveURL(/inventory.html/);

    //get by text - verifying product text visibliity.
    await expect(page.getByText('Products')).toBeVisible();

    //getbyrole() - add product to cart first one.
    await page.getByRole('button',{name:'Add to cart'}).first().click();

    await page.getByAltText('Sauce Labs Backpack').click();
})