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
    
    //method for add button in admin page
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
    //clicking save button after filling data
    async clickOnSaveBtn(){
        await this.saveBtnLoc.click()
    }
    
    async getNewRecordLocator() {
        return await this.newRecordLoc.toBeTruthy();
    }

    //clicking cancel button after filling data
    async clickOnCancelBtn(){
        await this.cancelBtnLoc.click()
    }
    async isUserManagementTextVisible() {
        return await this.userManagementTextLoc.isVisible();
    }

    //method for search button in admin page
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


// test('test', async ({ page }) => {
//   await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
//   await page.getByRole('textbox', { name: 'Username' }).click();
//   await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
//   await page.getByRole('textbox', { name: 'Password' }).click();
//   await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
//   await page.getByRole('button', { name: 'Login' }).click();
//   await page.getByRole('link', { name: 'PIM' }).click();
//   await page.getByRole('button', { name: ' Add' }).click();
//   await page.getByRole('textbox', { name: 'First Name' }).click();
//   await page.getByRole('textbox', { name: 'First Name' }).fill('Prince');
//   await page.getByRole('textbox', { name: 'Last Name' }).click();
//   await page.getByRole('textbox', { name: 'Last Name' }).fill('Raj');
//   await page.getByRole('textbox').nth(4).click();
//   await page.getByRole('textbox').nth(4).fill('12453');
//   await page.getByRole('button', { name: 'Save' }).click();
//   await page.getByRole('link', { name: 'Admin' }).click();
// });