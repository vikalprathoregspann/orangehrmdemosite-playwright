//Author : Vikalp
import { HrmDashboardPage } from "../pages/dashboardPageHRM";
import { expect, test } from "./orangeHRMFixutre";

test('Dashboard Clickability check @dashboardTest1', async ({ page, HrmDashboardPage, hrmLoginSetUp }) => {
    await HrmDashboardPage.navigateToDashboard();
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
})

test('Quick Launch Assign Leave Button @dashboardTest2', async ({ HrmDashboardPage, hrmLoginSetUp }) => {
    await HrmDashboardPage.clickOnDashboardButton();
    await HrmDashboardPage.verifyAssignLeaveButtonClickable()
    await expect(HrmDashboardPage.navigatedToAssignLeavePage).toBeVisible();
})

test('Quick Launch Leave List Button @dashboardTest3', async ({ HrmDashboardPage, hrmLoginSetUp }) => {
    await HrmDashboardPage.clickOnDashboardButton();
    await HrmDashboardPage.verifyLeaveListButtonClickable()
    await expect(HrmDashboardPage.navigatedToLeaveListPage).toBeVisible();
})


test('Quick Launch Time Sheet Button @dashboardTest4', async ({ HrmDashboardPage, hrmLoginSetUp }) => {
    await HrmDashboardPage.clickOnDashboardButton();
    await HrmDashboardPage.verifyTimesheetsButtonClickable()
    await expect(HrmDashboardPage.navigatedToTimeSheetsPage).toBeVisible();
})


test('Quick Launch Apply Leave Button @dashboardTest5', async ({ HrmDashboardPage, hrmLoginSetUp }) => {
    await HrmDashboardPage.clickOnDashboardButton();
    await HrmDashboardPage.verifyApplyLeaveButtonClickable()
    await expect(HrmDashboardPage.navigatedToApplyLeavePage).toBeVisible();
})

test('Quick Launch My Leave Button @dashboardTest6', async ({ HrmDashboardPage, hrmLoginSetUp }) => {
    await HrmDashboardPage.clickOnDashboardButton();
    await HrmDashboardPage.verifyMyLeaveButtonClickable()
    await expect(HrmDashboardPage.navigatedToMyLeavePage).toBeVisible();
})

test('Quick Launch My TimeSheet Button @dashboardTest7', async ({ HrmDashboardPage, hrmLoginSetUp }) => {
    await HrmDashboardPage.clickOnDashboardButton();
    await HrmDashboardPage.verifyMyTimesheetButtonClickable()
    await expect(HrmDashboardPage.navigatedToMyTimeSheetPage).toBeVisible();
})

test('Verify Assign Leave Button @dashboardTest8', async ({ HrmDashboardPage, hrmLoginSetUp }) => {
    await expect(HrmDashboardPage.assignLeaveButton).toBeVisible();
})

test('Verify Leave List Button @dashboardTest9', async ({ HrmDashboardPage, hrmLoginSetUp }) => {
    await expect(HrmDashboardPage.leaveListButton).toBeVisible();
})

test('Verify Timesheets Button @dashboardTest10', async ({ HrmDashboardPage, hrmLoginSetUp }) => {
    await expect(HrmDashboardPage.timesheetsButton).toBeVisible();
})

test('Verify Apply Leave Button @dashboardTest11', async ({ HrmDashboardPage, hrmLoginSetUp }) => {
    await expect(HrmDashboardPage.applyLeaveButton).toBeVisible();
})

test('Verify My Leave Button @dashboardTest12', async ({ HrmDashboardPage, hrmLoginSetUp }) => {
    await expect(HrmDashboardPage.myLeaveButton).toBeVisible();
})

test('Verify My Timesheet Button @dashboardTest13', async ({ HrmDashboardPage, hrmLoginSetUp }) => {
    await expect(HrmDashboardPage.myTimesheetButton).toBeVisible();
})

test('Verify Employees on Leave Today Canvas @dashboardTest14', async ({ HrmDashboardPage, hrmLoginSetUp }) => {
    await expect(HrmDashboardPage.employeesOnLeaveTodayCanvas).toBeVisible();
})

test('Verify Employee Distribution by Sub Unit Canvas @dashboardTest15', async ({ HrmDashboardPage, hrmLoginSetUp }) => {
    await expect(HrmDashboardPage.employeeDistributionBySubUnitCanvas).toBeVisible();
})


