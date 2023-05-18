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