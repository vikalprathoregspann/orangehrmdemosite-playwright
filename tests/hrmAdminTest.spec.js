//Author : Prince
import { expect,test } from "./orangeHRMFixutre";

test("User is able to add data using Save button @adminTest1",async({hrmAdminSetUp, hrmAdminPage})=>{
    await hrmAdminPage.clickOnSaveBtn()
    await expect(hrmAdminPage.addedUserRows).toHaveCount(1);
})
test("User is able to cancel and return to User Management @adminTest2", async ({ hrmAdminSetUp, hrmAdminPage }) => {
    await hrmAdminPage.clickOnCancelBtn();
    expect(await hrmAdminPage.isUserManagementTextVisible()).toBeTruthy();
});
test("System returns records for valid search input @adminTest3",async({hrmAdminSearch, hrmAdminPage})=>{
    await hrmAdminPage.enterSearchStatus()
    await hrmAdminPage.clickOnSearchBtn()
    expect(await hrmAdminPage.isRecordAvailable()).toContain("(1) Record Found")
})
test("System shows no records for invalid search input @adminTest4",async({hrmAdminSearch, hrmAdminPage})=>{
    await hrmAdminPage.enterSearchOtherStatus()
    await hrmAdminPage.clickOnSearchBtn()
    expect(await hrmAdminPage.isRecordAvailable()).toContain("No Records Found")
})
test("User is able to edit and save changes to a record @adminTest5",async({hrmLoginSetUp, hrmAdminPage, page})=>{
    await hrmAdminPage.clickOnAdminBtn()
    await hrmAdminPage.clickOnEditRecordBtn()
    await hrmAdminPage.clickOnEditStatusField()
    await hrmAdminPage.clickDisableOnEditStatus()
    await hrmAdminPage.clickOnEditSaveBtn()
    await expect(hrmAdminPage.editedRecordLoc).toHaveText("Disabled")
})
test("User is able to delete a record successfully @adminTest6",async({hrmLoginSetUp, hrmAdminPage, page})=>{
    await hrmAdminPage.clickOnAdminBtn()
    await page.waitForTimeout(4000)
    await hrmAdminPage.clickOnDeleteRecordBtn()
    await hrmAdminPage.clickOnConfirmDeleteBtn()
    await expect(hrmAdminPage.deletedUserRows).toHaveCount(0);
})
test("Footer link navigates to OrangeHRM, Inc. page @adminTest7", async ({ hrmLoginSetUp, hrmAdminPage, page}) => {
    await hrmAdminPage.clickOnAdminBtn()
    await hrmAdminPage.clickOnFooterLink()
    await page.waitForTimeout(3000)
    await expect(hrmAdminPage.isStreamlineHeadingVisible()).toBeTruthy()
})
test("Job dropdown navigates to Job Titles page @adminTest8",async({hrmLoginSetUp, hrmAdminPage})=>{
    await hrmAdminPage.clickOnAdminBtn()
    await hrmAdminPage.clickOnJobDd()
    await hrmAdminPage.clickOnJobTitleOption()
    await expect(hrmAdminPage.jobTitleHeadingLoc).toBeVisible();
})
test("Nationalities button navigates to Nationalities page @adminTest9",async({hrmLoginSetUp, hrmAdminPage})=>{
    await hrmAdminPage.clickOnAdminBtn()
    await hrmAdminPage.clickOnNationalitiesBtn()
    await expect(hrmAdminPage.nationalitiesHeadingLoc).toBeVisible();
})
test("Organization dropdown navigates to General Information page @adminTest10",async({hrmLoginSetUp, hrmAdminPage})=>{
    await hrmAdminPage.clickOnAdminBtn()
    await hrmAdminPage.clickOnOrganizationDd()
    await hrmAdminPage.clickOnGeneralInfoOption()
    await expect(hrmAdminPage.generalInfoHeadingLoc).toBeVisible();
})
