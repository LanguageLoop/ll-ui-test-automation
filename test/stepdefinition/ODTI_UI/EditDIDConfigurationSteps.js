Then(/^the user is navigated to the Edit DID Configuration screen$/, function () {
    let pageTitleActual = action.getPageTitle();
    chai.expect(pageTitleActual).to.equal("Edit DID Configuration");
})

Then(/^the existing configuration is shown$/, function () {
    let existingConfigurationDisplayStatus = action.isVisibleWait(editDIDConfigurationPage.existingConfiguration, 10000);
    chai.expect(existingConfigurationDisplayStatus).to.be.true;
})


Then(/^there should be an X icon on each of the language options that has a language set$/, function () {
    let rowsCount = editDIDConfigurationPage.languageTableBodyRowsCount;
    for (let row = 1; row <= rowsCount; row++) {
        let languageTextElement = $(editDIDConfigurationPage.languageTextDynamicLocator.replace("<dynamic>", row.toString()));
        let languageTextElementValue = action.getElementText(languageTextElement);
        let xIconBesideLanguage = $(editDIDConfigurationPage.xIconBesideLanguageOptionDynamicLocator.replace("<dynamic>", row.toString()));
        if (languageTextElementValue !== "") {
            let xIconBesideLanguageDisplayStatus = action.isVisibleWait(xIconBesideLanguage, 10000);
            chai.expect(xIconBesideLanguageDisplayStatus).to.be.true;
        }
    }
})

Then(/^options with no Language set do not have an X icon$/, function () {
    let rowsCount = editDIDConfigurationPage.languageTableBodyRowsCount;
    for (let row = 1; row <= rowsCount; row++) {
        let languageTextElement = $(editDIDConfigurationPage.languageTextDynamicLocator.replace("<dynamic>", row.toString()));
        let languageTextElementValue = action.getElementText(languageTextElement);
        let xIconBesideLanguage = $(editDIDConfigurationPage.xIconBesideLanguageOptionDynamicLocator.replace("<dynamic>", row.toString()));
        if (languageTextElementValue === "") {
            let xIconBesideLanguageDisplayStatus = action.isVisibleWait(xIconBesideLanguage, 10000);
            chai.expect(xIconBesideLanguageDisplayStatus).to.be.false;
        }
    }
})

When(/^the Admin clicks the X icon in Language Options table$/, function () {
    let xIconBesideLanguage = $(editDIDConfigurationPage.xIconBesideAssignedToNumericOptionDynamicLocator.replace("<dynamic>", "1"));
    action.clickElement(xIconBesideLanguage)
    action.isNotVisibleWait(xIconBesideLanguage,10000)
})

Then(/^the language option is cleared in Language Options table$/, function () {
    let languageTextElement = $(editDIDConfigurationPage.languageTextAssignedToNumericOptionDynamicLocator.replace("<dynamic>", "1"));
    let languageTextElementValue = action.getElementText(languageTextElement);
    chai.expect(languageTextElementValue).to.equal("");
})

Then(/^the X icon disappears in Language Options table$/, function () {
    let xIconBesideLanguage = $(editDIDConfigurationPage.xIconBesideAssignedToNumericOptionDynamicLocator.replace("<dynamic>", "1"));
    let xIconBesideLanguageDisplayStatus = action.isVisibleWait(xIconBesideLanguage, 1000);
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