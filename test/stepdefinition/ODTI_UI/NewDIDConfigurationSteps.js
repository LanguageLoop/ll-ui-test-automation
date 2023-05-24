Then(/^the user is navigated to the DID Configuration Details screen$/, function () {
    let pageTitleActual = action.getPageTitle();
    chai.expect(pageTitleActual).to.equal("New DID Configuration");
})

When(/^a blank form is shown in New DID Configuration$/, function () {
    action.isVisibleWait(newDIDConfigurationPage.didNumberInputTextBox,10000);
    let didNumberOrigValue = action.getElementAttribute(newDIDConfigurationPage.didNumberInputTextBox,"origvalue");
    chai.expect(didNumberOrigValue).to.equal("");
})

When(/^a copy of the existing DID configuration is shown upon clicking duplicate$/, function () {
    let existingDIDConfigurationDisplayStatus = action.isVisibleWait(newDIDConfigurationPage.existingDIDConfiguration,10000);
    chai.expect(existingDIDConfigurationDisplayStatus).to.be.true;
})

When(/^the DID is blank in existing DID configuration upon clicking duplicate$/, function () {
    action.isVisibleWait(newDIDConfigurationPage.didNumberInputTextBox,10000);
    let didNumberOrigValue = action.getElementAttribute(newDIDConfigurationPage.didNumberInputTextBox,"origvalue");
    chai.expect(didNumberOrigValue).to.equal("");
})

When(/^has selected the TI Service Type "(.*)" in DID configuration$/, function (serviceType) {
    action.isVisibleWait(newDIDConfigurationPage.tiServiceTypeDropdown);
    action.selectTextFromDropdown(newDIDConfigurationPage.tiServiceTypeDropdown,serviceType);
})

When(/^has typed in a Campus PIN "(.*)" in DID configuration$/, function (campusPin) {
    action.isVisibleWait(newDIDConfigurationPage.campusPinInputTextBox, 10000);
    action.enterValue(newDIDConfigurationPage.campusPinInputTextBox,campusPin);
})

Then(/^the PIN is searched in DID configuration$/, function () {
    let searchedCampusResultDisplayStatus = action.isVisibleWait(newDIDConfigurationPage.campusNameBelowInputTextBox, 10000);
    chai.expect(searchedCampusResultDisplayStatus).to.be.true;
})

Then(/^the Campus name "(.*)" is displayed below the input box in DID configuration$/, function (campusName) {
    let campusNameTextBelowInputBox = action.getElementText(newDIDConfigurationPage.campusNameBelowInputTextBox);
    chai.expect(campusNameTextBelowInputBox).to.equal(campusName);
})

Then(/^the MILS configuration section is hidden$/, function () {
    let milsConfigurationSectionDisplayStatus = action.isVisibleWait(newDIDConfigurationPage.milsConfigurationSection, 10000);
    chai.expect(milsConfigurationSectionDisplayStatus).to.be.false;
})

Then(/^the TIXP configuration section is displayed$/, function () {
    let tixpConfigurationSectionDisplayStatus = action.isVisibleWait(newDIDConfigurationPage.tixpConfigurationSection, 10000);
    chai.expect(tixpConfigurationSectionDisplayStatus).to.be.true;
})

Then(/^the MILS configuration section is displayed$/, function () {
    let milsConfigurationSectionDisplayStatus = action.isVisibleWait(newDIDConfigurationPage.milsConfigurationSection, 10000);
    chai.expect(milsConfigurationSectionDisplayStatus).to.be.true;
})

Then(/^the TIXP configuration section is hidden/, function () {
    let tixpConfigurationSectionDisplayStatus = action.isVisibleWait(newDIDConfigurationPage.tixpConfigurationSection, 10000);
    chai.expect(tixpConfigurationSectionDisplayStatus).to.be.false;
})

Then(/^the MILS and TIXP configuration sections are not shown/, function () {
    let milsConfigurationSectionDisplayStatus = action.isVisibleWait(newDIDConfigurationPage.milsConfigurationSection, 10000);
    chai.expect(milsConfigurationSectionDisplayStatus).to.be.false;
    let tixpConfigurationSectionDisplayStatus = action.isVisibleWait(newDIDConfigurationPage.tixpConfigurationSection, 10000);
    chai.expect(tixpConfigurationSectionDisplayStatus).to.be.false;
})