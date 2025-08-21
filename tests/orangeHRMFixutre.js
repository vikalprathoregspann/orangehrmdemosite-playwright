import { test as base, expect } from "@playwright/test";
import { HrmLoginPage } from "../pages/loginPageHRM";
import { recruitmentPage } from "../pages/recruitmentPageHRM";
import { buzzPage } from "../pages/buzzPageHRM";


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



});

export { expect };

