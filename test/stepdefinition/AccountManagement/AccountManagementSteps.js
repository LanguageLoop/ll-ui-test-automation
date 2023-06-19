

When(/^I search for campus "(.*)"$/, function(campus){
    action.enterValueAndPressReturn(accountManagementPage.searchCampusInput,campus,"Search Campus text box in Account Management page");
    browser.pause(2000)
})

When(/^I search for created campus$/, function(){
    console.log("SEARCH CAMPUS :  :: : : : : : : : : : : : :"+GlobalData.CAMPUS_NAME)
    action.enterValueAndPressReturn(accountManagementPage.searchCampusInput,GlobalData.CAMPUS_NAME,"Search Campus text box in Account Management page")
    browser.pause(2000)
})

When(/^I click the first campus link from search results$/,function(){
    browser.pause(2000)
    action.clickElement(accountManagementPage.firstCampusLink,"First Campus link in Account Management page")
    browser.pause(4000)
})

When(/^I search for contract title "(.*)"$/, function(contract){
    browser.pause(4000)
    action.enterValueAndPressReturn(accountManagementPage.searchContractInput,contract,"Search Contract text box in Account Management page")
    browser.pause(2000)
})

When(/^I click the first contract link from search results$/,function(){
    browser.pause(4000)
    action.clickElement(accountManagementPage.firstContract,"First Contract link in Account Management page")
    browser.pause(4000)
})

When(/^they view the Account Management page$/, function () {
    let pageHeaderDisplayStatus = action.isVisibleWait(accountManagementPage.accountManagementPageTitleHeader, 10000,"Account Management page title header");
    chai.expect(pageHeaderDisplayStatus).to.be.true;
})

When(/^they will see the Accounts section displayed$/, function () {
    let accountsSectionDisplayStatus = action.isVisibleWait(accountManagementPage.accountsSectionHeader, 10000,"Accounts section header");
    chai.expect(accountsSectionDisplayStatus).to.be.true;
})

Then(/^the Create Account button will not be displayed$/, function () {
    let createAccountButtonDisplayStatus = action.isVisibleWait(accountManagementPage.createAccountButton, 1000,"Create Account button in Account Management page");
    chai.expect(createAccountButtonDisplayStatus).to.be.false;
})

When(/^they click onto a user "(.*)" who belongs to the Staff Group or Contractor Group$/, function (account) {
    let accountSearchResultLink = $(accountManagementPage.accountManagementSearchResultLinkLocator.replace("<dynamic>", account));
    action.isClickableWait(accountSearchResultLink, 20000,"Account search result in Account Management page")
    action.clickElement(accountSearchResultLink,"Account search result in Account Management page");
})

Then(/^the user profile will be view-only$/, function () {
    let editProfileButtonStatus = action.isVisibleWait(adminPage.editProfileButton,1000,"Edit profile button in Account Management page");
    chai.expect(editProfileButtonStatus).to.be.false;
})

Then(/^they will not be able to edit a Staff Group or Contractor profile$/, function () {
    let editProfileButtonStatus = action.isClickableWait(adminPage.editProfileButton,1000,"Edit profile button in Account Management page");
    chai.expect(editProfileButtonStatus).to.be.false;
})

Then(/^all Edit buttons will be disabled: Terminate User, Reset Password, Edit Profile$/, function () {
    let terminateUserButtonStatus = action.isVisibleWait(adminPage.terminateUserButton,1000,"Terminate user button in Account Management page");
    chai.expect(terminateUserButtonStatus).to.be.false;
    let resetPasswordButtonStatus = action.isVisibleWait(adminPage.resetPasswordButton,1000,"reset password button in Account Management page");
    chai.expect(resetPasswordButtonStatus).to.be.false;
    let editProfileButtonStatus = action.isVisibleWait(adminPage.editProfileButton,1000,"Edit profile button in Account Management page");
    chai.expect(editProfileButtonStatus).to.be.false;
})

When(/^they click onto a user "(.*)" who belongs to the Client Group$/, function (account) {
    let accountSearchResultLink = $(accountManagementPage.accountManagementSearchResultLinkLocator.replace("<dynamic>", account));
    action.isClickableWait(accountSearchResultLink, 20000,"Account search result link in Account Management page")
    action.clickElement(accountSearchResultLink,"Account search result link in Account Management page");
})

Then(/^they are taken to the Account Profile page$/, function () {
    let accountProfilePageDisplayStatus = action.isVisibleWait(accountManagementPage.accountProfilePageTitleHeader,10000,"Account profile page title header");
    chai.expect(accountProfilePageDisplayStatus).to.be.true;
})

Then(/^the Edit Profile, Terminate User & Reset Password buttons are enabled$/, function () {
    let terminateUserButtonStatus = action.isEnabledWait(adminPage.terminateUserButton,1000,"Terminate user button in Account Management page");
    chai.expect(terminateUserButtonStatus).to.be.true;
    let resetPasswordButtonStatus = action.isEnabledWait(adminPage.resetPasswordButton,1000,"Reset password button in Account Management page");
    chai.expect(resetPasswordButtonStatus).to.be.true;
    let editProfileButtonStatus = action.isEnabledWait(adminPage.editProfileButton,1000,"Edit profile button in Account Management page");
    chai.expect(editProfileButtonStatus).to.be.true;
})

When(/^they click onto a user "(.*)" who belongs to both the Staff and Client Group$/, function (account) {
    let accountSearchResultLink = $(accountManagementPage.accountManagementSearchResultLinkLocator.replace("<dynamic>", account));
    action.isClickableWait(accountSearchResultLink, 20000,"Account management search result link in Account Management page")
    action.clickElement(accountSearchResultLink,"Account management search result link in Account Management page");
})

Then(/^they will not be able to edit the profile$/, function () {
    let editProfileButtonStatus = action.isClickableWait(adminPage.editProfileButton,1000,"Edit profile button in Account Management page");
    chai.expect(editProfileButtonStatus).to.be.false;
})

When(/^they click the Edit Profile button$/, function () {
    action.isVisibleWait(adminPage.editProfileButton,10000,"Edit profile button in Account Management page");
    action.clickElement(adminPage.editProfileButton,"Edit profile button in Account Management page");
})

Then(/^they will be able to edit the profile fields: "(.*)", "(.*)", "(.*)", "(.*)", "(.*)", "(.*)"$/, function (firstName, lastName, birthDay, officeLocation, landLineNumber, mobileNumber) {
    action.isVisibleWait(adminPage.firstNameFieldCreateAccount, 10000,"First Name text box in Create Account");
    action.enterValue(adminPage.firstNameFieldCreateAccount, firstName,"First Name text box in Create Account");
    action.enterValue(adminPage.lastNameFieldCreateAccount, lastName,"Last Name text box in Create Account");
    action.enterValue(adminPage.birthDayTextBox, birthDay,"Birthday text box in Create Account");
    action.enterValue(adminPage.officeLocationTextBox, officeLocation,"Office location text box in Create Account");
    action.enterValue(adminPage.landLineNumberFieldCreateAccount, landLineNumber,"Landline number text box in Create Account");
    action.enterValue(adminPage.mobileNumberTextBox, mobileNumber,"Mobile number text box in Create Account");
    action.clickElement(adminPage.preventConcurrentSessionsCheckbox,"Prevent concurrent session checkbox in Create Account");
})

Then(/^they will not be able to edit Email and Start Date Time fields$/, function () {
    let emailReadOnlyExistStatus = action.isExistingWait(adminPage.emailFieldReadOnly,1000,"Email field read only in Account Management page");
    chai.expect(emailReadOnlyExistStatus).to.be.true;
    let startDateTimeReadOnlyExistStatus = action.isExistingWait(adminPage.startDateTimeReadOnly,1000,"Start Date Time field read only in Account Management page");
    chai.expect(startDateTimeReadOnlyExistStatus).to.be.true;
})

When(/^they view the Roles section$/, function () {
    let rolesSectionDisplayStatus = action.isVisibleWait(adminPage.rolesSectionOnProfile,10000,"Roles section on profile in Account Management page");
    chai.expect(rolesSectionDisplayStatus).to.be.true;
})

Then(/^they will only see the Client Group roles$/, function () {
    let clientGroupRolesDisplayStatus = action.isVisibleWait(adminPage.clientGroupRoles,10000,"Client group roles in Account Management page");
    chai.expect(clientGroupRolesDisplayStatus).to.be.true;
})

Then(/^the Client Group toggles "(.*)" will be enabled$/, function (toggleRoles) {
    let toggleRolesList = toggleRoles.split(",");
    for (let roleIndex = 0; roleIndex < toggleRolesList.length; roleIndex++) {
        let roleToggleElement = $(adminPage.roleToggleEnabledLocator.replace("<dynamic>", toggleRolesList[roleIndex]));
        let roleToggleEnabledStatus = action.isVisibleWait(roleToggleElement, 0,"Role toggle in Account Management page");
        chai.expect(roleToggleEnabledStatus).to.be.true;
    }
})

Then(/^the Account Manager can change the toggles "(.*)" as per existing logic$/, function (toggleRoles) {
    let toggleRolesList = toggleRoles.split(",");
    for (let roleIndex = 0; roleIndex < toggleRolesList.length; roleIndex++) {
        let roleToggleElement = $(adminPage.roleToggleLocator.replace("<dynamic>", toggleRolesList[roleIndex]));
        let roleToggleClickableStatus = action.isClickableWait(roleToggleElement, 0,"Role toggle in Account Management page");
        chai.expect(roleToggleClickableStatus).to.be.true;
    }
})

Then(/^all other roles "(.*)" will be hidden$/, function (roles) {
    let rolesList = roles.split(",");
    for (let roleIndex = 0; roleIndex < rolesList.length; roleIndex++) {
        let groupRolesElement = $(adminPage.groupRolesDynamicLocator.replace("<dynamic>",rolesList[roleIndex]))
        let groupRolesDisplayStatus = action.isVisibleWait(groupRolesElement,0,"Group roles in Account Management page");
        chai.expect(groupRolesDisplayStatus).to.be.false;
    }
})

Then(/^the saved data "(.*)" will be displayed$/, function (expectedData) {
    let expectedDataList = expectedData.split(",");
    for (let index = 0; index < expectedDataList.length; index++) {
        let savedDataTextElement = $(adminPage.savedTextOnProfileDynamicLocator.replace("<dynamic>", expectedDataList[index]))
        let savedDataDisplayStatus = action.isVisibleWait(savedDataTextElement, 1000,"Saved data in Account Management page");
        chai.expect(savedDataDisplayStatus).to.be.true;
    }
})

Then(/^the data changes are reset$/, function () {
    action.clearValue(adminPage.birthDayTextBox,"Birthday text box in Account Management page");
    action.clearValue(adminPage.officeLocationTextBox,"Office location text box in Account Management page");
    action.clearValue(adminPage.mobileNumberTextBox,"Mobile number text box in Account Management page");
    action.clickElement(adminPage.preventConcurrentSessionsCheckbox,"Prevent concurrent sessions checkbox in Account Management page");
})

When(/^they click Cancel button$/, function () {
    action.isVisibleWait(adminPage.cancelButtonEditProfile,10000,"Cancel button in Edit Profile")
    action.clickElement(adminPage.cancelButtonEditProfile,"Cancel button in Edit Profile")
})

Then(/^the data "(.*)" will be not saved$/, function (expectedData) {
    let expectedDataList = expectedData.split(",");
    for (let index = 0; index < expectedDataList.length; index++) {
        let savedDataTextElement = $(adminPage.savedTextOnProfileDynamicLocator.replace("<dynamic>", expectedDataList[index]))
        let savedDataDisplayStatus = action.isVisibleWait(savedDataTextElement, 1000,"Saved data in Account Management page");
        chai.expect(savedDataDisplayStatus).to.be.false;
    }
})

When(/^the user clicks on the edit icon next to the email address$/, function () {
    action.isVisibleWait(adminPage.editIconNextToEmailAddress,10000,"Edit Icon next to Email Address in Account Management page");
    action.clickElement(adminPage.editIconNextToEmailAddress,"Edit Icon next to Email Address in Account Management page");
})

Then(/^the user will be taken to the edit email pop up where they can change the email address$/, function () {
    let emailPopupDisplayStatus = action.isVisibleWait(adminPage.changeEmailPopup,10000,"Change email in Account Management page");
    chai.expect(emailPopupDisplayStatus).to.be.true;
})

When(/^has entered a new email address "(.*)","(.*)"$/, function (newEmail, confirmEmail) {
    action.isVisibleWait(adminPage.newEmailTextBoxOnPopup, 10000,"New email text box on popup in Account Management page");
    action.enterValue(adminPage.newEmailTextBoxOnPopup, newEmail,"New email text box on popup in Account Management page");
    action.enterValue(adminPage.confirmEmailTextBoxOnPopup, confirmEmail,"Confirm email text box on popup in Account Management page");
})

When(/^the user presses ‘Change Email’ button$/, function () {
    action.isVisibleWait(adminPage.changeEmailButton, 10000,"Change email button in Account Management page");
    action.clickElement(adminPage.changeEmailButton,"Change email button in Account Management page");
})

Then(/^a message ‘Email address already exist.’ appears$/, function () {
    let emailExistsDisplayStatus = action.isVisibleWait(adminPage.emailAddressAlreadyExistsMessage, 10000,"Email address already exist message in Account Management page");
    chai.expect(emailExistsDisplayStatus).to.be.true;
})

When(/^the user clicks 'X' icon$/, function () {
    action.isVisibleWait(adminPage.changeEmailPopupCloseButton, 10000,"Change Email popup close button in Account Management page");
    action.clickElement(adminPage.changeEmailPopupCloseButton,"Change Email popup close button in Account Management page");
})

Then(/^the email address "(.*)" should not be updated$/, function (emailAddress) {
    let savedDataTextElement = $(adminPage.savedTextOnProfileDynamicLocator.replace("<dynamic>", emailAddress))
    let savedDataDisplayStatus = action.isVisibleWait(savedDataTextElement, 1000,"Saved text on profile in Account Management page");
    chai.expect(savedDataDisplayStatus).to.be.false;
})

When(/^the User Status is Active or Sleeping$/, function () {
    let userStatusActual = action.getElementText(adminPage.userStatusText,"Saved text on profile in Account Management page");
    if (userStatusActual.includes("Active")) {
        chai.expect(userStatusActual).to.equal("Active");
    } else {
        chai.expect(userStatusActual).to.equal("Sleeping");
    }
})

Then(/^the confirmation email is sent to the email address message is displayed$/, function () {
    let emailConfirmationSentMessageDisplayStatus = action.isVisibleWait(adminPage.confirmationEmailSentMessage, 10000,"Confirmation email is sent to the email address message in Account Management page");
    chai.expect(emailConfirmationSentMessageDisplayStatus).to.be.true;
})

Then(/^a message ‘Email and confirm email do not match.’ appears$/, function () {
    let emailsDoNotMatchMessageDisplayStatus = action.isVisibleWait(adminPage.emailAndConfirmEmailDoNotMatch, 10000,"Email and confirm email do not match message in Account Management page");
    chai.expect(emailsDoNotMatchMessageDisplayStatus).to.be.true;
})

When(/^I click the contract link "(.*)" from search results$/,function(contractLinkResult){
    let contractResultLinkElement = $(accountManagementPage.contractResultLocator.replace("<dynamic>",contractLinkResult));
    action.isVisibleWait(contractResultLinkElement,10000,"Contract search result link in Account Management page");
    action.clickElement(contractResultLinkElement,"Contract search result link in Account Management page");
})