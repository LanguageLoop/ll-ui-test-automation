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
        action.isNotVisibleWait(editCampusConfigurationLink, 2000);
        let editLinkVisible = action.isVisibleWait(editCampusConfigurationLink, 1000);
        if (editLinkVisible) {
            action.clickElement(editCampusConfigurationLink);
            break;
        }
    }
})

When(/^the Admin is on the Duplicate Campus Configuration screen of Campus "(.*)"$/, function (campusPin) {
    let editCampusConfigurationLinksCount = $$(DIDConfigurationsPage.duplicateCampusConfigurationLinksLocator.replace("<dynamicCampusPin>", campusPin)).length;
    for (let index = 1; index <= editCampusConfigurationLinksCount; index++) {
        let editCampusConfigurationLink = $(DIDConfigurationsPage.duplicateCampusConfigurationLinkLocator.replace("<dynamicCampusPin>", campusPin).replace("<dynamicIndex>", index.toString()));
        let editLinkVisible = action.isVisibleWait(editCampusConfigurationLink, 1000);
        if (editLinkVisible) {
            action.clickElement(editCampusConfigurationLink);
            break;
        }
    }
})

Then(/^the admin is navigated back to the configuration list screen$/, function () {
    let pageTitleActual = action.getPageTitle();
    chai.expect(pageTitleActual).to.includes("DID Configurations");
})
