//Author : Sakshi
export class HrmClaimPage{
    constructor(page){
        this.page =page
        this.orangehrmBtn = page.getByRole('link', { name: 'Recruitment' })
        this.orangehrmBtnLoc = page.getByRole('link', { name: 'client brand banner' })
        this.selectComboxLoc=page.getByRole('combobox')
        this.selectSolutionsBtnLoc=page.getByRole('link', { name: 'Solutions' })
        this.cultureLoc=page.getByRole('link', { name: 'Culture' })
        this.carrerDevLoc=page.getByRole('main').locator('a').filter({ hasText: 'Career Development' })
    }

     async clickOnCarrerDevBtn(){
        await this.carrerDevLoc.click()
    }
     async clickOnCultureBtn(){
        await this.cultureLoc.click()
    }
     async clickOnsolutionsBtn(){
        await this.selectSolutionsBtnLoc.click()
    }
     async clickOnOrangehrmBtn(){
        await this.orangehrmBtnLoc.click()
    }
    async selectComboxfirst(){
        await this.selectComboxLoc.selectOption('/es')
    }


    async clickOnOrangeBtnloc() {
        await this.orangehrmBtn.click()
    }
}


