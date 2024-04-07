import { test, expect } from "@playwright/test";

test("Learning Assertions", async ({page}) =>{


    await page.goto("https://leafground.com/input.xhtml");
    const typeName = page.getByPlaceholder("Babu Manickam");
    //To check the text box is enabled
    await expect(typeName).toBeEnabled();
    //Enter the name
    await typeName.fill("Ranjini");

    const disabledTextbox = page.getByPlaceholder("Disabled");
    //Soft assertion
    await expect.soft(disabledTextbox).toBeEnabled();
    const clearText = page.locator("[name='j_idt88:j_idt95']");
    await clearText.clear({timeout:10000});
    

})