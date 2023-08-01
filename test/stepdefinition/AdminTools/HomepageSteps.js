
When(/^I click ODTI Contractors header link$/, function () {
    action.isClickableWait(adminToolsHomePage.ODTIContractors, 10000, "ODTI Contractors header link in Admin Tools Page");
    action.clickElement(adminToolsHomePage.ODTIContractors, "ODTI Contractors header link in Admin Tools Page");
})