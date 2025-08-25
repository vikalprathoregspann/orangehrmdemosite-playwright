import { test, expect } from "./orangeHRMFixutre.js";
import { buzzPage } from "../pages/buzzPageHRM.js";
import {generateRandomText} from '../utils/dataGenarator.js'

test('To test the posttxt', async ({ buzzpageSetup,hrmBuzzLoginSetUp,page }) => {
    const randomText = generateRandomText("HelloWorld")//will get new text 
    await buzzpageSetup.enterTxtBuzz(randomText)//use random text
    await buzzpageSetup.clickOnPostBtn()
    await expect(page.getByText(randomText)).toBeVisible();//need new txt each time
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
     const commentText = generateRandomText("Comment");
    await buzzpageSetup.clickOncommentBtn()
    await buzzpageSetup.entertextcomment(commentText)
    await buzzpageSetup.clickOnEnterBtn()
  await expect(page.getByText(commentText)).toBeVisible();
}); 

