import { test as base, expect } from "@playwright/test";
import { HrmLoginPage } from "../pages/loginPageHRM";

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
  }
});

export { expect };

