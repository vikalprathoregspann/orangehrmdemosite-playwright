//Author : Labeek
import { expect, test } from "./orangeHRMFixutre";
 
test("Fill Personal Details @myInfoTest1", async ({ hrmLoginSetUp, hrmMyInfoPage, page }) => {
    await hrmMyInfoPage.clickOnMyInfoBtn()
    await page.waitForTimeout(2000)
    await hrmMyInfoPage.enterEmployeeFullName("Labeek", "Hussain", "Kashani")
    await expect.soft(hrmMyInfoPage.firstNameLoc).toHaveValue("Labeek")
    await expect.soft(hrmMyInfoPage.middleNameLoc).toHaveValue("Hussain")
    await expect.soft(hrmMyInfoPage.lastNameLoc).toHaveValue("Kashani")
    await hrmMyInfoPage.enterEmployeeId("Emp14321")
    await expect.soft(hrmMyInfoPage.employeeIdLoc).toHaveValue("Emp14321")
    await hrmMyInfoPage.enterOtherId("3243132")
    await expect.soft(hrmMyInfoPage.otherIdLoc).toHaveValue("3243132")
    await hrmMyInfoPage.enterLicenseNumber("DL12435564")
    await expect.soft(hrmMyInfoPage.licenseNumberLoc).toHaveValue("DL12435564")
    await hrmMyInfoPage.enterNationalityDetails()
    await expect(hrmMyInfoPage.selectedNationalityText).toContainText("Indian")
    await hrmMyInfoPage.enterMaritalStatus()
    await expect(hrmMyInfoPage.nationalityFieldLoc).toContainText("Indian")
    await hrmMyInfoPage.enterDobDetails("11-21-2025")
    await hrmMyInfoPage.enterGenderDetails()
    await expect.soft(hrmMyInfoPage.genderFieldLoc).toBeChecked()
    await hrmMyInfoPage.clickOnSaveBtn()
})
 
test("Testing Attachment Upload Functionality @myInfoTest2", async ({ hrmLoginSetUp, hrmMyInfoPage, page }) => {
    await hrmMyInfoPage.clickOnMyInfoBtn()
    await hrmMyInfoPage.clickOnAttachmentAddBtn()
    await hrmMyInfoPage.uploadAttachmentFile("resources/Photo.buzz.png")
    await hrmMyInfoPage.enterComment("This is demo file to check upload")
    await hrmMyInfoPage.clickOnAttachmentSaveBtn()
})