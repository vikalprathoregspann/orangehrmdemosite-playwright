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

