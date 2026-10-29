import {test, expect} from '@playwright/test';

test('Locators',async({page})=>{
   await page.goto('https://www.saucedemo.com/');
   //locate id web element
   await page.locator('id=user-name').fill('standard_user'); //using property
   await page.fill('#user-name','standard_user') // another method to fill the input.

   await page.locator('#password').fill('secret_sauce'); //using css selector #
   await page.locator("//input[@id='login-button']").click(); //using xpath

   // await page.click("//input@id='login-button'"); // another method to click the button.

   //assert 
   //verify successful login 
   await expect(page).toHaveURL(/inventory.html/);
   await expect(page.locator('.title')).toHaveText('Products');

   const productElement = page.locator('.title'); 
   await expect (productElement).toBeVisible() // asserting web element visibility.
 
})