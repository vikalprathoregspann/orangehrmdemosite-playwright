import { HrmClaimPage } from "../pages/claimPageHRM";
import {expect, test} from "./orangeHRMFixutre";

test.only('To test change language', async ({ HrmClaimPage,page,HrmClaimPageSetup}) => {
    await HrmClaimPage.clickOnOrangehrmBtn()
    await HrmClaimPage.selectComboxfirst()
    await expect(page.getByRole('link', { name: 'Precios' })).toBeVisible();
   
})
test.only('To test solutions->culture->careerDev', async ({ HrmClaimPage,page, HrmClaimPageSetup}) => {
    await HrmClaimPage.clickOnOrangehrmBtn()
    await HrmClaimPage.clickOnsolutionsBtn()
    await HrmClaimPage.clickOnCultureBtn()
     await expect(page.locator('[id="2"]').getByRole('heading', { name: 'Career Development' })).toBeVisible();
});
