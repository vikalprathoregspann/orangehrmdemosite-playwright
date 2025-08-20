import { expect,test } from "./orangeHRMFixutre";

test('login Using ValidUser',async({page,hrmLoginPage, hrmLoginSetUp})=>{
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
})

test('login Using InValidUser',async({hrmLaunchSetUp, hrmLoginPage})=>{
    await hrmLoginPage.enterInvalidUserName("OrangeHrm")
    await hrmLoginPage.enterValidPassword("admin123")
    await hrmLoginPage.clickOnLoginBtn()
    await expect(hrmLoginPage.invalidAlertLoc).toContainText('Invalid credentials');
})

test('login Using InValidPassword',async({hrmLaunchSetUp, hrmLoginPage})=>{
    await hrmLoginPage.enterValidUserName("Admin")
    await hrmLoginPage.enterInvalidPassword("orange123")
    await hrmLoginPage.clickOnLoginBtn()
    await expect(hrmLoginPage.invalidAlertLoc).toContainText('Invalid credentials');
})

test('Reset Password',async({hrmLaunchSetUp, hrmLoginPage})=>{
    await hrmLoginPage.clickOnForgotPasswordLnk()
    await hrmLoginPage.enterUserNameForResetPassword("orange123")
    await hrmLoginPage.clickOnResetBtn()
    await expect(hrmLoginPage.resetMsgLoc).toContainText('Reset Password link sent successfully')
})