import { expect,test } from "./orangeHRMFixutre";

test("adding data using save button @adminTest1",async({hrmAdminSetUp, hrmAdminPage})=>{
    await hrmAdminPage.clickOnSaveBtn()
    expect(await hrmAdminPage.isUserManagementTextVisible()).toBeFalsy();
})

test("clicking on cancel button @adminTest2", async ({ hrmAdminSetUp, hrmAdminPage }) => {
    await hrmAdminPage.clickOnCancelBtn();
    expect(await hrmAdminPage.isUserManagementTextVisible()).toBeTruthy();
});

test("search using valid data @adminTest3",async({hrmAdminSearch, hrmAdminPage})=>{
    await hrmAdminPage.enterSearchStatus()
    await hrmAdminPage.clickOnSearchBtn()
    expect(await hrmAdminPage.isRecordAvailable()).toContain("(1) Record Found")
})

test("search using Invalid data @adminTest4",async({hrmAdminSearch, hrmAdminPage})=>{
    await hrmAdminPage.enterSearchOtherStatus()
    await hrmAdminPage.clickOnSearchBtn()
    expect(await hrmAdminPage.isRecordAvailable()).toContain("No Records Found")
})

test("Edit data of added records @adminTest5",async({hrmLoginSetUp, hrmAdminPage})=>{
    await hrmAdminPage.clickOnAdminBtn()
    await hrmAdminPage.clickOnEditRecordBtn()
    await hrmAdminPage.clickOnEditStatusField()
    await hrmAdminPage.clickDisableOnEditStatus()
    await hrmAdminPage.clickOnEditSaveBtn()
    expect(await hrmAdminPage.isUserManagementTextVisible()).toBeFalsy();
})

test("Delete data from records @adminTest6",async({hrmLoginSetUp, hrmAdminPage, page})=>{
    await hrmAdminPage.clickOnAdminBtn()
    await page.waitForTimeout(4000)
    await hrmAdminPage.clickOnDeleteRecordBtn()
    await hrmAdminPage.clickOnConfirmDeleteBtn()
})

test("Checking footer orangeHRM, Inc. link @adminTest7", async ({ hrmLoginSetUp, hrmAdminPage, page}) => {
    await hrmAdminPage.clickOnAdminBtn()
    await hrmAdminPage.clickOnFooterLink()
    await page.waitForTimeout(3000)
    await expect(hrmAdminPage.isStreamlineHeadingVisible()).toBeTruthy()
})

test("Checking funtionality of job dropdown @adminTest8",async({hrmLoginSetUp, hrmAdminPage})=>{
    await hrmAdminPage.clickOnAdminBtn()
    await hrmAdminPage.clickOnJobDd()
    await hrmAdminPage.clickOnJobTitleOption()
    await expect(hrmAdminPage.jobTitleHeadingLoc).toBeVisible();
})

test("Checking functionality of nationalities button @adminTest9",async({hrmLoginSetUp, hrmAdminPage})=>{
    await hrmAdminPage.clickOnAdminBtn()
    await hrmAdminPage.clickOnNationalitiesBtn()
    await expect(hrmAdminPage.nationalitiesHeadingLoc).toBeVisible();
})

test("Checking funtionality of organization dropdown @adminTest10",async({hrmLoginSetUp, hrmAdminPage})=>{
    await hrmAdminPage.clickOnAdminBtn()
    await hrmAdminPage.clickOnOrganizationDd()
    await hrmAdminPage.clickOnGeneralInfoOption()
    await expect(hrmAdminPage.generalInfoHeadingLoc).toBeVisible();
})
