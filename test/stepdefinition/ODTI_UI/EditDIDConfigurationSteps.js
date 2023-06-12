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