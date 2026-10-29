const {test, expect} = require('@playwright/test'); //test function to create test, expect to perform assertion

test('Open Google page and check title', async({page})=>{
    //test code will go here
    await page.goto("https://www.google.com");
    const pageTitle = await page.title(); //as playwright have to search from DOM so it takes time 
    console.log("Page title is:",pageTitle);
    const pageUrl = page.url(); //playwright already have url, no need to fetch from DOM
    console.log("Page Url is: ",pageUrl);
    await expect(page).toHaveTitle(/Google/);
}
)