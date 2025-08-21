import { test, expect } from "./orangeHRMFixutre.js";
import { buzzPage } from "../pages/buzzPageHRM.js";

test('To test the posttxt', async ({ buzzpageSetup,hrmBuzzLoginSetUp,page }) => {
    await buzzpageSetup.enterTxtBuzz("HelloWorld")//need new txt each time
    await buzzpageSetup.clickOnPostBtn()
    await expect(page.getByText('HelloWorld')).toBeVisible();//need new txt each time
})

test('To test the likeBtn tolike', async ({ buzzpageSetup,hrmBuzzLoginSetUp,page }) => {
    await buzzpageSetup.clickOnlikeBtn()
    await expect(page.getByText('1 Like').first()).toBeVisible();

})
test('To test the likeBtn todislike', async ({ buzzpageSetup,hrmBuzzLoginSetUp,page }) => {
    await buzzpageSetup.clickOnDislikeBtn()
    await expect(page.getByText('Likes').first()).toBeVisible();
})

test('To test uploadphoto', async ({ buzzpageSetup,hrmBuzzLoginSetUp,page }) => {
await buzzpageSetup.clickOnSharePhotosBtn()
//await buzzpageSetup.clickOnAddPhotosBtn()
await buzzpageSetup.chooseThePhoto("resources/Photo.buzz.png")
await buzzpageSetup.clickOnFinalUploadBtn()
await expect(page.locator('.orangehrm-buzz-post-body-picture').first()).toBeVisible();
});

test('To test the comment', async ({ buzzpageSetup,hrmBuzzLoginSetUp,page }) => {
    await buzzpageSetup.clickOncommentBtn()
    await buzzpageSetup.entertextcomment("done")//need new txt each time
    await buzzpageSetup.clickOnEnterBtn()
    //await buzzpageSetup.clickOncommentBtn()          // need to update this in pages also
 await expect(page.getByText('done')).toBeVisible();//need new txt each time
}); 

