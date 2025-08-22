import { test as base, expect } from "@playwright/test";
import { HrmLoginPage } from "../pages/loginPageHRM";
import { HrmAdminPage } from "../pages/adminPageHRM";
import { recruitmentPage } from "../pages/recruitmentPageHRM";
import { buzzPage } from "../pages/buzzPageHRM";
import { PimPage } from "../pages/pimPageHRM";
import { HrmDashboardPage } from "../pages/dashboardPageHRM";
import { HrmClaimPage } from "../pages/claimPageHRM";

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
  },
  recruitmentpage: async({page},use)=>{
    await use(new recruitmentPage(page));
  },
  buzzpageSetup: async({page},use)=>{
    await use(new buzzPage(page))
  },
  hrmBuzzLoginSetUp: async({hrmLoginSetUp,buzzpageSetup},use)=>{
    await buzzpageSetup.clickOnBuzzBtn()
    await use();
  },
  hrmRecruitmentLoginSetUp: async({hrmLoginSetUp,recruitmentpage},use)=>{
    await recruitmentpage.clickOnRecruitmentBtn()
    await use();
  },
  HrmDashboardPage: async({page},use)=>{
    await use(new HrmDashboardPage(page));
  },
  pimLaunch:async({hrmLoginSetUp,page},use)=>{
    await page.getByRole('link', { name: 'PIM' }).click()
    await use(new PimPage(page))}
  ,
  HrmClaimPage: async({page},use)=>{
    await use(new HrmClaimPage(page))
  },
  HrmClaimPageSetup: async({hrmLoginSetUp,HrmClaimPage}, use)=>{
    await HrmClaimPage.clickOnOrangeBtnloc()
    await use()
  }

});

export { expect }


