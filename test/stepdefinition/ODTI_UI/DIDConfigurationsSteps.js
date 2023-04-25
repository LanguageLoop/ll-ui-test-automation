When(/^the Admin clicks on Campus Configuration tab$/, function () {
    action.isVisibleWait(DIDConfigurationsPage.campusConfigurationTab, 10000);
    action.clickElement(DIDConfigurationsPage.campusConfigurationTab);
})

When(/^the Admin is on the Campus Configuration screen$/, function () {
    action.isVisibleWait(DIDConfigurationsPage.newConfigurationButtonUnderCampusConfiguration, 10000);
    action.clickElement(DIDConfigurationsPage.newConfigurationButtonUnderCampusConfiguration);
})

