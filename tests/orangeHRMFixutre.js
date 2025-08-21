import { test as base, expect } from "@playwright/test";
import { HrmLoginPage } from "../pages/loginPageHRM";  
import { HrmClaimPage } from "../pages/claimPageHRM";


export const test = base.extend({
  
  hrmLoginPage: async ({ page }, use) => {
    await use(new HrmLoginPage(page));    
  },


  hrmLoginSetUp: async ({ hrmLoginPage }, use) => {
    await hrmLoginPage.launchTheApp();  
    await hrmLoginPage.enterValidUserName("Admin");  
    await hrmLoginPage.enterValidPassword("admin123");  
    await hrmLoginPage.clickOnLoginBtn();  
    await use(); 
  },


  hrmLaunchSetUp: async ({ hrmLoginPage }, use) => {
    await hrmLoginPage.launchTheApp(); 
    await use();  
  },


  HrmClaimPage: async({page},use)=>{
    await use(new HrmClaimPage(page))
  },
  HrmClaimPageSetup: async({hrmLoginSetUp,HrmClaimPage}, use)=>{
    await HrmClaimPage.clickOnOrangeBtnloc()
    await use()
  }

  
  
});

export { expect };
