Then(/^the user is navigated to the DID Configuration Details screen$/, function () {
    let pageTitleActual = action.getPageTitle();
    chai.expect(pageTitleActual).to.equal("New DID Configuration");
})

When(/^a blank form is shown in New DID Configuration$/, function () {
    action.isVisibleWait(newDIDConfigurationPage.didNumberInputTextBox,10000);
    let didNumberOrigValue = action.getElementAttribute(newDIDConfigurationPage.didNumberInputTextBox,"origvalue");
    chai.expect(didNumberOrigValue).to.equal("");
})