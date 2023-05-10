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

Then(/^the Service Type and Campus pin fields are read only$/, function () {
    let TIServiceTypeDropdownDisabledDisplayStatus = action.isVisibleWait(editCampusConfigurationPage.TIServiceTypeDropdownDisabled, 10000);
    chai.expect(TIServiceTypeDropdownDisabledDisplayStatus).to.be.true;
    let campusPinInputReadOnlyDisplayStatus = action.isVisibleWait(editCampusConfigurationPage.campusPinInputTextBoxReadOnly, 10000);
    chai.expect(campusPinInputReadOnlyDisplayStatus).to.be.true;
})

Then(/^user cannot update the Service Type and Campus pin fields values$/, function () {
    let TIServiceTypeDropdownClickableStatus = action.isClickableWait(editCampusConfigurationPage.TIServiceTypeDropdownDisabled, 1000);
    chai.expect(TIServiceTypeDropdownClickableStatus).to.be.false;
    let campusPinInputReadOnlyClickableStatus = action.isClickableWait(editCampusConfigurationPage.campusPinInputTextBoxReadOnly, 1000);
    chai.expect(campusPinInputReadOnlyClickableStatus).to.be.false;
})