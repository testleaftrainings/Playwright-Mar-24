import { expect, test} from "@playwright/test";

test(`Waits`, async({page})=>{

    await page.goto("https://leafground.com/waits.xhtml");
    const cardToSelect = page.locator(".card").filter({hasText:"Wait for Visibility"});
    const buttonToClick = cardToSelect.getByRole("button").filter({hasText:"Click"});
    await buttonToClick.click();

    //Locator Chaining
    //await page.locator(".card").filter({hasText:"Wait for Visibility"}).getByRole("button").filter({hasText:"Click"}).click();

    const hiddenButton = cardToSelect.getByRole("button").filter({hasText:"I am here"});
    await expect(hiddenButton).toBeVisible({timeout:10000});
    console.log(await hiddenButton.innerText());


   
})