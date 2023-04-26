When(/^the Edit Campus Configuration Page is displayed$/, function () {
    let pageTitleActual = action.getPageTitle();
    chai.expect(pageTitleActual).to.equal("Edit Campus Configuration");
})

Then(/^the Campus PIN input and Service Type Dropdown are displayed$/, function () {
    let campusPinInputDisplayStatus = action.isVisibleWait(editCampusConfigurationPage.campusPinInputTextBox, 10000);
    chai.expect(campusPinInputDisplayStatus).to.be.true;
    let TIServiceTypeDropdownDisplayStatus = action.isVisibleWait(editCampusConfigurationPage.TIServiceTypeDropdown, 10000);
    chai.expect(TIServiceTypeDropdownDisplayStatus).to.be.true;
})

Then(/^the saved configuration is displayed$/, function () {
    let savedConfigurationDisplayStatus = action.isVisibleWait(editCampusConfigurationPage.savedConfiguration, 10000);
    chai.expect(savedConfigurationDisplayStatus).to.be.true;
})