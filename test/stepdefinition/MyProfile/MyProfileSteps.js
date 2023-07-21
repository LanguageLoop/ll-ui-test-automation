
When(/^I click reset password button$/,  function(){
   action.domStatusComplete();
   action.isExistingWait(myProfilePage.editDetailsLink,30000,"Edit details link in My profile page");
   action.waitForElementClickable(myProfilePage.editDetailsLink,"Edit details link in My profile page")
   action.isVisibleWait(myProfilePage.resetPasswordButton,30000,"Reset password button in My profile page");
   action.elementExists(myProfilePage.resetPasswordButton,"Reset password button in My profile page")
   action.clickElement(myProfilePage.resetPasswordButton,"Reset password button in My profile page")
 })

 When(/^I click edit profile details link$/, function(){
     browser.pause(4000)
     action.isClickableWait(myProfilePage.editDetailsLink,30000,"Edit details link in My profile page")
     action.waitForElementClickable(myProfilePage.editDetailsLink,"Edit details link in My profile page")
     action.clickElement(myProfilePage.editDetailsLink,"Edit details link in My profile page")
     let contractorDetailsModal=$("//span[text()[contains(.,'My Details')]]")
     contractorDetailsModal.waitForDisplayed({timeout:10000, timeoutMsg:'modal not displayed within 10s', interval:1000})
 })

 When(/^I enter preferred name "(.*)"$/, function(preferredname){
     action.enterValue(myProfilePage.preferredNameInput,preferredname,"Preferred name text box in My profile page")
 })

 When(/^I enter abn "(.*)"$/, function(abn){
     action.enterValue(myProfilePage.abnInput,abn,"ABN text box in My profile page")
 })

 When(/^I click check abn button$/, function(){
     action.clickElement(myProfilePage.abnCheckButton,"ABN Check button in My profile page")
 })

 When(/^I enter company name "(.*)"$/, function(companyname){
     action.enterValue(myProfilePage.companyNameInput,companyname,"Company name text box in My profile page")
 })

 When(/^I click save button in my details$/, function(){
     action.clickElement(myProfilePage.saveButton,"Save button in My profile page")
     browser.waitUntil(()=>browser.getTitle()==="PreviewContractorProfile" ,{timeout:10000, timeoutMsg:'save not happened within 10s', interval:1000 })
 })

 When(/^I click on emergency contact link$/, function(){
     browser.pause(2000)
     action.elementExists(myProfilePage.emergencyContactLink,"Emergency contact link in My profile page")
     action.clickElement(myProfilePage.emergencyContactLink,"Emergency contact link in My profile page")
 })

 When(/^I click on manage emergency contact link$/, function(){
     action.clickElement(myProfilePage.manageEmergencyContactLink,"Manage Emergency contact link in My profile page")
     browser.pause(2000)
 })

 When(/^I enter emergency contact firstname "(.*)"$/, function(firstname){
     action.enterValue(myProfilePage.emergencyFirstNameInput,firstname,"Emergency first name text box in My profile page")
 })

 When(/^I enter emergency contact lastname "(.*)"$/, function(lastname){
    action.enterValue(myProfilePage.emergencyLastNameInput,lastname,"Emergency last name text box in My profile page")
})

When(/^I enter emergency contact phonenumber "(.*)"$/, function(phonenumber){
    action.enterValue(myProfilePage.emergencyPhoneNumberInput,phonenumber,"Emergency phone number text box in My profile page")
})

When(/^I enter emergency contact address "(.*)"$/, function(address){
    action.enterValue(myProfilePage.emergencyAddressInput,address,"Emergency Address text box in My profile page")
})

When(/^I enter emergency contact email "(.*)"$/, function(email){
    action.enterValue(myProfilePage.emergencyEmailInput,email,"Emergency Email text box in My profile page")
})

When(/^I select emergency contact relationship "(.*)"$/, function(relationship){
    action.selectTextFromDropdown(myProfilePage.emergencyRelationshipDropdown,relationship,"Emergency relationship dropdown in My profile page")
})

When(/^I select emergency contact country "(.*)"$/, function(country){
    action.selectTextFromDropdown(myProfilePage.emergencyCountryDropdown,country,"Emergency country dropdown in My profile page")
})

When(/^I click save button in emergency contact details$/, function(){
    action.clickElement(myProfilePage.saveEmergencyContactButton,"Save Emergency contact button in My profile page")
    browser.pause(2000)
})

When(/^I click add leave link$/, function(){
    action.clickElement(myProfilePage.addLeaveLink,"Add leave link in My profile page")
})

When(/^I enter leave start date "(.*)"$/, function(startdate){
    action.enterValueAndPressReturn(myProfilePage.leaveStartDateInput,startdate,"Leave start date text box in My profile page")
})

When(/^I enter leave end date "(.*)"$/, function(enddate){
    action.enterValueAndPressReturn(myProfilePage.leaveEndDateInput,enddate,"Leave end date text box in My profile page")
})

When(/^I click onsite checkbox$/, function(){
    action.clickElement(myProfilePage.onSiteCheckbox,"Onsite checkbox in My profile page")
})

When(/^I click add leave button$/, function(){
    action.clickElement(myProfilePage.addLeaveButton,"Add leave button in My profile page")
    browser.pause(2000)
})

When(/^I delete leave$/, function(){
    action.clickElement(myProfilePage.leaveToggleButton,"Leave toggle button in My profile page")
    browser.pause(2000)
    action.clickElement(myProfilePage.deleteLeaveLink,"Delete leave link in My profile page")
})

When(/^I click expired language toggle$/, function(){
    action.clickElement(myProfilePage.languageShowExpiredToggle,"Language show expired toggle in My profile page")
})

When(/^I upload statutory declaration document$/, function(){
    action.clickElement(myProfilePage.statutoryDeclarationToggleButton,"Statutory declaration toggle button in My profile page")
    browser.pause(2000)
    action.clickElement(myProfilePage.statutoryDeclarationUploadFileLink,"Statutory declaration Upload file link in My profile page")
    browser.pause(2000)
    action.uploadFile(myProfilePage.clearanceDocumentUploadControl,"./test/data/Statutory Declaration.docx","Clearance document Upload file control in My profile page")
    browser.pause(2000)
    action.isClickableWait(myProfilePage.saveButtonOnProofOfClearancePopup,20000,"Save button Working with children popup in My profile page");
    action.clickElement(myProfilePage.saveButtonOnProofOfClearancePopup,"Save button Working with children popup in My profile page");
    browser.pause(2000)
})

When(/^I upload work eligibility document$/, function(){
    action.clickElement(myProfilePage.workEligibilityUploadLink,"Work eligibility upload link in My profile page")
    browser.pause(2000)
    action.uploadFile(myProfilePage.workEligibilityDocumentUploadControl,"./test/data/Working rights.docx","Work eligibility document upload control in My profile page")
    browser.pause(2000)
    action.isClickableWait(myProfilePage.saveButtonOnProofOfClearancePopup,20000,"Save button Working with children popup in My profile page");
    action.clickElement(myProfilePage.saveButtonOnProofOfClearancePopup,"Save button Working with children popup in My profile page");
    browser.pause(2000)
})

When(/^I upload hepatitis document$/, function(){
    action.clickElement(myProfilePage.hepatitisToggleButton,"Hepatitis toggle button in My profile page")
    browser.pause(2000)
    action.clickElement(myProfilePage.hepatitisUploadFileLink,"Hepatitis upload file link in My profile page")
    browser.pause(2000)
    action.uploadFile(myProfilePage.clearanceDocumentUploadControl,"./test/data/Hepatitis.docx","Clearance document upload control in My profile page")
    browser.pause(2000)
    action.isClickableWait(myProfilePage.saveButtonOnProofOfClearancePopup,20000,"Save button Working with children popup in My profile page");
    action.clickElement(myProfilePage.saveButtonOnProofOfClearancePopup,"Save button Working with children popup in My profile page");
    browser.pause(2000)
})

When(/^I upload working with children document$/, function(){
    action.isVisibleWait(myProfilePage.workingWithChildrenToggleButton,20000,"Working with children toggle button in My profile page")
    action.clickElement(myProfilePage.workingWithChildrenToggleButton,"Working with children toggle button in My profile page")
    browser.pause(2000)
    action.isVisibleWait(myProfilePage.workingWithChildrenUploadFileLink,20000,"Working with children upload file link in My profile page")
    action.clickElement(myProfilePage.workingWithChildrenUploadFileLink,"Working with children upload file link in My profile page")
    browser.pause(2000)
    action.uploadFile(myProfilePage.clearanceDocumentUploadControl,"./test/data/Working With Children.docx","Clearance document upload control in My profile page")
    browser.pause(2000)
    action.isClickableWait(myProfilePage.saveButtonOnProofOfClearancePopup,20000,"Save button Working with children popup in My profile page");
    action.clickElement(myProfilePage.saveButtonOnProofOfClearancePopup,"Save button Working with children popup in My profile page");
    browser.pause(2000)
})

Then(/^I verify the statutory declaration document is uploaded$/, function(){
    browser.pause(2000)
    chai.expect(action.elementExists(myProfilePage.statutoryDocumentLink,"Statutory document link in My profile page")).to.be.true
})

Then(/^I verify the work eligibility document is uploaded$/, function(){
    chai.expect(action.elementExists(myProfilePage.workEligibilityDocumentLink,"Work eligibility document link in My profile page")).to.be.true
})

Then(/^I verify the hepatitis document is uploaded$/, function(){
    chai.expect(action.elementExists(myProfilePage.hepatitisDocumentLink,"Hepatitis document link in My profile page")).to.be.true
})

Then(/^I verify the working with children document is uploaded$/, function(){
    chai.expect(action.elementExists(myProfilePage.workingWithChildrenUploadFileLink,"Working with children document link in My profile page")).to.be.true
})

Then(/^I verify naati table is present$/, function(){
    chai.expect(action.elementExists(myProfilePage.naatiTable,"Naati table in My profile page")).to.be.true
})

 Then(/^I verify the reset password email confirmation message$/, function(){
    chai.expect(action.elementExists(myProfilePage.resetEmailConfirmationMessage,"Reset email configuration message in My profile page")).to.be.true
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

When(/^the contractor is viewing their profile$/, function () {
    action.isVisibleWait(myProfilePage.myProfilePageHeader,30000,"My Profile page header");
    let pageTitleActual = action.getPageTitle();
    chai.expect(pageTitleActual).to.equal("PreviewContractorProfile");
})

Then(/^they will see the On-demand Telephone Interpreting Availability block above Work Availability$/, function () {
    let ODTIAvailabilityBlockDisplayStatus = action.isVisibleWait(myProfilePage.ODTIAvailabilityBlock, 20000, "On-demand Telephone Interpreting Availability block in My profile page");
    chai.expect(ODTIAvailabilityBlockDisplayStatus).to.be.true;
    let ODTIAvailabilityBlockAboveWorkAvailabilityDisplayStatus = action.isVisibleWait(myProfilePage.ODTIAvailabilityBlockAboveWorkAvailability, 20000, "On-demand Telephone Interpreting Availability block above Work Availability in My profile page");
    chai.expect(ODTIAvailabilityBlockAboveWorkAvailabilityDisplayStatus).to.be.true;
})