import { test as base, expect } from "@playwright/test";
import { HrmLoginPage } from "../pages/loginPageHRM";
import { HrmAdminPage } from "../pages/adminPageHRM";

export const test = base.extend({
  hrmLoginPage: async({page},use)=>{
    await use(new HrmLoginPage(page));
  },
  hrmLoginSetUp: async({hrmLoginPage},use)=>{
    await hrmLoginPage.launchTheApp()
    await hrmLoginPage.enterValidUserName("Admin")
    await hrmLoginPage.enterValidPassword("admin123")
    await hrmLoginPage.clickOnLoginBtn()
    await use()
  },
  hrmLaunchSetUp: async({hrmLoginPage},use)=>{
    await hrmLoginPage.launchTheApp()
    await use()
  },
  hrmAdminPage: async({page},use)=>{
    await use(new HrmAdminPage(page));
  },
  hrmAdminSetUp: async({hrmLoginSetUp ,hrmAdminPage},use)=>{
    await hrmAdminPage.clickOnPimAdmBtn()
    await hrmAdminPage.clickOnPimAddBtn()
    await hrmAdminPage.enterPimUserFirstName("Suraj")
    await hrmAdminPage.enterPimUserLastName("Raj")
    await hrmAdminPage.enterPimEmployeeId("321987")
    await hrmAdminPage.clickOnPimSaveBtn()
    await hrmAdminPage.clickOnAdminBtn()
    await hrmAdminPage.clickOnAddBtn()
    await hrmAdminPage.enterUserRole()
    await hrmAdminPage.enterStatus()
    await hrmAdminPage.enterEmployeeName("Suraj Raj")
    await hrmAdminPage.enterUserName("Vikalp KrGspann")
    await hrmAdminPage.enterPassword("prince@12345")
    await hrmAdminPage.enterConfirmPassword("prince@12345")
    await use()
  },
  hrmAdminSearch: async({hrmLoginSetUp, hrmAdminPage},use)=>{
    await hrmAdminPage.clickOnAdminBtn()
    await hrmAdminPage.enterSearchUserName("Vikalp KrGspann")
    await hrmAdminPage.enterSearchUserRole()
    await hrmAdminPage.enterSearchEmployee("Suraj Raj")
    await use()
  }
});

export { expect };

