When(/^the Admin clicks on Campus Configuration tab$/, function () {
    action.isVisibleWait(DIDConfigurationsPage.campusConfigurationTab, 10000, "Campus configuration tab on DID Configuration page");
    action.clickElement(DIDConfigurationsPage.campusConfigurationTab, "Campus configuration tab on DID Configuration page");
})

When(/^the Admin is on the Campus Configuration screen$/, function () {
    action.isVisibleWait(DIDConfigurationsPage.newConfigurationButtonUnderCampusConfiguration, 10000, "New Configuration button under Campus Configuration tab on DID Configuration page");
    action.clickElement(DIDConfigurationsPage.newConfigurationButtonUnderCampusConfiguration, "New Configuration button under Campus Configuration tab on DID Configuration page");
})

When(/^the Admin is on the Edit Campus Configuration screen of Campus "(.*)"$/, function (campusPin) {
    let editCampusConfigurationLinksCount = $$(DIDConfigurationsPage.editCampusConfigurationLinksLocator.replace("<dynamicCampusPin>", campusPin)).length;
    for (let index = 1; index <= editCampusConfigurationLinksCount; index++) {
        let editCampusConfigurationLink = $(DIDConfigurationsPage.editCampusConfigurationLinkLocator.replace("<dynamicCampusPin>", campusPin).replace("<dynamicIndex>", index.toString()));
        action.isNotVisibleWait(editCampusConfigurationLink, 2000, "Edit Campus Configuration Link on DID Configuration page");
        let editLinkVisible = action.isVisibleWait(editCampusConfigurationLink, 1000, "Edit Campus Configuration Link on DID Configuration page");
        if (editLinkVisible) {
            action.clickElement(editCampusConfigurationLink, "Edit Campus Configuration Link on DID Configuration page");
            break;
        }
    }
})

When(/^the Admin is on the Duplicate Campus Configuration screen of Campus "(.*)"$/, function (campusPin) {
    let editCampusConfigurationLinksCount = $$(DIDConfigurationsPage.duplicateCampusConfigurationLinksLocator.replace("<dynamicCampusPin>", campusPin)).length;
    for (let index = 1; index <= editCampusConfigurationLinksCount; index++) {
        let editCampusConfigurationLink = $(DIDConfigurationsPage.duplicateCampusConfigurationLinkLocator.replace("<dynamicCampusPin>", campusPin).replace("<dynamicIndex>", index.toString()));
        let editLinkVisible = action.isVisibleWait(editCampusConfigurationLink, 1000, "Edit Campus Configuration link on DID Configuration page");
        if (editLinkVisible) {
            action.clickElement(editCampusConfigurationLink, "Edit Campus Configuration link on DID Configuration page");
            break;
        }
    }
})

Then(/^the admin is navigated back to the configuration list screen$/, function () {
    let pageTitleActual = action.getPageTitle();
    chai.expect(pageTitleActual).to.includes("DID Configurations");
})

When(/^user searches for Campus name or DID "(.*)" by entering valid data in the search field$/, function (DIDOrCampusName) {
    action.isVisibleWait(DIDConfigurationsPage.searchByDIDOrCampusNameTextBox, 10000, "Search By DID Or Campus Name TextBox on DID Configuration page");
    action.enterValue(DIDConfigurationsPage.searchByDIDOrCampusNameTextBox, DIDOrCampusName, "Search By DID Or Campus Name TextBox on DID Configuration page");
})

When(/^clicks on Search button in DID Campus configuration$/, function () {
    action.isVisibleWait(DIDConfigurationsPage.searchButton, 10000, "Search button on DID Configuration page");
    action.clickElement(DIDConfigurationsPage.searchButton, "Search button on DID Configuration page");
    action.isNotVisibleWait(DIDConfigurationsPage.searchButton, 5000, "Search button on DID Configuration page");
})

Then(/^the correct search results campus "(.*)" are displayed$/, function (expectedCampus) {
    let tableRowsCount = DIDConfigurationsPage.tableRowsCount;
    for (let row = 1; row <= tableRowsCount; row++) {
        let campusValueElement = $(DIDConfigurationsPage.campusValueInTable.replace("<dynamicRowNumber>", row.toString()));
        let campusValueActual = action.getElementText(campusValueElement, "Campus Value on DID Configuration page");
        chai.expect(campusValueActual).to.equal(expectedCampus);
    }
})

When(/^user selects any Service Type "(.*)" from the dropdown$/, function (serviceType) {
    action.isVisibleWait(DIDConfigurationsPage.serviceTypeDropdown, 10000, "Service Type dropdown on DID Configuration page");
    action.selectTextFromDropdown(DIDConfigurationsPage.serviceTypeDropdown, serviceType, "Service Type dropdown on DID Configuration page");
})

Then(/^the correct search results service type "(.*)" are displayed$/, function (expectedServiceType) {
    let tableRowsCount = DIDConfigurationsPage.tableRowsCount;
    for (let row = 1; row <= tableRowsCount; row++) {
        let serviceTypeElement = $(DIDConfigurationsPage.serviceTypeValueInTable.replace("<dynamicRowNumber>", row.toString()));
        let serviceTypeActual = action.getElementText(serviceTypeElement, "Service Type on DID Configuration page");
        chai.expect(serviceTypeActual).to.equal(expectedServiceType);
    }
})

When(/^the Admin is on the DID Configurations Tab$/, function () {
    action.isVisibleWait(DIDConfigurationsPage.didConfigurationTab, 10000, "DID Configuration tab on DID Configuration page");
    action.clickElement(DIDConfigurationsPage.didConfigurationTab, "DID Configuration tab on DID Configuration page");
})

Then(/^the user sees a table that lists all the DID configurations defined$/, function () {
    let didConfigurationTableDisplayStatus = action.isVisibleWait(DIDConfigurationsPage.didConfigurationTable, 10000, "DID Configuration table on DID Configuration page");
    chai.expect(didConfigurationTableDisplayStatus).to.be.true;
})

Then(/^each row shows the "(.*)" and "(.*)" links under DID Configuration tab$/, function (expectedHeaders,expectedLinks) {
    let didConfigurationTableHeaderRowText = action.getElementText(DIDConfigurationsPage.didConfigurationTableHeaderRow, "DID Configuration table header row on DID Configuration page");
    let expectedHeadersList = expectedHeaders.split(",")
    for (let i=0; i<expectedHeadersList.length;i++) {
        chai.expect(didConfigurationTableHeaderRowText).to.includes(expectedHeadersList[i]);
    }
    let didConfigurationTableEditAndDuplicateLinks = action.getElementText(DIDConfigurationsPage.didConfigurationTableEditAndDuplicateLinks, "DID Configuration table Edit and Duplicate Links on DID Configuration page");
    let expectedLinksList = expectedLinks.split(",")
    for (let i=0; i<expectedLinksList.length;i++) {
        chai.expect(didConfigurationTableEditAndDuplicateLinks).to.includes(expectedLinksList[i]);
    }
})

Then(/^the user sees a New Configuration button under DID Configuration tab$/, function () {
    let newConfigurationButtonDisplayStatus = action.isVisibleWait(DIDConfigurationsPage.newConfigurationButtonUnderDIDConfiguration, 10000, "DID New Configuration button in DID Configuration page");
    chai.expect(newConfigurationButtonDisplayStatus).to.be.true;
})

Then(/^the user sees a table that lists all the Campus configurations defined$/, function () {
    let campusConfigurationTableDisplayStatus = action.isVisibleWait(DIDConfigurationsPage.campusConfigurationTable, 10000, "Campus Configuration table on DID Configuration page");
    chai.expect(campusConfigurationTableDisplayStatus).to.be.true;
})

Then(/^each row shows the "(.*)" and "(.*)" links under Campus Configuration tab$/, function (expectedHeaders,expectedLinks) {
    let campusConfigurationTableHeaderRowText = action.getElementText(DIDConfigurationsPage.campusConfigurationTableHeaderRow, "Campus Configuration Table Header Row on DID Configuration page");
    let expectedHeadersList = expectedHeaders.split(",")
    for (let i=0; i<expectedHeadersList.length;i++) {
        chai.expect(campusConfigurationTableHeaderRowText).to.includes(expectedHeadersList[i]);
    }
    let campusConfigurationTableEditAndDuplicateLinks = action.getElementText(DIDConfigurationsPage.campusConfigurationTableEditAndDuplicateLinks, "Campus Configuration Table Edit And Duplicate Links on DID Configuration page");
    let expectedLinksList = expectedLinks.split(",")
    for (let i=0; i<expectedLinksList.length;i++) {
        chai.expect(campusConfigurationTableEditAndDuplicateLinks).to.includes(expectedLinksList[i]);
    }
})

Then(/^the user sees a New Configuration button under Campus Configuration tab$/, function () {
    let newConfigurationButtonDisplayStatus = action.isVisibleWait(DIDConfigurationsPage.newConfigurationButtonUnderCampusConfiguration, 10000, "New Configuration Button under Campus Configuration tab in DID Configuration page");
    chai.expect(newConfigurationButtonDisplayStatus).to.be.true;
})

When(/^the user has clicked on the New Configuration button under DID Configuration tab$/, function () {
    action.isVisibleWait(DIDConfigurationsPage.newConfigurationButtonUnderDIDConfiguration, 10000, "New Configuration Button under DID Configuration tab in DID Configuration page");
    action.clickElement(DIDConfigurationsPage.newConfigurationButtonUnderDIDConfiguration, "New Configuration Button under DID Configuration tab in DID Configuration page");
})

When(/^the user has clicked on the New Configuration button under Campus Configuration tab$/, function () {
    action.isVisibleWait(DIDConfigurationsPage.newConfigurationButtonUnderCampusConfiguration, 10000, "New Configuration Button under Campus Configuration tab in DID Configuration page");
    action.clickElement(DIDConfigurationsPage.newConfigurationButtonUnderCampusConfiguration, "New Configuration Button under Campus Configuration tab in DID Configuration page");
})

When(/^the Admin is on the Edit DID Configuration screen of Campus "(.*)"$/, function (campusPin) {
    let editDIDConfigurationLinksCount = $$(DIDConfigurationsPage.editDIDConfigurationLinksLocator.replace("<dynamicCampusPin>", campusPin)).length;
    for (let index = 1; index <= editDIDConfigurationLinksCount; index++) {
        let editDIDConfigurationLink = $(DIDConfigurationsPage.editDIDConfigurationLinkLocator.replace("<dynamicCampusPin>", campusPin).replace("<dynamicIndex>", index.toString()));
        action.isNotVisibleWait(editDIDConfigurationLink, 2000, "Edit DID Configuration link on DID Configuratio page");
        let editLinkVisible = action.isVisibleWait(editDIDConfigurationLink, 1000, "Edit DID Configuration link on DID Configuratio page");
        if (editLinkVisible) {
            action.clickElement(editDIDConfigurationLink,"Edit DID Configuration link on DID Configuratio page");
            break;
        }
    }
})

When(/^the Admin is on the Duplicate DID Configuration screen of Campus "(.*)"$/, function (campusPin) {
    let editDIDConfigurationLinksCount = $$(DIDConfigurationsPage.duplicateDIDConfigurationLinksLocator.replace("<dynamicCampusPin>", campusPin)).length;
    for (let index = 1; index <= editDIDConfigurationLinksCount; index++) {
        let editDIDConfigurationLink = $(DIDConfigurationsPage.duplicateDIDConfigurationLinkLocator.replace("<dynamicCampusPin>", campusPin).replace("<dynamicIndex>", index.toString()));
        let editLinkVisible = action.isVisibleWait(editDIDConfigurationLink, 1000, "Edit DID Configuration Link on DID Configuration page");
        if (editLinkVisible) {
            action.clickElement(editDIDConfigurationLink, "Edit DID Configuration Link on DID Configuration page");
            break;
        }
    }
})

When(/^the Admin has clicked on the Campus Name "(.*)" in the campus configuration table$/, function (campusPin) {
    let campusNameLinksCount = $$(DIDConfigurationsPage.campusNameLinksCampusConfigurationLocator.replace("<dynamicCampusPin>", campusPin)).length;
    for (let index = 1; index <= campusNameLinksCount; index++) {
        let campusNameLink = $(DIDConfigurationsPage.campusNameLinkCampusConfigurationLocator.replace("<dynamicCampusPin>", campusPin).replace("<dynamicIndex>", index.toString()));
        let campusNameLinkVisible = action.isVisibleWait(campusNameLink, 1000, "Campus Name Link on DID Configuration page");
        if (campusNameLinkVisible) {
            action.clickElement(campusNameLink, "Campus Name Link on DID Configuration page");
            break;
        }
    }
})

When(/^the Admin has clicked on the Campus Name "(.*)" in the DID configuration table$/, function (campusPin) {
    let campusNameLinksCount = $$(DIDConfigurationsPage.campusNameLinksDIDConfigurationLocator.replace("<dynamicCampusPin>", campusPin)).length;
    for (let index = 1; index <= campusNameLinksCount; index++) {
        let campusNameLink = $(DIDConfigurationsPage.campusNameLinkDIDConfigurationLocator.replace("<dynamicCampusPin>", campusPin).replace("<dynamicIndex>", index.toString()));
        let campusNameLinkVisible = action.isVisibleWait(campusNameLink, 1000, "Campus Name Link on DID Configuration page");
        if (campusNameLinkVisible) {
            action.clickElement(campusNameLink, "Campus Name Link on DID Configuration page");
            break;
        }
    }
})

When(/^the Admin clicks on Edit for an existing DID Configuration with General TI$/, function () {
    let editDIDConfigurationLinksCount = $$(DIDConfigurationsPage.editGeneralTiDIDConfigurationLinksLocator).length;
    for (let index = 1; index <= editDIDConfigurationLinksCount; index++) {
        let editDIDConfigurationLink = $(DIDConfigurationsPage.editGeneralTiDIDConfigurationLinkLocator.replace("<dynamicIndex>", index.toString()));
        action.isNotVisibleWait(editDIDConfigurationLink, 2000,"Edit DID configuration link in DID configuration page");
        let editLinkVisible = action.isVisibleWait(editDIDConfigurationLink, 1000,"Edit DID configuration link in DID configuration page");
        if (editLinkVisible) {
            action.clickElement(editDIDConfigurationLink,"Edit DID configuration link in DID configuration page");
            break;
        }
    }
})