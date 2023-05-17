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

When(/^user searches for Campus name or DID "(.*)" by entering valid data in the search field$/, function (DIDOrCampusName) {
    action.isVisibleWait(DIDConfigurationsPage.searchByDIDOrCampusNameTextBox, 10000);
    action.enterValue(DIDConfigurationsPage.searchByDIDOrCampusNameTextBox, DIDOrCampusName);
})

When(/^clicks on Search button in DID Campus configuration$/, function () {
    action.isVisibleWait(DIDConfigurationsPage.searchButton, 10000);
    action.clickElement(DIDConfigurationsPage.searchButton);
    action.isNotVisibleWait(DIDConfigurationsPage.searchButton, 2000);
})

Then(/^the correct search results campus "(.*)" are displayed$/, function (expectedCampus) {
    let tableRowsCount = DIDConfigurationsPage.tableRowsCount;
    for (let row = 1; row <= tableRowsCount; row++) {
        let campusValueElement = $(DIDConfigurationsPage.campusValueInTable.replace("<dynamicRowNumber>", row.toString()));
        let campusValueActual = action.getElementText(campusValueElement);
        chai.expect(campusValueActual).to.equal(expectedCampus);
    }
})

When(/^user selects any Service Type "(.*)" from the dropdown$/, function (serviceType) {
    action.isVisibleWait(DIDConfigurationsPage.serviceTypeDropdown, 10000);
    action.selectTextFromDropdown(DIDConfigurationsPage.serviceTypeDropdown, serviceType);
})

Then(/^the correct search results service type "(.*)" are displayed$/, function (expectedServiceType) {
    let tableRowsCount = DIDConfigurationsPage.tableRowsCount;
    for (let row = 1; row <= tableRowsCount; row++) {
        let serviceTypeElement = $(DIDConfigurationsPage.serviceTypeValueInTable.replace("<dynamicRowNumber>", row.toString()));
        let serviceTypeActual = action.getElementText(serviceTypeElement);
        chai.expect(serviceTypeActual).to.equal(expectedServiceType);
    }
})

When(/^the Admin is on the DID Configurations Tab$/, function () {
    action.isVisibleWait(DIDConfigurationsPage.didConfigurationTab, 10000);
    action.clickElement(DIDConfigurationsPage.didConfigurationTab);
})

Then(/^the user sees a table that lists all the DID configurations defined$/, function () {
    let didConfigurationTableDisplayStatus = action.isVisibleWait(DIDConfigurationsPage.didConfigurationTable, 10000);
    chai.expect(didConfigurationTableDisplayStatus).to.be.true;
})

Then(/^each row shows the "(.*)" and "(.*)" links under DID Configuration tab$/, function (expectedHeaders,expectedLinks) {
    let didConfigurationTableHeaderRowText = action.getElementText(DIDConfigurationsPage.didConfigurationTableHeaderRow, 10000);
    let expectedHeadersList = expectedHeaders.split(",")
    for (let i=0; i<expectedHeadersList.length;i++) {
        chai.expect(didConfigurationTableHeaderRowText).to.includes(expectedHeadersList[i]);
    }
    let didConfigurationTableEditAndDuplicateLinks = action.getElementText(DIDConfigurationsPage.didConfigurationTableEditAndDuplicateLinks, 10000);
    let expectedLinksList = expectedLinks.split(",")
    for (let i=0; i<expectedLinksList.length;i++) {
        chai.expect(didConfigurationTableEditAndDuplicateLinks).to.includes(expectedLinksList[i]);
    }
})

Then(/^the user sees a New Configuration button under DID Configuration tab$/, function () {
    let newConfigurationButtonDisplayStatus = action.isVisibleWait(DIDConfigurationsPage.newConfigurationButtonUnderDIDConfiguration, 10000);
    chai.expect(newConfigurationButtonDisplayStatus).to.be.true;
})

Then(/^the user sees a table that lists all the Campus configurations defined$/, function () {
    let campusConfigurationTableDisplayStatus = action.isVisibleWait(DIDConfigurationsPage.campusConfigurationTable, 10000);
    chai.expect(campusConfigurationTableDisplayStatus).to.be.true;
})

Then(/^each row shows the "(.*)" and "(.*)" links under Campus Configuration tab$/, function (expectedHeaders,expectedLinks) {
    let campusConfigurationTableHeaderRowText = action.getElementText(DIDConfigurationsPage.campusConfigurationTableHeaderRow, 10000);
    let expectedHeadersList = expectedHeaders.split(",")
    for (let i=0; i<expectedHeadersList.length;i++) {
        chai.expect(campusConfigurationTableHeaderRowText).to.includes(expectedHeadersList[i]);
    }
    let campusConfigurationTableEditAndDuplicateLinks = action.getElementText(DIDConfigurationsPage.campusConfigurationTableEditAndDuplicateLinks, 10000);
    let expectedLinksList = expectedLinks.split(",")
    for (let i=0; i<expectedLinksList.length;i++) {
        chai.expect(campusConfigurationTableEditAndDuplicateLinks).to.includes(expectedLinksList[i]);
    }
})

Then(/^the user sees a New Configuration button under Campus Configuration tab$/, function () {
    let newConfigurationButtonDisplayStatus = action.isVisibleWait(DIDConfigurationsPage.newConfigurationButtonUnderCampusConfiguration, 10000);
    chai.expect(newConfigurationButtonDisplayStatus).to.be.true;
})

When(/^the user has clicked on the New Configuration button under DID Configuration tab$/, function () {
    action.isVisibleWait(DIDConfigurationsPage.newConfigurationButtonUnderDIDConfiguration, 10000);
    action.clickElement(DIDConfigurationsPage.newConfigurationButtonUnderDIDConfiguration);
})

When(/^the user has clicked on the New Configuration button under Campus Configuration tab$/, function () {
    action.isVisibleWait(DIDConfigurationsPage.newConfigurationButtonUnderCampusConfiguration, 10000);
    action.clickElement(DIDConfigurationsPage.newConfigurationButtonUnderCampusConfiguration);
})

When(/^the Admin is on the Edit DID Configuration screen of Campus "(.*)"$/, function (campusPin) {
    let editDIDConfigurationLinksCount = $$(DIDConfigurationsPage.editDIDConfigurationLinksLocator.replace("<dynamicCampusPin>", campusPin)).length;
    for (let index = 1; index <= editDIDConfigurationLinksCount; index++) {
        let editDIDConfigurationLink = $(DIDConfigurationsPage.editDIDConfigurationLinkLocator.replace("<dynamicCampusPin>", campusPin).replace("<dynamicIndex>", index.toString()));
        action.isNotVisibleWait(editDIDConfigurationLink, 2000);
        let editLinkVisible = action.isVisibleWait(editDIDConfigurationLink, 1000);
        if (editLinkVisible) {
            action.clickElement(editDIDConfigurationLink);
            break;
        }
    }
})