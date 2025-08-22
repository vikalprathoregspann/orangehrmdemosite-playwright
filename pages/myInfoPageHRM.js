export class HrmMyInfoPage{
    constructor(page){
        this.page=page
        this.myInfoPageBtnLoc=page.getByRole('link', { name: 'My Info' })
 
        this.firstNameLoc=page.getByRole('textbox', { name: 'First Name' })
        this.middleNameLoc=page.getByRole('textbox', { name: 'Middle Name' })
        this.lastNameLoc=page.getByRole('textbox', { name: 'Last Name' })
 
        this.employeeIdLoc=page.locator("(//*[contains(@class, 'oxd-input--active')])[4]")
        this.otherIdLoc=page.locator('div').filter({ hasText: /^Employee IdOther Id$/ }).getByRole('textbox').nth(1)
        this.licenseNumberLoc=page.locator('div').filter({ hasText: /^Driver's License NumberLicense Expiry Date$/ }).getByRole('textbox').first()
       
        this.selectedNationalityText=page.locator("(//div[@class='oxd-select-wrapper'])[1]")
        this.nationalityFieldLoc=page.locator("(//div[@class='oxd-select-wrapper'])[1]")
        this.selectedNationalityLoc=page.getByText('Indian')
 
        this.maritalFieldLoc=page.locator("(//div[@class='oxd-select-wrapper'])[2]")
        this.selectMaritalLoc=page.getByRole('option', { name: 'Single' })
        this.dobFieldLoc=page.locator("(//*[contains(@class, 'oxd-input--active')])[9]")
        this.genderFieldLoc=page.locator("(//span[contains(@class, 'oxd-radio-input')])[1]")
 
        this.saveBtnLoc=page.locator("(//*[contains(@class, 'orangehrm-left-space')])[1]")
 
        this.attachmentFileLoc=page.getByRole('button', { name: ' Add' })
        this.attachmentUploadBtnLoc=page.getByRole('button', { name: 'Choose File' })
        this.commentFieldLoc=page.getByRole('textbox', { name: 'Type comment here' })
        this.attachmentSaveBtnLoc=page.getByRole('button', { name: 'Save' }).nth(2)
    }
 
    async clickOnMyInfoBtn(){
        await this.myInfoPageBtnLoc.click()
    }
 
    async enterEmployeeFullName(fname, mname, lname){
        await this.firstNameLoc.fill(fname)
        await this.middleNameLoc.fill(mname)
        await this.lastNameLoc.fill(lname)
    }
 
    async enterEmployeeId(empID){
        await this.employeeIdLoc.fill(empID)
    }
    async enterOtherId(otherId){
        await this.otherIdLoc.fill(otherId)
    }
    async enterLicenseNumber(drNumber){
        await this.licenseNumberLoc.fill(drNumber)
    }
 
    async enterNationalityDetails() {
    const currentNationality = await this.selectedNationalityText.innerText();
 
        if (!currentNationality.includes("Indian")) {
            await this.nationalityFieldLoc.click();
            await this.selectedNationalityLoc.click();
        }
    }
 
    async enterMaritalStatus(){
        await this.maritalFieldLoc.click()
        await this.selectMaritalLoc.click()
    }
    async enterDobDetails(dobData){
        await this.dobFieldLoc.fill(dobData)
    }
    async enterGenderDetails(){
        await this.genderFieldLoc.click()
    }
 
    async clickOnSaveBtn(){
        await this.saveBtnLoc.click()
    }
 
    async clickOnAttachmentAddBtn(){
        await this.attachmentFileLoc.click()
    }
    async uploadAttachmentFile(path){
        await this.attachmentUploadBtnLoc.setInputFiles(path)
    }
    async enterComment(commentData){
        await this.commentFieldLoc.fill(commentData)
    }
    async clickOnAttachmentSaveBtn(){
        await this.attachmentSaveBtnLoc.click()
    }
}