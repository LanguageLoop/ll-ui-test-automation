Then(/^the user is navigated to the Edit DID Configuration screen$/, function () {
    let pageTitleActual = action.getPageTitle();
    chai.expect(pageTitleActual).to.equal("Edit DID Configuration");
})

Then(/^the existing configuration is shown$/, function () {
    let existingConfigurationDisplayStatus = action.isVisibleWait(editDIDConfigurationPage.existingConfiguration, 10000);
    chai.expect(existingConfigurationDisplayStatus).to.be.true;
})