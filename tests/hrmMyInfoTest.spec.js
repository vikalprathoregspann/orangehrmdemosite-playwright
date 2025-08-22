//Page Object Model for MyInfoPage.
//Author : Labeek
import { expect,test } from "./orangeHRMFixutre";
 
test("Fill Personal Details @myInfoTest1",async({hrmLoginSetUp,hrmMyInfoPage,page})=>{
    await hrmMyInfoPage.clickOnMyInfoBtn()
    await page.waitForTimeout(2000)
    await hrmMyInfoPage.enterEmployeeFullName("Labeek","Hussain","Kashani")
    await hrmMyInfoPage.enterEmployeeId("Emp14321")
    await hrmMyInfoPage.enterOtherId("3243132")
    await hrmMyInfoPage.enterLicenseNumber("DL12435564")
    await hrmMyInfoPage.enterNationalityDetails()
    await hrmMyInfoPage.enterMaritalStatus()
    await hrmMyInfoPage.enterDobDetails("11-21-2025")
    await hrmMyInfoPage.enterGenderDetails()
    await hrmMyInfoPage.clickOnSaveBtn()
})
 
test("Testing Attachment Upload Functionality @myInfoTest2",async({hrmLoginSetUp,hrmMyInfoPage})=>{
    await hrmMyInfoPage.clickOnMyInfoBtn()
    await hrmMyInfoPage.clickOnAttachmentAddBtn()
    await hrmMyInfoPage.uploadAttachmentFile("resources/Photo.buzz.png")
    await hrmMyInfoPage.enterComment("This is demo file to check upload")
    await hrmMyInfoPage.clickOnAttachmentSaveBtn()
})