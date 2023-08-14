
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

Then(/^the contractor’s login status and preferred phone is displayed$/, function () {
    let contractorLoginStatusAndPreferredPhoneDisplayStatus = action.isVisibleWait(myProfilePage.contractorLoginStatusAndPreferredPhone, 20000, "Contractor login status and preferred phone block in My profile page");
    chai.expect(contractorLoginStatusAndPreferredPhoneDisplayStatus).to.be.true;
})

Then(/^the section is closed and text Not Activated is displayed$/, function () {
    let notActivatedTextDisplayStatus = action.isVisibleWait(myProfilePage.notActivatedText, 20000, "Not Activated Text in My profile page");
    chai.expect(notActivatedTextDisplayStatus).to.be.true;
})

Then(/^the contractor’s log out status text is displayed with options Mobile and Home radio options with corresponding phone numbers$/, function () {
    let contractorLogonLogoffStatusTextDisplayStatus = action.isVisibleWait(myProfilePage.contractorLogonLogoffStatusText, 20000, "Contractor Logon Logoff Status Text in My profile page");
    chai.expect(contractorLogonLogoffStatusTextDisplayStatus).to.be.true;
    let mobileRadioOptionWithPhoneNumberDisplayStatus = action.isVisibleWait(myProfilePage.mobileRadioOptionWithPhoneNumber, 20000, "Mobile radio option with corresponding phone number in My profile page");
    chai.expect(mobileRadioOptionWithPhoneNumberDisplayStatus).to.be.true;
    let homeRadioOptionWithPhoneNumberDisplayStatus = action.isVisibleWait(myProfilePage.homeRadioOptionWithPhoneNumber, 20000, "Home radio option with corresponding phone number in My profile page");
    chai.expect(homeRadioOptionWithPhoneNumberDisplayStatus).to.be.true;
})

When(/^home phone number option is selected$/, function () {
    action.clickElement(myProfilePage.homeRadioOptionWithPhoneNumber, "Home radio option with corresponding phone number in My profile page");
    let homeRadioOptionWithPhoneNumberSelectedStatus = action.isSelectedWait(myProfilePage.homeRadioOptionWithPhoneNumber, 20000, "Home radio option with corresponding phone number in My profile page");
    chai.expect(homeRadioOptionWithPhoneNumberSelectedStatus).to.be.true;
})

When(/^click on Log on button$/, function () {
    action.isVisibleWait(myProfilePage.logonButton,10000, "Log On button in My profile page");
    action.clickElement(myProfilePage.logonButton, "Log On button in My profile page");
})

Then(/^the contractor’s login available status text is displayed with selected phone numbers "(.*)"$/, function (phoneOption) {
    action.isVisibleWait(myProfilePage.loginAvailableStatusText,10000, "Log On available status text in My profile page");
    let selectedPhoneNumberOption = $(myProfilePage.selectedPhoneNumberOptionDynamicLocator.replace("<dynamic>",phoneOption));
    let selectedPhoneNumberOptionDisplayStatus = action.isVisibleWait(selectedPhoneNumberOption, 20000, "Selected phone number option " + phoneOption + " in My profile page");
    chai.expect(selectedPhoneNumberOptionDisplayStatus).to.be.true;
})

Then(/^the button Logoff button is displayed$/, function () {
    let logoffButtonDisplayStatus = action.isVisibleWait(myProfilePage.logoffButton, 20000, "Log off button in My profile page");
    chai.expect(logoffButtonDisplayStatus).to.be.true;
})

When(/^click on Log off button$/, function () {
    action.isVisibleWait(myProfilePage.logoffButton,10000, "Log Off button in My profile page");
    action.clickElement(myProfilePage.logoffButton, "Log Off button in My profile page");
})

Then(/^the button Logon button is displayed$/, function () {
    let logonButtonDisplayStatus = action.isVisibleWait(myProfilePage.logonButton, 20000, "Log on button in My profile page");
    chai.expect(logonButtonDisplayStatus).to.be.true;
})

Then(/^the user is logged in with default phone number selected under ‘On-demand Telephone Interpreting Availability’ section$/, function () {
    let contractorLoggedInWithDefaultPhoneSelectedDisplayStatus = action.isVisibleWait(myProfilePage.contractorLoggedInWithDefaultPhoneSelected, 20000, "Contractor logged in with default phone number selected under Text in My profile page");
    chai.expect(contractorLoggedInWithDefaultPhoneSelectedDisplayStatus).to.be.true;
})

Then(/^the contractor’s current login status is NOT displayed$/, function () {
    let contractorLoginStatusDisplayStatus = action.isVisibleWait(myProfilePage.contractorLoginStatusAndPreferredPhone, 0, "Contractor login status and preferred phone block in My profile page");
    chai.expect(contractorLoginStatusDisplayStatus).to.be.false;
})

Then(/^I click on Work Availability for ODTI$/, function () {
    let workAvailabilityListOnDemandTelephoneOption = $(myProfilePage.workAvailabilityListOptionDynamicLocator.replace("<dynamic>", "On Demand Telephone"));
    action.isVisibleWait(workAvailabilityListOnDemandTelephoneOption, 10000, "Work availability option - On Demand Telephone in My profile page");
    action.clickElement(workAvailabilityListOnDemandTelephoneOption, "Work availability option - On Demand Telephone in My profile page");
    let workAvailabilityListOptionExpandedLinks = myProfilePage.workAvailabilityListOptionExpandedLinks;
    for (let linkIndex = 0; linkIndex < workAvailabilityListOptionExpandedLinks.length; linkIndex++) {
        if (action.isClickableWait(workAvailabilityListOptionExpandedLinks[linkIndex], 100, "Work Availability List Option Expanded Link " + linkIndex + " in My profile page") === true) {
            action.clickElement(workAvailabilityListOptionExpandedLinks[linkIndex], "Work Availability List Option Expanded Link " + linkIndex + " in My profile page");
            break;
        }
    }
})

Then(/^the text ‘You are not activated for On Demand Telephone Interpreting’ is displayed$/, function () {
    let notActivatedODTITextDisplayStatus = action.isVisibleWait(myProfilePage.workAvailabilityNotActivatedODTIText, 0, "You are not activated for On Demand Telephone Interpreting text under work availability in My profile page");
    chai.expect(notActivatedODTITextDisplayStatus).to.be.false;
})

Then(/^the text ‘You are activated for On Demand Telephone Interpreting’ is displayed$/, function () {
    let activatedODTITextDisplayStatus = action.isVisibleWait(myProfilePage.workAvailabilityActivatedODTIText, 0, "You are activated for On Demand Telephone Interpreting text under work availability in My profile page");
    chai.expect(activatedODTITextDisplayStatus).to.be.false;
})

When(/^mobile phone number option is selected$/, function () {
    action.clickElement(myProfilePage.mobileRadioOptionWithPhoneNumber, "Mobile radio option with corresponding phone number in My profile page");
    let mobileRadioOptionWithPhoneNumberSelectedStatus = action.isSelectedWait(myProfilePage.mobileRadioOptionWithPhoneNumber, 20000, "Mobile radio option with corresponding phone number in My profile page");
    chai.expect(mobileRadioOptionWithPhoneNumberSelectedStatus).to.be.true;
})

Then(/^the Schedule and OnSite Areas section are hidden$/, function () {
    let scheduleAreaDisplayStatus = action.isVisibleWait(myProfilePage.scheduleCalendarAreaOnWorkAvailability,0,"Schedule calendar area on work availability popup in My profile page");
    chai.expect(scheduleAreaDisplayStatus).to.be.false;
    let onsiteAreasOnWorkAvailabilityDisplayStatus = action.isVisibleWait(myProfilePage.onsiteAreasOnWorkAvailability,0,"On site areas on work availability popup in My profile page");
    chai.expect(onsiteAreasOnWorkAvailabilityDisplayStatus).to.be.false;
})