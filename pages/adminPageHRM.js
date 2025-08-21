export class HrmAdminPage{
    constructor(page){
        this.page=page
        this.pimAdmBtnLoc=page.getByRole('link', { name: 'PIM' })
        this.pimAddBtnLoc=page.getByRole('button', { name: ' Add' })
        this.pimUserFirstNameLoc=page.getByRole('textbox', { name: 'First Name' })
        this.pimUserLastNameLoc=page.getByRole('textbox', { name: 'Last Name' })
        this.pimEmployeeIdLoc=page.getByRole('textbox').nth(4)
        this.pimSaveBtnLoc=page.getByRole('button', { name: 'Save' })

        this.adminBtnLoc=page.getByRole('link', { name: 'Admin' })

        this.addBtnLoc=page.getByRole('button', { name: ' Add' })
        this.userRoleFieldLoc=page.getByText('-- Select --').first()
        this.adminRoleLoc=page.getByRole('option', { name: 'Admin' })
        this.statusFieldLoc=page.getByText('-- Select --')
        this.enableStatusLoc=page.getByRole('option', { name: 'Enabled' })
        this.employeeNameLoc=page.getByRole('textbox', { name: 'Type for hints...' })
        this.selectEmployeeLoc=page.getByRole('option', { name: 'Suraj Raj' })
        this.userNameLoc=page.getByRole('textbox').nth(2)
        this.passwordLoc=page.getByRole('textbox').nth(3)
        this.confirmPasswordLoc=page.getByRole('textbox').nth(4)
        this.saveBtnLoc=page.getByRole('button', { name: 'Save' })
        this.cancelBtnLoc=page.getByRole('button', { name: 'Cancel' })
        this.userManagementTextLoc=page.getByRole('heading', { name: '/ User Management' })

        this.searchUserNameFieldLoc=page.getByRole('textbox').nth(1)
        this.searchUserRoleFieldLoc=page.locator('form i').first()
        this.searchAdminRoleLoc=page.getByRole('option', { name: 'Admin' })
        this.searchEmployeeLoc=page.getByRole('textbox', { name: 'Type for hints...' })
        this.searchSelectEmployeeLoc=page.getByRole('option', { name: 'Suraj Raj' })
        this.searchStatusFieldLoc=page.locator('div').filter({ hasText: /^-- Select --$/ }).nth(2)
        this.searchEnableStatusLoc=page.getByRole('option', { name: 'Enabled' })
        this.searchDisabledStatusLoc=page.getByRole('option', { name: 'Disabled' })
        this.searchBtnLoc=page.getByRole('button', { name: 'Search' })
        this.validRecordFoundLoc=page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[2]/div[2]/div/span')

        this.editRecordBtnLoc=page.getByRole('row', { name: ' Vikalp KrGspann Admin Suraj' }).getByRole('button').nth(1)
        this.editStatusFieldLoc=page.locator('form i').nth(1)
        this.selectDisableInEditLoc=page.getByRole('option', { name: 'Disabled' })
        this.editSaveBtnLoc=page.getByRole('button', { name: 'Save' })

        this.deleteRecordBtnLoc=page.getByRole('row', { name: ' Vikalp KrGspann Admin Suraj' }).getByRole('button').first()
        this.deleteConfirmBtnLoc=page.getByRole('button', { name: ' Yes, Delete' })

        this.footerLinkLoc=page.locator("//a[text()='OrangeHRM, Inc']")
        this.streamlineHeadingLoc=page.locator("//div[@class='page-title']//h1")

        this.jobDropDownLoc=page.getByRole('listitem').filter({ hasText: 'Job' }).locator('i')
        this.selectJobTitleLoc=page.getByRole('menuitem', { name: 'Job Titles' })
        this.jobTitleHeadingLoc=page.locator("//div[@class='orangehrm-header-container']//h6")

        this.nationalitiesBtnLoc=page.getByRole('listitem').filter({ hasText: 'Nationalities' })
        this.nationalitiesHeadingLoc=page.locator("//div[@class='orangehrm-header-container']//h6")

        this.organizationDropDownLoc=page.getByRole('listitem').filter({ hasText: 'Organization' }).locator('i')
        this.selectgeneralInfoLoc=page.getByRole('menuitem', { name: 'General Information' })
        this.generalInfoHeadingLoc=page.locator("//div[@class='orangehrm-header-container']//h6")
    }

    async clickOnPimAdmBtn(){
        await this.pimAdmBtnLoc.click()
    }
    async clickOnPimAddBtn(){
        await this.pimAddBtnLoc.click()
    }
    async enterPimUserFirstName(pimFname){
        await this.pimUserFirstNameLoc.fill(pimFname)
    }
    async enterPimUserLastName(pimLname){
        await this.pimUserLastNameLoc.fill(pimLname)
    }
    async enterPimEmployeeId(pimId){
        await this.pimEmployeeIdLoc.fill(pimId)
    }
    async clickOnPimSaveBtn(){
        await this.pimSaveBtnLoc.click()
    }
    
    async clickOnAdminBtn(){
        await this.adminBtnLoc.click()
    }

    async clickOnAddBtn(){
        await this.addBtnLoc.click()
    }
    async enterUserRole(){
        await this.userRoleFieldLoc.click()
        await this.adminRoleLoc.click()
    }
    async enterStatus(){
        await this.statusFieldLoc.click()
        await this.enableStatusLoc.click()
    }
    async enterEmployeeName(employeeName){
        await this.employeeNameLoc.click()
        await this.employeeNameLoc.fill(employeeName)
        await this.selectEmployeeLoc.click()
    }
    async enterUserName(userName){
        await this.userNameLoc.fill(userName)
    }
    async enterPassword(password){
        await this.passwordLoc.fill(password)
    }
    async enterConfirmPassword(cPassword){
        await this.confirmPasswordLoc.fill(cPassword)
    }
    async clickOnSaveBtn(){
        await this.saveBtnLoc.click()
    }
    async clickOnCancelBtn(){
        await this.cancelBtnLoc.click()
    }
    async isUserManagementTextVisible() {
        return await this.userManagementTextLoc.isVisible();
    }

    async enterSearchUserName(searchUserName){
        await this.searchUserNameFieldLoc.fill(searchUserName)
    }
    async enterSearchUserRole(){
        await this.searchUserRoleFieldLoc.click()
        await this.searchAdminRoleLoc.click()
    } 
    async enterSearchEmployee(employeeName){
        await this.searchEmployeeLoc.click()
        await this.searchEmployeeLoc.fill(employeeName)
        await this.searchSelectEmployeeLoc.click()
    }
    async enterSearchStatus(){
        await this.searchStatusFieldLoc.click()
        await this.searchEnableStatusLoc.click()
    }
    async clickOnSearchBtn(){
        await this.searchBtnLoc.click()
    }
    async enterSearchOtherStatus(){
        await this.searchStatusFieldLoc.click()
        await this.searchDisabledStatusLoc.click()
    }
    async isRecordAvailable(){
        const data =  await this.validRecordFoundLoc.innerText()
        return data;
    }

    async clickOnEditRecordBtn(){
        await this.editRecordBtnLoc.click()
    }
    async clickOnEditStatusField(){
        await this.editStatusFieldLoc.click()
    }
    async clickDisableOnEditStatus(){
        await this.selectDisableInEditLoc.click()
    }
    async clickOnEditSaveBtn(){
        await this.editSaveBtnLoc.click()
    }

    async clickOnDeleteRecordBtn(){
        await this.deleteRecordBtnLoc.click()
    }
    async clickOnConfirmDeleteBtn(){
        await this.deleteConfirmBtnLoc.click()
    }

    async clickOnFooterLink(){
        await this.footerLinkLoc.click()
    }
    async isStreamlineHeadingVisible(){
        return await this.streamlineHeadingLoc.isVisible()
    }

    async clickOnJobDd(){
        await this.jobDropDownLoc.click()
    }
    async clickOnJobTitleOption(){
        await this.selectJobTitleLoc.click()
    }

    async clickOnNationalitiesBtn(){
        await this.nationalitiesBtnLoc.click()
    }

    async clickOnOrganizationDd(){
        await this.organizationDropDownLoc.click()
    }
    async clickOnGeneralInfoOption(){
        await this.selectgeneralInfoLoc.click()
    }
}