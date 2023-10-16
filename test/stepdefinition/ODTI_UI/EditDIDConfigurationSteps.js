Then(/^the user is navigated to the Edit DID Configuration screen$/, function () {
    let pageTitleActual = action.getPageTitle();
    chai.expect(pageTitleActual).to.equal("Edit DID Configuration");
})

Then(/^the existing configuration is shown$/, function () {
    let existingConfigurationDisplayStatus = action.isVisibleWait(editDIDConfigurationPage.existingConfiguration, 10000, "Existing Configuration in Edit DID Configuration page");
    chai.expect(existingConfigurationDisplayStatus).to.be.true;
})


Then(/^there should be an X icon on each of the language options that has a language set$/, function () {
    let rowsCount = editDIDConfigurationPage.languageTableBodyRowsCount;
    for (let row = 1; row <= rowsCount; row++) {
        let languageTextElement = $(editDIDConfigurationPage.languageTextDynamicLocator.replace("<dynamic>", row.toString()));
        let languageTextElementValue = action.getElementText(languageTextElement, "Language Text Element in Edit DID Configuration page");
        let xIconBesideLanguage = $(editDIDConfigurationPage.xIconBesideLanguageOptionDynamicLocator.replace("<dynamic>", row.toString()));
        if (languageTextElementValue !== "") {
            let xIconBesideLanguageDisplayStatus = action.isVisibleWait(xIconBesideLanguage, 10000, "X icon beside language in Edit DID Configuration page");
            chai.expect(xIconBesideLanguageDisplayStatus).to.be.true;
        }
    }
})

Then(/^options with no Language set do not have an X icon$/, function () {
    let rowsCount = editDIDConfigurationPage.languageTableBodyRowsCount;
    for (let row = 1; row <= rowsCount; row++) {
        let languageTextElement = $(editDIDConfigurationPage.languageTextDynamicLocator.replace("<dynamic>", row.toString()));
        let languageTextElementValue = action.getElementText(languageTextElement, "Language Text element in Edit DID Configuration page");
        let xIconBesideLanguage = $(editDIDConfigurationPage.xIconBesideLanguageOptionDynamicLocator.replace("<dynamic>", row.toString()));
        if (languageTextElementValue === "") {
            let xIconBesideLanguageDisplayStatus = action.isVisibleWait(xIconBesideLanguage, 10000, "X icon beside language in Edit DID Configuration page");
            chai.expect(xIconBesideLanguageDisplayStatus).to.be.false;
        }
    }
})

When(/^the Admin clicks the X icon in Language Options table$/, function () {
    let xIconBesideLanguage = $(editDIDConfigurationPage.xIconBesideAssignedToNumericOptionDynamicLocator.replace("<dynamic>", "1"));
    action.clickElement(xIconBesideLanguage, "X icon beside language in Edit DID Configuration page")
    action.isNotVisibleWait(xIconBesideLanguage,10000, "X icon beside language in Edit DID Configuration page")
})

Then(/^the language option is cleared in Language Options table$/, function () {
    let languageTextElement = $(editDIDConfigurationPage.languageTextAssignedToNumericOptionDynamicLocator.replace("<dynamic>", "1"));
    let languageTextElementValue = action.getElementText(languageTextElement, "Language Text Element in Edit DID Configuration page");
    chai.expect(languageTextElementValue).to.equal("");
})

Then(/^the X icon disappears in Language Options table$/, function () {
    let xIconBesideLanguage = $(editDIDConfigurationPage.xIconBesideAssignedToNumericOptionDynamicLocator.replace("<dynamic>", "1"));
    let xIconBesideLanguageDisplayStatus = action.isVisibleWait(xIconBesideLanguage, 1000, "X icon beside language in Edit DID Configuration page");
    chai.expect(xIconBesideLanguageDisplayStatus).to.be.false;
})

Then(/^the selected ServiceType in Edit DID configuration is "(.*)"$/, function (tiServiceTypeOption) {
    let tiServiceTypeDropdownOption = $(editDIDConfigurationPage.tiServiceTypeDropdownOptionDynamicLocator.replace("<dynamic>", tiServiceTypeOption));
    let tiServiceTypeDropdownOptionSelectedStatus = action.isSelectedWait(tiServiceTypeDropdownOption, 10000,"TI Service Type Dropdown Option in Edit DID Configuration page");
    chai.expect(tiServiceTypeDropdownOptionSelectedStatus).to.be.true;
})

Then(/^the four options "(.*)" should display the saved values$/, function (configurationToggles) {
    let configurationTogglesList = configurationToggles.split(",")
    for (let index = 0; index < configurationTogglesList.length; index++) {
        let configurationToggleElement = $(editDIDConfigurationPage.configurationToggleCheckboxLocator.replace("<dynamic>", configurationTogglesList[index]));
        let toggleOriginalValue = action.getElementAttribute(configurationToggleElement, "origvalue", "Toggle option " + configurationTogglesList[index] + " in Edit DID Configuration page");
        let toggleHasSavedValues = toggleOriginalValue === "true" || toggleOriginalValue === "false";
        chai.expect(toggleHasSavedValues).to.be.true;
    }
})

Then(/^we see the new field Client TIXP PIN displaying below the Prompt for NES Number toggle$/, function () {
    let clientTixpPinTextBoxBelowPromptForNesNumberDisplayStatus = action.isVisibleWait(editDIDConfigurationPage.clientTixpPinTextBoxBelowPromptForNesNumber, 10000, "Client TIXP PIN below the Prompt for NES Number toggle in Edit DID Configuration page");
    chai.expect(clientTixpPinTextBoxBelowPromptForNesNumberDisplayStatus).to.be.true;
})

When(/^user enter minimum 3 digits "(.*)" in the Client TIXP PIN field$/, function (clientTixpPin) {
    action.isVisibleWait(editDIDConfigurationPage.clientTixpPinTextBoxBelowPromptForNesNumber, 10000, "Client TIXP PIN below the Prompt for NES Number toggle in Edit DID Configuration page");
    action.enterValue(editDIDConfigurationPage.clientTixpPinTextBoxBelowPromptForNesNumber, clientTixpPin, "Client TIXP PIN below the Prompt for NES Number toggle in Edit DID Configuration page")
})

When(/^has clicked the SAVE button in Edit DID Configuration page$/, function () {
    action.isVisibleWait(editDIDConfigurationPage.saveButtonOnEditDIDConfiguration, 10000, "Save button in Edit DID Configuration page");
    action.clickElement(editDIDConfigurationPage.saveButtonOnEditDIDConfiguration, "Save button in Edit DID Configuration page");
    action.isNotVisibleWait(editDIDConfigurationPage.saveButtonOnEditDIDConfiguration, 3000, "Save button in Edit DID Configuration page");
})

Then(/^the DID is saved without any errors with Client TIXP PIN "(.*)"$/, function (expectedClientTixpPin) {
    action.isVisibleWait(editDIDConfigurationPage.clientTixpPinTextBoxBelowPromptForNesNumber, 10000, "Client TIXP PIN below the Prompt for NES Number toggle in Edit DID Configuration page");
    let clientTixpPinValueActual = action.getElementValue(editDIDConfigurationPage.clientTixpPinTextBoxBelowPromptForNesNumber, "Client TIXP PIN below the Prompt for NES Number toggle in Edit DID Configuration page");
    chai.expect(clientTixpPinValueActual).to.equal(expectedClientTixpPin)
})

When(/^user do not enter any value in the Client TIXP PIN field$/, function () {
    action.isVisibleWait(editDIDConfigurationPage.clientTixpPinTextBoxBelowPromptForNesNumber, 10000, "Client TIXP PIN below the Prompt for NES Number toggle in Edit DID Configuration page");
    action.clearValue(editDIDConfigurationPage.clientTixpPinTextBoxBelowPromptForNesNumber, "Client TIXP PIN below the Prompt for NES Number toggle in Edit DID Configuration page")
})

When(/^user enter maximum 9 digits "(.*)" in the Client TIXP PIN field$/, function (clientTixpPin) {
    action.isVisibleWait(editDIDConfigurationPage.clientTixpPinTextBoxBelowPromptForNesNumber, 10000, "Client TIXP PIN below the Prompt for NES Number toggle in Edit DID Configuration page");
    action.enterValue(editDIDConfigurationPage.clientTixpPinTextBoxBelowPromptForNesNumber, clientTixpPin, "Client TIXP PIN below the Prompt for NES Number toggle in Edit DID Configuration page")
})

When(/^user enter less than 3 digits "(.*)" in the Client TIXP PIN field$/, function (clientTixpPin) {
    action.isVisibleWait(editDIDConfigurationPage.clientTixpPinTextBoxBelowPromptForNesNumber, 10000, "Client TIXP PIN below the Prompt for NES Number toggle in Edit DID Configuration page");
    action.enterValue(editDIDConfigurationPage.clientTixpPinTextBoxBelowPromptForNesNumber, clientTixpPin, "Client TIXP PIN below the Prompt for NES Number toggle in Edit DID Configuration page")
})

Then(/^the DID is not saved and displays error message ‘Invalid Client TIXP PIN’$/, function () {
    let invalidClientTixpPinMessageTextActual = action.isVisibleWait(editDIDConfigurationPage.invalidClientTixpPinMessage, 10000, "Invalid Client TIXP PIN message in Edit DID Configuration page");
    chai.expect(invalidClientTixpPinMessageTextActual).to.be.true;
})

Then(/^the DID should be saved and the values are not visible on the Client TIXP PIN field$/, function () {
    action.isVisibleWait(editDIDConfigurationPage.clientTixpPinTextBoxBelowPromptForNesNumber, 10000, "Client TIXP PIN below the Prompt for NES Number toggle in Edit DID Configuration page");
    let clientTixpPinValueActual = action.getElementValue(editDIDConfigurationPage.clientTixpPinTextBoxBelowPromptForNesNumber, "Client TIXP PIN below the Prompt for NES Number toggle in Edit DID Configuration page");
    chai.expect(clientTixpPinValueActual).to.equal("");
})

When(/^user enter any non-numeric values "(.*)" in the Client TIXP PIN field$/, function (clientTixpPin) {
    action.isVisibleWait(editDIDConfigurationPage.clientTixpPinTextBoxBelowPromptForNesNumber, 10000, "Client TIXP PIN below the Prompt for NES Number toggle in Edit DID Configuration page");
    action.enterValue(editDIDConfigurationPage.clientTixpPinTextBoxBelowPromptForNesNumber, clientTixpPin, "Client TIXP PIN below the Prompt for NES Number toggle in Edit DID Configuration page")
})