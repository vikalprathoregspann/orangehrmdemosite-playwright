//Author : Kanishka
export class recruitmentPage {
    constructor(page) {
        this.page = page
        this.recruitmentBtnLoc = page.getByRole('link', { name: 'Recruitment' })
        this.addBtnLoc = page.locator("(//*[@type='button'])[5]")
        this.firstNametxtLoc = page.getByRole('textbox', { name: 'First Name' })
        this.lastNametxtLoc =  page.getByRole('textbox', { name: 'Last Name' })
        this.emailtxtLoc = page.locator("//label[@class='oxd-label oxd-input-field-required']/parent::div/following-sibling::div/input")
        this.saveBtnLoc = page.locator("//*[@class='oxd-form-actions']/button[2]")
        this.cancelBtnLoc=page.locator("//*[@class='oxd-form-actions']/button[1]")
        this.vscanciesBtnLoc= page.getByRole('link', { name: 'Vacancies' })
     
    }
    async clickOnRecruitmentBtn() {
        await this.recruitmentBtnLoc.click()
    }
    async clickOnAddBtn() {
        await this.addBtnLoc.click()
    }

    async enterFirstName(name) {
        await this.firstNametxtLoc.fill(name)
        }

    async enterLastName(name) {
        await this.lastNametxtLoc.fill(name)
    }
    async enterEmailtxt(name) {
        await this.emailtxtLoc.fill(name)
    }
    async clickOnSaveBtn() {
        await this.saveBtnLoc.click()
    }
      async clickOnCancelBtn(){
        await this.cancelBtnLoc.click()
    }
     async clickOnVacanciesBtn(){
        await this.vscanciesBtnLoc.click()
    }
}