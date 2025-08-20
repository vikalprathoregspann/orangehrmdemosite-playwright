import {test,expect} from "@playwright/test"

export class PimPage{
    constructor(page)
    {
        this.page=page
        this.addBtn=page.getByRole('button', { name: 'Add' })
        this.addFirstName=page.getByRole('textbox', { name: 'First Name' })
        this.addMiddleName=page.getByRole('textbox', { name: 'Middle Name' })
        this.addLastName=page.getByRole('textbox', { name: 'Last Name' })
        this.saveBtn= page.getByRole('button', { name: 'Save' })
        this.searchName=page.getByRole('textbox', { name: 'Type for hints...' }).first()
        this.searchBtn=page.getByRole('button', { name: 'Search' })
        this.noRecord=page.locator("//span[text()='No Records Found']")
        this.recordYes=page.locator("//span[text()='(1) Record Found']")
        this.profile=page.locator("//p[@class='oxd-userdropdown-name']")
        this.addEmployeeButton=page.getByRole('link', { name: 'Add Employee' })
        this.fillingIdinAdd=page.getByRole('textbox').nth(4)
        this.saveEmployeeBtn=page.getByRole('button', { name: 'Save' })
        this.employeeListBtn=page.getByRole('link', { name: 'Employee List' })
        this.editButton=page.locator("//i[@class='oxd-icon bi-pencil-fill'][1]").nth(1)
        //this.editAndSaveBtn=page.locator('form').filter({ hasText: 'Employee Full NameEmployee' }).getByRole('button')
        this.editAndSaveBtn=page.locator('form').filter({ hasText: 'Blood Type-- Select --' }).getByRole('button')
        this.successPopup = page.getByText('Successfully Saved');
        this.checkFordelete1=page.locator("//div[@class='oxd-table-card'][1]/descendant::span/descendant::i")
        this.checkFordelete2=page.locator("//div[@class='oxd-table-card'][2]/descendant::span/descendant::i")
        this.deleteButton=page.getByRole("button",{name: 'Delete Selected'} )
        this.deleteConfBtn=page.getByRole("button",{name:' Yes, Delete '})
        this.deletePopUp=page.locator('//div[contains(@class,"oxd-toast") and contains(.,"Successfully Deleted")]').nth(3)
        this.configuration=page.locator("//span[text()='Configuration ']")
        this.configDropDown=page.locator("//a[text()='Custom Fields']")
        this.optionalFile=page.getByRole('menuitem', { name: 'Optional Fields' })
        this.turnOnSwitch=page.locator('form div').filter({ hasText: 'Show Deprecated FieldsShow' }).locator('span')
        this.nicknameSelector=page.locator("//div[@class='oxd-table-card']").nth(2)
        this.nicknameVisible=page.locator('div').filter({ hasText: /^Employee Full NameNickname$/ }).getByRole('textbox').nth(3)
        this.reportsLink=page.getByRole('link', { name: 'Reports' })
        this.reportsSection=page.locator('.orangehrm-container')
        this.dataImport=page.getByRole('menuitem', { name: 'Data Import' })
        this.notes=page.locator("//p[text()='Column order should not be changed']")
    }
    async clickDataImport()
    {
        await this.dataImport.click()
    }

    async AssertPresenceOfNote()
    {
        await expect(this.notes).toBeVisible()
    }
    async clickReports()
    {
        await this.reportsLink.click()
    }
    async assertReportsDisplayed()
    {
        await expect(this.reportsSection).toBeVisible()
    }
    async clickOptionalFile()
    {
        await this.optionalFile.click()
    }
    async turnInidcatorOn()
    {
        await this.turnOnSwitch.click()
    }
    async nickNameClick()
    {
        await this.nicknameSelector.click()
    }
    async assertNickName()
    {
        await expect(this.nicknameVisible).toBeVisible()
    }
    async configurationClick()
    {
        await this.configuration.click()
    }
    async assertDropDownVisible()
    {
        await expect(this.configDropDown).toBeVisible()
    }
    async checkFirstDelete()
    {
        await this.checkFordelete1.check()
        

    }
    async checkSecondDelete()
    {
        await this.checkFordelete2.check()
    }
    async deleteClick()
    {
       await this.deleteButton.click()
       await this.deleteConfBtn.click()
    }
    async clickSaveAfterEdit()
    {
        await this.editAndSaveBtn.click()
    }
    async updatingName(name)
    {
        await this.addFirstName.fill(name)
    }
    async clickEditButton()
    {
        await this.editButton.click()
    }
    async navigateToList()
    {
        await this.employeeListBtn.click()

    }
    async clickSaveEmployee()
    {
        await this.saveEmployeeBtn.click()
    }
    async addEmployee()
    {
        await this.addEmployeeButton.click()
    }
    async fillId(id)
    {
           this.fillingIdinAdd.fill(id)
    }
    async clickAddButton()
    {
        await this.addBtn.click()
    }
    async fillName(first,middle,last)
    {
        await this.addFirstName.fill(first)
        await this.addMiddleName.fill(middle)
        await this.addLastName.fill(last)
    }
    async clickSave()
    {
        await this.saveBtn.click()
    }
    async enterSearchName(name)
    {
         //await this.searchName.click()
         await this.searchName.fill(name)
    }
    async clickSearch()
    {
        await this.searchBtn.click()
        
    }
    
    async assertNorecordFound()
    {
         await expect(this.noRecord).toBeVisible()
    }
    async assertRecordFound()
    {
        await expect(this.recordYes).toBeVisible()
    }
    async assertSaveSuccess() {
   await expect(this.successPopup).toBeVisible();
   await expect(this.successPopup).toHaveText('Successfully Saved');
 }
   async clickSaveUntilSuccess(maxTries = 3) {
   for (let i = 0; i < maxTries; i++) {
     await this.editAndSaveBtn.click();
     try {
       // wait for success popup
       await expect(this.successPopup).toBeVisible({ timeout: 3000 });
       console.log(` Success after ${i + 1} attempt(s)`);
       // wait for it to disappear
       await expect(this.successPopup).toBeHidden({ timeout: 5000 });
       return;
     } catch (e) {
       console.log(` Attempt ${i + 1} failed, retrying...`);
     }
   }
   throw new Error(` Could not see "Successfully Saved" popup after ${maxTries} attempts`);
 }

 async assertDeleteConfirmation()
 {
    await expect(this.deletePopUp).toBeVisible()
 }
    
    
}

//  await page.getByRole('menuitem', { name: 'Optional Fields' }).click();
//   await page.locator('form div').filter({ hasText: 'Show Deprecated FieldsShow' }).locator('span').click();
//   await page.locator('form div').filter({ hasText: 'Show Deprecated FieldsShow' }).locator('span').click();
//   await page.getByRole('link', { name: 'Employee List' }).click();
//   await page.getByRole('row', { name: ' 0385 alex martin  ' }).click();
//   await expect(page.locator('div').filter({ hasText: /^Employee Full NameNickname$/ }).getByRole('textbox').nth(3)).toBeVisible();
  

// await page.getByRole('link', { name: 'Reports' }).click();
//   await expect(page.locator('.orangehrm-container')).toBeVisible();