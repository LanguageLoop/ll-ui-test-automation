When(/^the Edit Campus Configuration Page is displayed$/, function () {
    let pageTitleActual = action.getPageTitle();
    chai.expect(pageTitleActual).to.equal("Edit Campus Configuration");
})

Then(/^the Campus PIN input and Service Type Dropdown are displayed$/, function () {
    let campusPinInputDisplayStatus = action.isVisibleWait(editCampusConfigurationPage.campusPinInputTextBox, 10000,"Campus pin input text box in Edit campus configuration page");
    chai.expect(campusPinInputDisplayStatus).to.be.true;
    let TIServiceTypeDropdownDisplayStatus = action.isVisibleWait(editCampusConfigurationPage.TIServiceTypeDropdown, 10000,"TI service type dropdown in Edit campus configuration page");
    chai.expect(TIServiceTypeDropdownDisplayStatus).to.be.true;
})

Then(/^the saved configuration is displayed$/, function () {
    let savedConfigurationDisplayStatus = action.isVisibleWait(editCampusConfigurationPage.savedConfiguration, 10000,"Saved configuration in Edit campus configuration page");
    chai.expect(savedConfigurationDisplayStatus).to.be.true;
})

Then(/^the Service Type and Campus pin fields are read only$/, function () {
    let TIServiceTypeDropdownDisabledDisplayStatus = action.isVisibleWait(editCampusConfigurationPage.TIServiceTypeDropdownDisabled, 10000,"TI service type dropdown disabled in Edit campus configuration page");
    chai.expect(TIServiceTypeDropdownDisabledDisplayStatus).to.be.true;
    let campusPinInputReadOnlyDisplayStatus = action.isVisibleWait(editCampusConfigurationPage.campusPinInputTextBoxReadOnly, 10000,"Campus pin input text box readonly in Edit campus configuration page");
    chai.expect(campusPinInputReadOnlyDisplayStatus).to.be.true;
})

Then(/^user cannot update the Service Type and Campus pin fields values$/, function () {
    let TIServiceTypeDropdownClickableStatus = action.isClickableWait(editCampusConfigurationPage.TIServiceTypeDropdownDisabled, 1000,"TI service type dropdown disabled in Edit campus configuration page");
    chai.expect(TIServiceTypeDropdownClickableStatus).to.be.false;
    let campusPinInputReadOnlyClickableStatus = action.isClickableWait(editCampusConfigurationPage.campusPinInputTextBoxReadOnly, 1000,"Campus pin input text box readonly in Edit campus configuration page");
    chai.expect(campusPinInputReadOnlyClickableStatus).to.be.false;
})

When(/^make Configuration Is Active to Active or Inactive$/, function () {
    action.isExistingWait(editCampusConfigurationPage.configurationActiveToggle, 10000,"Configuration active toggle in Edit campus configuration page");
    action.clickWithOutWait(editCampusConfigurationPage.configurationActiveToggle,"Configuration active toggle in Edit campus configuration page");
})

When(/^update the options settings under Configuration section "(.*)"$/, function (configurationToggles) {
    let configurationTogglesList = configurationToggles.split(",")
    for (let index = 0; index < configurationTogglesList.length; index++) {
        let configurationToggleElement = $(editCampusConfigurationPage.configurationToggleCheckboxLocator.replace("<dynamic>", configurationTogglesList[index]));
        action.isNotVisibleWait(configurationToggleElement, 2000,"Configuration toggle in Edit campus configuration page");
        action.isExistingWait(configurationToggleElement, 10000,"Configuration toggle in Edit campus configuration page");
        action.clickWithOutWait(configurationToggleElement,"Configuration toggle in Edit campus configuration page");
    }
})

When(/^clicks on Save button in Edit Campus Configuration$/, function () {
    action.isNotVisibleWait(editCampusConfigurationPage.saveButton, 2000,"Save button in Edit campus configuration page");
    action.isVisibleWait(editCampusConfigurationPage.saveButton, 10000,"Save button in Edit campus configuration page");
    action.clickElement(editCampusConfigurationPage.saveButton,"Save button in Edit campus configuration page");
    action.isNotVisibleWait(editCampusConfigurationPage.saveButton, 2000,"Save button in Edit campus configuration page");
})

Then(/^the campus details "(.*)" are updated$/, function (configurationToggles) {
    let configurationTogglesList = configurationToggles.split(",")
    for (let index = 0; index < configurationTogglesList.length; index++) {
        let configurationToggleElement = $(editCampusConfigurationPage.configurationToggleCheckboxLocator.replace("<dynamic>", configurationTogglesList[index]));
        let toggleOriginalValue = action.getElementAttribute(configurationToggleElement,"origvalue","Configuration toggle in Edit campus configuration page");
        chai.expect(toggleOriginalValue).to.equal("false");
    }
})