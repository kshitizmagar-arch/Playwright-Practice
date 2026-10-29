import { test, expect } from '@playwright/test';

test('Built-In Locators', async ({ page }) => {
    //open url 
    await page.goto('https://practice.expandtesting.com/login');

    // using getBylabel 
    await page.getByLabel('username').fill('practice');
    await page.getByLabel('password').fill('SuperSecretPassword');
    await page.getByRole('button',{name:'Login'}).click();

    await page.getByRole('link',{name:'Home'}).click();
    
})