import { test, expect} from '@playwright/test';

test('Locators', async({page}) =>{
    //open url 
    await page.goto('https://www.saucedemo.com');
    //enter username 
    await page.fill('#user-name','standard_user');
    //enter password
    await page.fill('#password','secret_sauce');
    //click login button
    await page.click("//input[@id='login-button']");
    //assert
    //verify successful login
    await expect(page).toHaveURL(/inventory.html/);

    //find list of all products
    //using $$
    // const productNames = await page.$$('.inventory_item_name');

    // //count products
    // const count = (await productNames).length;
    // console.log('total no. of products: ',count);

    // //looping through each element and print

    // for(const product of productNames){
    //     const name = await product.textContent(); // each element is an element handle, using textContent() to fetch the text.
    //     console.log(name);
    // }
    //using locator
    const productNames2= page.locator('.inventory_item_name'); //it gives locator object over an array only that we were getting from $$
    //get total count
    const count = await productNames2.count();
    console.log('Total products:',count);
    //print each product name 
    for(let i=0;i<count;i++){
        const name = await productNames2.nth(i).textContent();
        console.log(name);
    }
})