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

Then(/^the saved configuration is displayed upon clicking duplicate$/, function () {
    let savedConfigurationDisplayStatus = action.isVisibleWait(newCampusConfigurationPage.savedConfiguration, 10000);
    chai.expect(savedConfigurationDisplayStatus).to.be.true;
})

Then(/^the Campus PIN input and Service Type Dropdown are displayed upon clicking duplicate$/, function () {
    let campusPinInputDisplayStatus = action.isVisibleWait(newCampusConfigurationPage.campusPinInputTextBox, 10000);
    chai.expect(campusPinInputDisplayStatus).to.be.true;
    let TIServiceTypeDropdownDisplayStatus = action.isVisibleWait(newCampusConfigurationPage.TIServiceTypeDropdownDisabled, 10000);
    chai.expect(TIServiceTypeDropdownDisplayStatus).to.be.true;
})

Then(/^the Campus PIN is blank upon clicking duplicate$/, function () {
    let campusPinInputElementHTML = action.getElementHTML(newCampusConfigurationPage.campusPinInputTextBox);
    chai.expect(campusPinInputElementHTML).to.not.includes("value");
})

When(/^has typed in a Campus PIN "(.*)"$/, function (campusPin) {
    action.isVisibleWait(newCampusConfigurationPage.campusPinInputTextBox, 10000);
    action.enterValue(newCampusConfigurationPage.campusPinInputTextBox,campusPin);
})

Then(/^the PIN is searched$/, function () {
    let searchedCampusResultDisplayStatus = action.isVisibleWait(newCampusConfigurationPage.campusNameBelowInputTextBox, 10000);
    chai.expect(searchedCampusResultDisplayStatus).to.be.true;
})

Then(/^the Campus name "(.*)" is displayed below the input box$/, function (campusName) {
    let campusNameTextBelowInputBox = action.getElementText(newCampusConfigurationPage.campusNameBelowInputTextBox);
    chai.expect(campusNameTextBelowInputBox).to.equal(campusName);
})

When(/^the user has filled in all the required data configuration toggles "(.*)"$/, function (configurationToggles) {
    let configurationTogglesList = configurationToggles.split(",")
    for (let index=0; index<configurationTogglesList.length; index++){
        let configurationToggleElement = $(newCampusConfigurationPage.configurationToggleCheckboxLocator.replace("<dynamic>",configurationTogglesList[index]));
        action.isExistingWait(configurationToggleElement,10000);
        action.clickWithOutWait(configurationToggleElement);
    }
})

When(/^the user has clicked the CANCEL button$/, function () {
    action.isVisibleWait(newCampusConfigurationPage.cancelButton,10000);
    action.clickElement(newCampusConfigurationPage.cancelButton);
})

Then(/^the data entered is not saved$/, function () {
    let pageTitleActual = action.getPageTitle();
    chai.expect(pageTitleActual).to.not.includes("New Campus Configuration");
})