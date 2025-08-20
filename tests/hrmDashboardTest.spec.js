import { HrmDashboardPage } from "../pages/dashboardPageHRM";
import {expect, test} from "./orangeHRMFixutre";

test('Dashboard Clickability check', async ({page, HrmDashboardPage, hrmLoginSetUp}) => {
    await HrmDashboardPage.navigateToDashboard();

    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");


})

test('Quick Launch Assign Leave Button ', async({HrmDashboardPage, hrmLoginSetUp})=>{
    await HrmDashboardPage.clickOnDashboardButton();
    await HrmDashboardPage.verifyAssignLeaveButtonClickable()
    await expect(HrmDashboardPage.navigatedToAssignLeavePage).toBeVisible();

})


test('Quick Launch Leave List Button ', async({HrmDashboardPage, hrmLoginSetUp})=>{
    await HrmDashboardPage.clickOnDashboardButton();
    await HrmDashboardPage.verifyLeaveListButtonClickable()
    await expect(HrmDashboardPage.navigatedToLeaveListPage).toBeVisible();

})


test('Quick Launch Time Sheet Button', async({HrmDashboardPage, hrmLoginSetUp})=>{
    await HrmDashboardPage.clickOnDashboardButton();
    await HrmDashboardPage.verifyTimesheetsButtonClickable()
    await expect(HrmDashboardPage.navigatedToTimeSheetsPage).toBeVisible();

})


test('Quick Launch Apply Leave Button', async({HrmDashboardPage, hrmLoginSetUp})=>{
    await HrmDashboardPage.clickOnDashboardButton();
    await HrmDashboardPage.verifyApplyLeaveButtonClickable()
    await expect(HrmDashboardPage.navigatedToApplyLeavePage).toBeVisible();

})

test('Quick Launch My Leave Button', async({HrmDashboardPage, hrmLoginSetUp})=>{
    await HrmDashboardPage.clickOnDashboardButton();
    await HrmDashboardPage.verifyMyLeaveButtonClickable()
    await expect(HrmDashboardPage.navigatedToMyLeavePage).toBeVisible();

})
test('Quick Launch My TimeSheet Button', async({HrmDashboardPage, hrmLoginSetUp})=>{
    await HrmDashboardPage.clickOnDashboardButton();
    await HrmDashboardPage.verifyMyTimesheetButtonClickable()
    await expect(HrmDashboardPage.navigatedToMyTimeSheetPage).toBeVisible();

})




test('Verify Assign Leave Button', async ({HrmDashboardPage, hrmLoginSetUp}) => {
    await expect(HrmDashboardPage.assignLeaveButton).toBeVisible();
})

test('Verify Leave List Button', async ({HrmDashboardPage, hrmLoginSetUp}) => {
        await expect(HrmDashboardPage.leaveListButton).toBeVisible();
})

test('Verify Timesheets Button', async ({HrmDashboardPage, hrmLoginSetUp}) => {
        await expect(HrmDashboardPage.timesheetsButton).toBeVisible();
})

test('Verify Apply Leave Button', async ({HrmDashboardPage, hrmLoginSetUp}) => {
        await expect(HrmDashboardPage.applyLeaveButton).toBeVisible();
})

test('Verify My Leave Button', async ({HrmDashboardPage, hrmLoginSetUp}) => {
        await expect(HrmDashboardPage.myLeaveButton).toBeVisible();
})

test('Verify My Timesheet Button', async ({HrmDashboardPage, hrmLoginSetUp}) => {
        await expect(HrmDashboardPage.myTimesheetButton).toBeVisible();
})

test('Verify Employees on Leave Today Canvas', async ({HrmDashboardPage, hrmLoginSetUp}) => {
    await expect(HrmDashboardPage.employeesOnLeaveTodayCanvas).toBeVisible();
})
test('Verify Employee Distribution by Sub Unit Canvas', async ({HrmDashboardPage, hrmLoginSetUp}) => {
    await expect(HrmDashboardPage.employeeDistributionBySubUnitCanvas).toBeVisible();
})


