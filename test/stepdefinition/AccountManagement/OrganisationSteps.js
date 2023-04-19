
When(/^they add a block on a contractor or interpreter "(.*)" on the Organisation page$/, function (contractorNameId) {
    action.isVisibleWait(organisationPage.addABlockLink, 10000);
    action.clickElement(organisationPage.addABlockLink);
    action.isVisibleWait(organisationPage.searchByContractorNameAndIdTextBox, 10000);
    action.enterValue(organisationPage.searchByContractorNameAndIdTextBox,contractorNameId);
    let contractorResultCheckboxElement = $(organisationPage.contractorResultCheckboxLocator.replace("<dynamic>",contractorNameId));
    action.isVisibleWait(contractorResultCheckboxElement,10000);
    action.clickElement(contractorResultCheckboxElement);
    action.selectTextFromDropdown(organisationPage.contractorSeverityDropdown, "Level");
    action.enterValue(organisationPage.startDateContractor, "16-04-2023");
    action.enterValue(organisationPage.endDateContractor, datetime.getRandomFutureDate());
    action.pressKeys("Tab");
    action.isVisibleWait(organisationPage.addBlockButton, 10000);
    action.clickElement(organisationPage.addBlockButton);
    action.isNotVisibleWait(organisationPage.addBlockButton, 10000);
})

Then(/^the admin clicks on Remove on Organisation blocker$/, function () {
    let rule = 0;
    while (action.isVisibleWait(organisationPage.newBlockRuleLinksToggleIcon, 1000) === true) {
        action.isVisibleWait(organisationPage.newBlockRuleLinksToggleIcon, 10000);
        action.clickElement(organisationPage.newBlockRuleLinksToggleIcon);
        action.isVisibleWait(organisationPage.newBlockRuleLinksRemove, 10000);
        action.clickElement(organisationPage.newBlockRuleLinksRemove);
        browser.pause(3000);
        rule++
    }
})