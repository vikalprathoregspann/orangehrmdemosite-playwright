import { PimPage } from "../pages/pimPageHRM"
import {test,expect} from "./orangeHRMFixutre"

 test("Adding an user",async({pimLaunch})=>
{
   await pimLaunch.addEmployee()
   await pimLaunch.fillName("newuser2","dontcare","lastestname")
   await pimLaunch.fillId("56785")
   await pimLaunch.clickSaveEmployee()
   await pimLaunch.navigateToList()
   await pimLaunch.enterSearchName("newuser2")
   await pimLaunch.clickSearch()
   await pimLaunch.assertRecordFound()
   
})
test ("searching a invalid user",async ({pimLaunch})=>
{
    await pimLaunch.enterSearchName("djcwufufuinvalidbdnsd")
   await pimLaunch.clickSearch()
   await pimLaunch.assertNorecordFound()
   

})
test ("searching a valid user",async ({pimLaunch})=>
{    


   const name=await pimLaunch.profile.innerText()
   await pimLaunch.enterSearchName(name)
   await pimLaunch.clickSearch()
   await pimLaunch.assertRecordFound()
   
   

})

test("editing a user name",async({pimLaunch})=>{
  await pimLaunch.clickEditButton()
  await pimLaunch.updatingName("thisisupdated")
  await pimLaunch.clickSaveUntilSuccess()

  

})

test.describe("Single and Multiple delete",async()=>{
  test("Single delete",async({pimLaunch})=>{
     await pimLaunch.checkFirstDelete()
  })
  test("Multiple delete",async({pimLaunch})=>
{
    await pimLaunch.checkFirstDelete()
    await pimLaunch.checkSecondDelete()
})
test.afterEach("Actual deletion",async({pimLaunch})=>
{
    await pimLaunch.deleteClick()
    await pimLaunch.assertDeleteConfirmation()

})


})

test("Dropdown visibility check",async({pimLaunch})=>{
    await pimLaunch.configurationClick()
    await pimLaunch.assertDropDownVisible()
})

test("Optional setting activation",async({pimLaunch})=>{
    await pimLaunch.configurationClick()
    await pimLaunch.clickOptionalFile()
    await pimLaunch.turnInidcatorOn()
    await pimLaunch.clickSave()
    await pimLaunch.navigateToList()
    await pimLaunch.nickNameClick()
    await pimLaunch.assertNickName()
})

test("Asserting reports link's functionality",async({pimLaunch})=>{
   await pimLaunch.clickReports()
   await pimLaunch.assertReportsDisplayed()
    
})

test("Data Import Link's functionality",async({pimLaunch})=>{
    await pimLaunch.configurationClick()
    await pimLaunch.clickDataImport()
    await pimLaunch.AssertPresenceOfNote()
    
})