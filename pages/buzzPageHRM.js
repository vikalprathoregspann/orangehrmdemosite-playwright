export class buzzPage {
    constructor(page) {
        this.page = page
        this.buzzBtnLoc =  page.getByRole('link', { name: 'Buzz' })
        this.buzztextLoc = page.getByRole('textbox', { name: 'What\'s on your mind?' })
        this.postBtnLoc = page.getByRole('button', { name: 'Post', exact: true })
        this.likeBtnLoc = page.locator('#heart').first()
        this.dislikeBtnLoc= page.locator('#heart-svg').first()

        this.commentBtnLoc =page.getByRole('button', { name: '' }).first()
        this.entertxtcommentLoc=page.getByRole('textbox', { name: 'Write your comment...' })
        this.clickEnterbtnLoc = page.getByRole('textbox', { name: 'Write your comment...' })
        this.clickCommentedBtnLoc = page.getByText('1 Comment')

        this.clickSharePhotoBtnLoc=page.getByRole('button', { name: 'Share Photos' })
        this.clickAddPhotosBtnLoc =page.locator('div').filter({ hasText: /^Add Photos$/ }).nth(3)
        this.chooseFilesLoc =page.getByRole('button', { name: 'Choose File' })
        this.clickSharePhotoToBuzzLoc =page.getByRole('button', { name: 'Share', exact: true })
        this.recentCommentLoc =page.getByText('done')//need new txt each time

         //await expect(page.getByText('its you')).toBeVisible();
    }
     async clickOnBuzzBtn(){
        await this.buzzBtnLoc.click()
    }
     async enterTxtBuzz(text){
        await this.buzztextLoc.fill(text)
    }
     async clickOnPostBtn(){
        await this.postBtnLoc.click()
    }
     async clickOnlikeBtn(){
        await this.likeBtnLoc.click()
    }
      async clickOnDislikeBtn(){
        await this.dislikeBtnLoc.click()
    }
     async clickOncommentBtn(){
        await this.commentBtnLoc.click()
    }
     async entertextcomment(comment){
        await this.entertxtcommentLoc.fill(comment)
    }
     async clickOnEnterBtn(){
        await this.clickEnterbtnLoc.press('Enter')
     }
  async isCommentVisible() {
    try {
        await this.recentCommentLoc.waitFor({ state: 'attached', timeout: 5000 });
        return await this.recentCommentLoc.isVisible();
    } catch (e) {
        return false;
    }
}
     
     async clickOnCommentsBtn(){
        await this.clickEnterbtnLoc.click()
     }
     async clickOnSharePhotosBtn(){
        await this.clickSharePhotoBtnLoc.click()
     }
     async clickOnAddPhotosBtn(){
        await this.clickAddPhotosBtnLoc.click()
     }
     async chooseThePhoto(path){
        await this.chooseFilesLoc.setInputFiles(path)
     }
     async clickOnFinalUploadBtn(){
        await this.clickSharePhotoToBuzzLoc.click()
     }
     
}