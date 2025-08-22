import { test, expect } from "./orangeHRMFixutre"

test("Adding an user", async ({ pimLaunch }) => {
    await pimLaunch.addEmployee()
    await pimLaunch.fillName("newuser2", "dontcare", "lastestname")
    await pimLaunch.fillId("56785")
    await pimLaunch.clickSaveEmployee()
    await pimLaunch.navigateToList()
    await pimLaunch.enterSearchName("newuser2")
    await pimLaunch.clickSearch()
    expect(await pimLaunch.recordYes).toBeVisible()

})

test("searching a invalid user", async ({ pimLaunch }) => {
    await pimLaunch.enterSearchName("djcwufufuinvalidbdnsd")
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
    setTimeout(()=>{
    expect( pimLaunch.nicknameVisible).toBeVisible()},2000
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