export class HrmDashboardPage {

    constructor(page) {

        this.page = page;
        this.dashboardLink = page.getByRole('link', { name: 'Dashboard' });
        this.assignLeaveButton = page.getByRole('button', { name: 'Assign Leave' });
        this.leaveListButton = page.getByRole('button', { name: 'Leave List' });
        this.timesheetsButton = page.getByRole('button', { name: 'Timesheets' });
        this.applyLeaveButton = page.getByRole('button', { name: 'Apply Leave' });
        this.myLeaveButton = page.getByRole('button', { name: 'My Leave' });
        this.myTimesheetButton = page.getByRole('button', { name: 'My Timesheet' });
        this.employeesOnLeaveTodayCanvas = page.locator('div').filter({ hasText: /^Employees on Leave Today$/ }).first();
        this.employeeDistributionBySubUnitCanvas = page.locator('div').filter({ hasText: /^Employee Distribution by Sub Unit$/ }).first();

        this.navigatedToAssignLeavePage = page.getByRole('heading', { name: 'Assign Leave' })
        this.navigatedToLeaveListPage = page.getByRole('listitem').filter({ hasText: 'Leave List' });
        this.navigatedToTimeSheetsPage = page.getByText('Attendance');
        this.navigatedToApplyLeavePage = page.getByRole('heading', { name: 'Apply Leave' });
        this.navigatedToMyLeavePage = page.getByRole('heading', { name: 'My Leave List' });
        this.navigatedToMyTimeSheetPage = page.getByRole('heading', { name: 'My Timesheet' });

    }

    async navigateToDashboard() {
        await this.dashboardLink.click();
    }

    async clickOnDashboardButton() {
        await this.dashboardLink.click();
    }

    async verifyAssignLeaveButtonClickable() {
        await this.assignLeaveButton.click()
    }
    async verifyLeaveListButtonClickable() {
        await this.leaveListButton.click()
    }
    async verifyTimesheetsButtonClickable() {
        await this.timesheetsButton.click()
    }
    async verifyApplyLeaveButtonClickable() {
        await this.applyLeaveButton.click()
    }
    async verifyMyLeaveButtonClickable() {
        await this.myLeaveButton.click()
    }
    async verifyMyTimesheetButtonClickable() {
        await this.myTimesheetButton.click()
    }
    async verifyEmployeesOnLeaveTodayCanvas() {
        await this.employeesOnLeaveTodayCanvas
    }
    async verifyEmployeeDistributionBySubUnitCanvas() {
        await this.employeeDistributionBySubUnitCanvas
    }





}