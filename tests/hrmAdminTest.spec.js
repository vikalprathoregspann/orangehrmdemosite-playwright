import { expect,test } from "./orangeHRMFixutre";

test("adding data using save button @adminTest1",async({hrmAdminSetUp, hrmAdminPage})=>{
    await hrmAdminPage.clickOnSaveBtn()
    // await expect(hrmAdminPage.isNewRecordVisible()).toBeTruthy()
    expect(await hrmAdminPage.isUserManagementTextVisible()).toBeFalsy();
})

test("clicking on cancel button @adminTest2", async ({ hrmAdminSetUp, hrmAdminPage }) => {
    await hrmAdminPage.clickOnCancelBtn();
    expect(await hrmAdminPage.isUserManagementTextVisible()).toBeTruthy();
});


