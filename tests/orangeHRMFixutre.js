import { test as base, expect } from "@playwright/test";
import { HrmLoginPage } from "../pages/loginPageHRM";
import { PimPage } from "../pages/pimPageHRM";
import { HrmDashboardPage } from "../pages/dashboardPageHRM";

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
  HrmDashboardPage: async({page},use)=>{
    await use(new HrmDashboardPage(page));
  },
  pimLaunch:async({hrmLoginSetUp,page},use)=>{
    await page.getByRole('link', { name: 'PIM' }).click()
    await use(new PimPage(page))}
});

export { expect }


