import { test, expect } from "./orangeHRMFixutre.js";
import { recruitmentPage } from "../pages/recruitmentPageHRM";

test('To test add button', async ({ recruitmentpage,hrmRecruitmentLoginSetUp,page}) => {
  await recruitmentpage.clickOnAddBtn()
  await recruitmentpage.enterFirstName("kanishka")
  await recruitmentpage.enterLastName("reddy")
  await recruitmentpage. enterEmailtxt("k@gmail.com")
  await recruitmentpage.clickOnSaveBtn()
  await expect(page.getByRole('heading', { name: 'Application Stage' })).toBeVisible();
});
test('To test cancel button', async ({ recruitmentpage,hrmRecruitmentLoginSetUp,page}) => {
  await recruitmentpage.clickOnAddBtn()
  await recruitmentpage.enterFirstName("kanishka")
  await recruitmentpage.enterLastName("reddy")
  await recruitmentpage.clickOnCancelBtn()
  await expect(page.getByRole('button', { name: 'Reset' })).toBeVisible();
});
test('To test missedField alert', async ({ recruitmentpage,hrmRecruitmentLoginSetUp,page}) => {
  await recruitmentpage.clickOnAddBtn()
  await recruitmentpage.enterLastName("reddy")
  await recruitmentpage. enterEmailtxt("kanishka@gmail.com")
  await recruitmentpage.clickOnSaveBtn()
  await expect(page.getByText('Required').first()).toBeVisible();
});
test('To test vacanciesBtn', async ({ recruitmentpage,hrmRecruitmentLoginSetUp,page}) => {
  await recruitmentpage.clickOnVacanciesBtn()
  await expect(page.getByRole('heading', { name: 'Vacancies' })).toBeVisible();
})


