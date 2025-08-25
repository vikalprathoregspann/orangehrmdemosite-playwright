import { test, expect } from "./orangeHRMFixutre"

test("Adding an user", async ({ pimLaunch }) => {
    await pimLaunch.addEmployee()
    let lastDigits=Math.floor(100+Math.random()*900)
    let firstname="newuser"+lastDigits
    await pimLaunch.fillName(firstname.toString(), "dontcare", "lastestname")
    let id=Math.floor(1000+Math.random()*90000).toString()
    await pimLaunch.fillId(id)
    await pimLaunch.clickSaveEmployee()
    await pimLaunch.navigateToList()
    await pimLaunch.enterSearchName(firstname.toString())
    await pimLaunch.clickSearch()
    expect(await pimLaunch.recordYes).toBeVisible()

})

test("searching a invalid user", async ({ pimLaunch }) => {
    let lastDigits=Math.floor(100+Math.random()*900)
    let invalidName="invaliduser"+lastDigits
    await pimLaunch.enterSearchName(invalidName.toString())
    await pimLaunch.clickSearch()
    expect(await pimLaunch.noRecord).toBeVisible()
})

test("searching a valid user", async ({ pimLaunch }) => {
    const name = await pimLaunch.profile.innerText()
    await pimLaunch.enterSearchName(name)
    await pimLaunch.clickSearch()
    expect(await pimLaunch.recordYes).toBeVisible()
})

test("editing a user name", async ({ pimLaunch }) => {
    await pimLaunch.clickEditButton()
    await pimLaunch.updatingName("thisisupdated")
    await pimLaunch.clickSaveUntilSuccess()
})

test.describe("Single and Multiple delete", async () => {
    test("Single delete", async ({ pimLaunch }) => {
        await pimLaunch.checkFirstDelete()
    })
    test("Multiple delete", async ({ pimLaunch }) => {
        await pimLaunch.checkFirstDelete()
        await pimLaunch.checkSecondDelete()
    })
    test.afterEach("Actual deletion", async ({ pimLaunch }) => {
        await pimLaunch.deleteClick()
        expect(await pimLaunch.deletePopUp).toBeVisible()
    })
})

test("Dropdown visibility check", async ({ pimLaunch }) => {
    await pimLaunch.configurationClick()
    expect(await pimLaunch.configDropDown).toBeVisible()
})

test("Optional setting activation", async ({ pimLaunch }) => {
    await pimLaunch.configurationClick()
    await pimLaunch.clickOptionalFile()
    await pimLaunch.turnInidcatorOn()
    await pimLaunch.clickSave()
    await pimLaunch.navigateToList()
    await pimLaunch.nickNameClick()
    setTimeout(() => {
        expect(pimLaunch.nicknameVisible).toBeVisible()
    }, 2000
    )
})

test("Asserting reports link's functionality", async ({ pimLaunch }) => {
    await pimLaunch.clickReports()
    expect(await pimLaunch.reportsSection).toBeVisible()
})

test("Data Import Link's functionality", async ({ pimLaunch }) => {
    await pimLaunch.configurationClick()
    await pimLaunch.clickDataImport()
    expect(await pimLaunch.notes).toBeVisible()
})