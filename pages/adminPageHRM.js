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
        this.newRecordLoc=page.getByText('Vikalp KrGspann')
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
    
    async getNewRecordLocator() {
        return await this.newRecordLoc.toBeTruthy();
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
}