When(/^the Admin clicks on Campus Configuration tab$/, function () {
    action.isVisibleWait(DIDConfigurationsPage.campusConfigurationTab, 10000);
    action.clickElement(DIDConfigurationsPage.campusConfigurationTab);
})

When(/^the Admin is on the Campus Configuration screen$/, function () {
    action.isVisibleWait(DIDConfigurationsPage.newConfigurationButtonUnderCampusConfiguration, 10000);
    action.clickElement(DIDConfigurationsPage.newConfigurationButtonUnderCampusConfiguration);
})

When(/^the Admin is on the Edit Campus Configuration screen of Campus "(.*)"$/, function (campusPin) {
    let editCampusConfigurationLinksCount = $$(DIDConfigurationsPage.editCampusConfigurationLinksLocator.replace("<dynamicCampusPin>", campusPin)).length;
    for (let index = 1; index <= editCampusConfigurationLinksCount; index++) {
        let editCampusConfigurationLink = $(DIDConfigurationsPage.editCampusConfigurationLinkLocator.replace("<dynamicCampusPin>", campusPin).replace("<dynamicIndex>", index.toString()));
        let editLinkVisible = action.isVisibleWait(editCampusConfigurationLink, 1000);
        if (editLinkVisible) {
            action.clickElement(editCampusConfigurationLink);
            break;
        }
    }
})

