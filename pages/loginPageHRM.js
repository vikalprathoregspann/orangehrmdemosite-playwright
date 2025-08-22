export class HrmLoginPage{
    constructor(page){
        this.page=page
        this.usernameFieldLoc=page.getByRole('textbox', { name: 'Username' })
        this.passwordFieldLoc=page.getByRole('textbox', { name: 'Password' })
        this.loginBtnLoc=page.getByRole('button', { name: 'Login' })
        this.invalidAlertLoc=page.locator(".oxd-alert-content-text")
        this.forgetPasswordlinkLoc=page.locator(".orangehrm-login-forgot-header")
        this.resetPasswordFieldLoc=page.getByRole('textbox', { name: 'Username' })
        this.resetPasswordBtnLoc=page.getByRole('button', { name: 'Reset Password' })
        this.resetMsgLoc=page.locator(".orangehrm-forgot-password-title")
        this.openPimpage=page.getByRole('link', { name: 'PIM' })
    }

    async launchTheApp(){
        await this.page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    }
    async enterValidUserName(validUserName){
        await this.usernameFieldLoc.fill(validUserName)
    }
    async enterValidPassword(validPassword){
        await this.passwordFieldLoc.fill(validPassword)
    }
    async enterInvalidUserName(invalidUserName){
        await this.usernameFieldLoc.fill(invalidUserName)
    }
    async enterInvalidPassword(invalidPassword){
        await this.passwordFieldLoc.fill(invalidPassword)
    }
    async clickOnLoginBtn(){
        await this.loginBtnLoc.click()
    }
    async clickOnForgotPasswordLnk(){
        await this.forgetPasswordlinkLoc.click()
    }
    async enterUserNameForResetPassword(resetUserName){
        await this.resetPasswordFieldLoc.fill(resetUserName)
    }
    async clickOnResetBtn(){
        await this.resetPasswordBtnLoc.click()
    }
    async openPimPage()
    {
        await this.openPimpage.click()
    }
}