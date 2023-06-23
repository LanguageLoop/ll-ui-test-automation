
When(/^they add a block on a contractor or interpreter "(.*)" on the Organisation page$/, function (contractorNameId) {
    action.isVisibleWait(organisationPage.addABlockLink, 10000,"Add a block link in Organisation page");
    action.clickElement(organisationPage.addABlockLink,"Add a block link in Organisation page");
    action.isVisibleWait(organisationPage.searchByContractorNameAndIdTextBox, 10000,"Search by contractor name text box in Organisation page");
    action.enterValue(organisationPage.searchByContractorNameAndIdTextBox,contractorNameId,"Search by contractor name text box in Organisation page");
    let contractorResultCheckboxElement = $(organisationPage.contractorResultCheckboxLocator.replace("<dynamic>",contractorNameId));
    action.isVisibleWait(contractorResultCheckboxElement,10000,"Contractor result checkbox in Organisation page");
    action.clickElement(contractorResultCheckboxElement,"Contractor result checkbox in Organisation page");
    action.selectTextFromDropdown(organisationPage.contractorSeverityDropdown, "Level","Contractor severity dropdown in Organisation page");
    action.enterValue(organisationPage.startDateContractor, "16-04-2023","Contractor start date text box in Organisation page");
    action.enterValue(organisationPage.endDateContractor, datetime.getRandomFutureDate(),"Contractor end date text box in Organisation page");
    action.pressKeys("Tab");
    action.isVisibleWait(organisationPage.addBlockButton, 10000,"Add block button in Organisation page");
    action.clickElement(organisationPage.addBlockButton,"Add block button in Organisation page");
    action.isNotVisibleWait(organisationPage.addBlockButton, 10000,"Add block button in Organisation page");
})

Then(/^the admin clicks on Remove on Organisation blocker$/, function () {
    let rule = 0;
    while (action.isVisibleWait(organisationPage.newBlockRuleLinksToggleIcon, 1000,"New block rule links toggle icon in Organisation page") === true) {
        action.isVisibleWait(organisationPage.newBlockRuleLinksToggleIcon, 10000,"New block rule links toggle icon in Organisation page");
        action.clickElement(organisationPage.newBlockRuleLinksToggleIcon,"New block rule links toggle icon in Organisation page");
        action.isVisibleWait(organisationPage.newBlockRuleLinksRemove, 10000,"New block rule links remove icon in Organisation page");
        action.clickElement(organisationPage.newBlockRuleLinksRemove,"New block rule links remove icon in Organisation page");
        browser.pause(3000);
        rule++
    }
})

When(/^user makes the block "(.*)" as expired by adding past date to Date Finished field on Organization$/, function (blockName) {
    let activeBlockerLinkElement = $(organisationPage.activeBlockerLinkLocator.replace("<dynamic>", blockName));
    action.isVisibleWait(activeBlockerLinkElement, 10000,"Active blocker link in Organisation page");
    action.clickElement(activeBlockerLinkElement,"Active blocker link in Organisation page");
    action.enterValue(organisationPage.endDateContractor, "17-04-2023","Contractor End date text box in Organisation page");
    action.pressKeys("Tab");
    action.isVisibleWait(organisationPage.saveButtonOnBlockingPopup, 10000,"Save button on blocking popup in Organisation page");
    action.clickElement(organisationPage.saveButtonOnBlockingPopup,"Save button on blocking popup in Organisation page");
    action.isNotVisibleWait(organisationPage.saveButtonOnBlockingPopup, 10000,"Save button on blocking popup in Organisation page");
})

When(/^I click on Show Expired toggle in organisation page$/, function () {
    action.isVisibleWait(organisationPage.showExpiredBlocksToggleCheck, 10000,"Show expired blocks toggle check in Organisation page");
    action.clickElement(organisationPage.showExpiredBlocksToggleCheck,"Show expired blocks toggle check in Organisation page");
})