const GlobalData = require("../../data/GlobalData")

When(/^I search for campus "(.*)"$/, function(campus){
    action.enterValueAndPressReturn(accountManagementPage.searchCampusInput,campus)
    browser.pause(2000)
})

When(/^I search for created campus$/, function(){
    console.log("SEARCH CAMPUS :  :: : : : : : : : : : : : :"+GlobalData.CAMPUS_NAME)
    action.enterValueAndPressReturn(accountManagementPage.searchCampusInput,GlobalData.CAMPUS_NAME)
    browser.pause(2000)
})

When(/^I click the first campus link from search results$/,function(){
    browser.pause(2000)
    action.clickElement(accountManagementPage.firstCampusLink)
    browser.pause(4000)
})

When(/^I search for contract title "(.*)"$/, function(contract){
    browser.pause(4000)
    action.enterValueAndPressReturn(accountManagementPage.searchContractInput,contract)
    browser.pause(2000)
})

When(/^I click the first contract link from search results$/,function(){
    browser.pause(4000)
    action.clickElement(accountManagementPage.firstContract)
    browser.pause(4000)
})

When(/^they view the Account Management page$/, function () {
    let pageHeaderDisplayStatus = action.isVisibleWait(accountManagementPage.accountManagementPageTitleHeader, 10000);
    chai.expect(pageHeaderDisplayStatus).to.be.true;
})

When(/^they will see the Accounts section displayed$/, function () {
    let accountsSectionDisplayStatus = action.isVisibleWait(accountManagementPage.accountsSectionHeader, 10000);
    chai.expect(accountsSectionDisplayStatus).to.be.true;
})

Then(/^the Create Account button will not be displayed$/, function () {
    let createAccountButtonDisplayStatus = action.isVisibleWait(accountManagementPage.createAccountButton, 1000);
    chai.expect(createAccountButtonDisplayStatus).to.be.false;
})

When(/^they click onto a user "(.*)" who belongs to the Staff Group or Contractor Group$/, function (account) {
    let accountSearchResultLink = $(accountManagementPage.accountManagementSearchResultLinkLocator.replace("<dynamic>", account));
    action.isClickableWait(accountSearchResultLink, 20000)
    action.clickElement(accountSearchResultLink);
})

Then(/^the user profile will be view-only$/, function () {
    let editProfileButtonStatus = action.isVisibleWait(adminPage.editProfileButton,1000);
    chai.expect(editProfileButtonStatus).to.be.false;
})

Then(/^they will not be able to edit a Staff Group or Contractor profile$/, function () {
    let editProfileButtonStatus = action.isClickableWait(adminPage.editProfileButton,1000);
    chai.expect(editProfileButtonStatus).to.be.false;
})

Then(/^all Edit buttons will be disabled: Terminate User, Reset Password, Edit Profile$/, function () {
    let terminateUserButtonStatus = action.isVisibleWait(adminPage.terminateUserButton,1000);
    chai.expect(terminateUserButtonStatus).to.be.false;
    let resetPasswordButtonStatus = action.isVisibleWait(adminPage.resetPasswordButton,1000);
    chai.expect(resetPasswordButtonStatus).to.be.false;
    let editProfileButtonStatus = action.isVisibleWait(adminPage.editProfileButton,1000);
    chai.expect(editProfileButtonStatus).to.be.false;
})