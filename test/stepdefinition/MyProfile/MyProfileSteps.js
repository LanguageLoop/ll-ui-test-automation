
When(/^I click reset password button$/,  function(){
   action.domStatusComplete();
   action.waitForElementClickable(myProfilePage.editDetailsLink)
   action.elementExists(myProfilePage.resetPasswordButton)
   action.clickElement(myProfilePage.resetPasswordButton)
 })

 When(/^I click edit profile details link$/, function(){
     browser.pause(4000)
     action.waitForElementClickable(myProfilePage.editDetailsLink)
     action.clickElement(myProfilePage.editDetailsLink)
     let contractorDetailsModal=$("//span[text()[contains(.,'My Details')]]")
     contractorDetailsModal.waitForDisplayed({timeout:10000, timeoutMsg:'modal not displayed within 10s', interval:1000})
 })

 When(/^I enter preferred name "(.*)"$/, function(preferredname){
     action.enterValue(myProfilePage.preferredNameInput,preferredname)
 })

 When(/^I enter abn "(.*)"$/, function(abn){
     action.enterValue(myProfilePage.abnInput,abn)
 })

 When(/^I click check abn button$/, function(){
     action.clickElement(myProfilePage.abnCheckButton)
 })

 When(/^I enter company name "(.*)"$/, function(companyname){
     action.enterValue(myProfilePage.companyNameInput,companyname)
 })

 When(/^I click save button in my details$/, function(){
     action.clickElement(myProfilePage.saveButton)
     browser.waitUntil(()=>browser.getTitle()==="PreviewContractorProfile" ,{timeout:10000, timeoutMsg:'save not happened within 10s', interval:1000 })
 })

 When(/^I click on emergency contact link$/, function(){
     browser.pause(2000)
     action.elementExists(myProfilePage.emergencyContactLink)
     action.clickElement(myProfilePage.emergencyContactLink)
 })

 When(/^I click on manage emergency contact link$/, function(){
     action.clickElement(myProfilePage.manageEmergencyContactLink)
     browser.pause(2000)
 })

 When(/^I enter emergency contact firstname "(.*)"$/, function(firstname){
     action.enterValue(myProfilePage.emergencyFirstNameInput,firstname)
 })

 When(/^I enter emergency contact lastname "(.*)"$/, function(lastname){
    action.enterValue(myProfilePage.emergencyLastNameInput,lastname)
})

When(/^I enter emergency contact phonenumber "(.*)"$/, function(phonenumber){
    action.enterValue(myProfilePage.emergencyPhoneNumberInput,phonenumber)
})

When(/^I enter emergency contact address "(.*)"$/, function(address){
    action.enterValue(myProfilePage.emergencyAddressInput,address)
})

When(/^I enter emergency contact email "(.*)"$/, function(email){
    action.enterValue(myProfilePage.emergencyEmailInput,email)
})

When(/^I select emergency contact relationship "(.*)"$/, function(relationship){
    action.selectTextFromDropdown(myProfilePage.emergencyRelationshipDropdown,relationship)
})

When(/^I select emergency contact country "(.*)"$/, function(country){
    action.selectTextFromDropdown(myProfilePage.emergencyCountryDropdown,country)
})

When(/^I click save button in emergency contact details$/, function(){
    action.clickElement(myProfilePage.saveEmergencyContactButton)
    browser.pause(2000)
})

When(/^I click add leave link$/, function(){
    action.clickElement(myProfilePage.addLeaveLink)
})

When(/^I enter leave start date "(.*)"$/, function(startdate){
    action.enterValueAndPressReturn(myProfilePage.leaveStartDateInput,startdate)
})

When(/^I enter leave end date "(.*)"$/, function(enddate){
    action.enterValueAndPressReturn(myProfilePage.leaveEndDateInput,enddate)
})

When(/^I click onsite checkbox$/, function(){
    action.clickElement(myProfilePage.onSiteCheckbox)
})

When(/^I click add leave button$/, function(){
    action.clickElement(myProfilePage.addLeaveButton)
    browser.pause(2000)
})

When(/^I delete leave$/, function(){
    action.clickElement(myProfilePage.leaveToggleButton)
    browser.pause(2000)
    action.clickElement(myProfilePage.deleteLeaveLink)
})

When(/^I click expired language toggle$/, function(){
    action.clickElement(myProfilePage.languageShowExpiredToggle)
})

When(/^I upload statutory declaration document$/, function(){
    action.clickElement(myProfilePage.statutoryDeclarationToggleButton)
    browser.pause(2000)
    action.clickElement(myProfilePage.statutoryDeclarationUploadFileLink)
    browser.pause(2000)
    action.uploadFile(myProfilePage.clearanceDocumentUploadControl,"./test/data/Statutory Declaration.docx")
    browser.pause(2000)
    $$('//*[contains(@id,"wtcontContractorUploadAction")]//input[@value="Save"]')[1].click()
    browser.pause(2000)
})

When(/^I upload work eligibility document$/, function(){
    action.clickElement(myProfilePage.workEligibilityUploadLink)
    browser.pause(2000)
    action.uploadFile(myProfilePage.workEligibilityDocumentUploadControl,"./test/data/Working rights.docx")
    browser.pause(2000)
    $$('//*[contains(@id,"wtcontContractorUploadAction")]//input[@value="Save"]')[0].click()
    browser.pause(2000)
})

When(/^I upload hepatitis document$/, function(){
    action.clickElement(myProfilePage.hepatitisToggleButton)
    browser.pause(2000)
    action.clickElement(myProfilePage.hepatitisUploadFileLink)
    browser.pause(2000)
    action.uploadFile(myProfilePage.clearanceDocumentUploadControl,"./test/data/Hepatitis.docx")
    browser.pause(2000)
    $$('//*[contains(@id,"wtcontContractorUploadAction")]//input[@value="Save"]')[1].click()
    browser.pause(2000)
})

When(/^I upload working with children document$/, function(){
    action.clickElement(myProfilePage.workingWithChildrenToggleButton)
    browser.pause(2000)
    action.clickElement(myProfilePage.workingWithChildrenUploadFileLink)
    browser.pause(2000)
    action.uploadFile(myProfilePage.clearanceDocumentUploadControl,"./test/data/Working With Children.docx")
    browser.pause(2000)
    $$('//*[contains(@id,"wtcontContractorUploadAction")]//input[@value="Save"]')[1].click()
    browser.pause(2000)
})

Then(/^I verify the statutory declaration document is uploaded$/, function(){
    browser.pause(2000)
    chai.expect(action.elementExists(myProfilePage.statutoryDocumentLink)).to.be.true
})

Then(/^I verify the work eligibility document is uploaded$/, function(){
    chai.expect(action.elementExists(myProfilePage.workEligibilityDocumentLink)).to.be.true
})

Then(/^I verify the hepatitis document is uploaded$/, function(){
    chai.expect(action.elementExists(myProfilePage.hepatitisDocumentLink)).to.be.true
})

Then(/^I verify the working with children document is uploaded$/, function(){
    chai.expect(action.elementExists(myProfilePage.workingWithChildrenUploadFileLink)).to.be.true
})

Then(/^I verify naati table is present$/, function(){
    chai.expect(action.elementExists(myProfilePage.naatiTable)).to.be.true
})

 Then(/^I verify the reset password email confirmation message$/, function(){
    chai.expect(action.elementExists(myProfilePage.resetEmailConfirmationMessage)).to.be.true
 })

 Then(/^I verify the profile details are updated "(.*)","(.*)","(.*)"$/,function(preferredname,abn,companyname){
    chai.expect(myProfilePage.preferredNameInput.getAttribute("value")==preferredname).to.be.true
    chai.expect(myProfilePage.companyNameInput.getAttribute("value")==companyname).to.be.true
    chai.expect(myProfilePage.abnInput.getAttribute("value")==abn).to.be.true
 })

 Then(/^I verify the emergency contact details are updated "(.*)","(.*)","(.*)","(.*)","(.*)","(.*)","(.*)"$/,function(firstname,lastname,phonenumber,relationship,address,country,email){
    action.domStatusComplete();
    action.elementExists(myProfilePage.emergencyFirstNameInput)
    chai.expect(myProfilePage.emergencyFirstNameInput.getAttribute("value")==firstname).to.be.true
    chai.expect(myProfilePage.emergencyLastNameInput.getAttribute("value")==lastname).to.be.true
    chai.expect(myProfilePage.emergencyPhoneNumberInput.getAttribute("value").replace(/\s/g,"")==phonenumber).to.be.true
    chai.expect(myProfilePage.emergencyRelationshipDropdownSelectedText.getText()==relationship).to.be.true
    chai.expect(myProfilePage.emergencyAddressInput.getText()==address).to.be.true
    chai.expect(myProfilePage.emergencyCountryDropdownSelectedText.getText()==country).to.be.true
    chai.expect(myProfilePage.emergencyEmailInput.getAttribute("value")==email).to.be.true
 })

 Then(/^I verify the leave dates "(.*)","(.*)" are added$/, function(startdate,enddate){
    var actual_startdate= myProfilePage.leaveTable.$$('tr')[1].$$('td')[0].getText()
    var actual_enddate=  myProfilePage.leaveTable.$$('tr')[1].$$('td')[1].getText()
     console.log("TABLE :"+actual_startdate +" :: "+actual_enddate)
     chai.expect(startdate==actual_startdate).to.be.true
     chai.expect(enddate==actual_enddate).to.be.true
 })