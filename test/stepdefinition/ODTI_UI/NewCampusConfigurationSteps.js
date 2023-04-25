When(/^the new Campus Configuration Page is displayed$/, function () {
    let pageTitleActual = action.getPageTitle();
    chai.expect(pageTitleActual).to.equal("New Campus Configuration");
})

Then(/^the Service Type is displayed with General TI type by default and not changeable$/, function () {
    let TIServiceTypeDropdownDisabledDisplayStatus = action.isVisibleWait(newCampusConfigurationPage.TIServiceTypeDropdownDisabled, 10000);
    chai.expect(TIServiceTypeDropdownDisabledDisplayStatus).to.be.true;
})

Then(/^the Campus PIN input and configuration section are displayed$/, function () {
    let campusPinInputDisplayStatus = action.isVisibleWait(newCampusConfigurationPage.campusPinInputTextBox, 10000);
    chai.expect(campusPinInputDisplayStatus).to.be.true;
    let configurationSectionDisplayStatus = action.isVisibleWait(newCampusConfigurationPage.configurationSection, 10000);
    chai.expect(configurationSectionDisplayStatus).to.be.true;
})