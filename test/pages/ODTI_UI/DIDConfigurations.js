
module.exports = {

    get campusConfigurationTab() {
        return $('//div[@role="tab" and text()="Campus Configuration"]');
    },

    get newConfigurationButtonUnderCampusConfiguration() {
        return $('//input[@value="New Configuration" and contains(@onclick,"Campus")]');
    },

    get editCampusConfigurationLinkLocator() {
        return '(//a[text()="<dynamicCampusPin>"]/parent::td/following-sibling::td/a[text()="Edit"])[<dynamicIndex>]';
    },

    get editCampusConfigurationLinksLocator() {
        return '//a[text()="<dynamicCampusPin>"]/parent::td/following-sibling::td/a[text()="Edit"]';
    },

    get duplicateCampusConfigurationLinkLocator() {
        return '(//a[text()="<dynamicCampusPin>"]/parent::td/following-sibling::td/a[text()="Duplicate"])[<dynamicIndex>]';
    },

    get duplicateCampusConfigurationLinksLocator() {
        return '//a[text()="<dynamicCampusPin>"]/parent::td/following-sibling::td/a[text()="Duplicate"]';
    },

    get searchByDIDOrCampusNameTextBox() {
        return $('//input[contains(@id,"SearchInput2")]');
    },

    get searchButton() {
        return $('//input[contains(@id,"SearchInput2")]/following-sibling::input[@value="Search"]')
    },

    get tableRowsCount() {
        return $$('//input[contains(@id,"SearchInput2")]/parent::div/parent::div//tbody//tr').length;
    },

    get campusValueInTable() {
        return '//input[contains(@id,"SearchInput2")]/parent::div/parent::div//tbody//tr[<dynamicRowNumber>]/td[1]';
    },

    get serviceTypeDropdown() {
        return $('//input[contains(@id,"SearchInput2")]/following-sibling::select');
    },

    get serviceTypeValueInTable() {
        return '//input[contains(@id,"SearchInput2")]/parent::div/parent::div//tbody//tr[<dynamicRowNumber>]/td[2]';
    },

    get didConfigurationTab() {
        return $('//div[@role="tab" and text()="DID Configuration"]');
    },

    get didConfigurationTable() {
        return $('//table[contains(@id,"DIDConfigurationTable")]')
    },

    get didConfigurationTableHeaderRow() {
        return $('//table[contains(@id,"DIDConfigurationTable")]/thead/tr')
    },

    get didConfigurationTableEditAndDuplicateLinks() {
        return $('//table[contains(@id,"DIDConfigurationTable")]/tbody/tr[1]//a[not(contains(text(),"-"))]/parent::td');
    },

    get newConfigurationButtonUnderDIDConfiguration() {
        return $('//input[@value="New Configuration" and contains(@onclick,"DIDConfiguration")]');
    },

    get campusConfigurationTable() {
        return $('//table[contains(@id,"CampusConfigurationTable")]')
    },

    get campusConfigurationTableHeaderRow() {
        return $('//table[contains(@id,"CampusConfigurationTable")]/thead/tr')
    },

    get campusConfigurationTableEditAndDuplicateLinks() {
        return $('//table[contains(@id,"CampusConfigurationTable")]/tbody/tr[1]//a[not(contains(text(),"-"))]/parent::td');
    },

    get editDIDConfigurationLinkLocator() {
        return '(//a[text()="<dynamicCampusPin>"]/parent::td/following-sibling::td/a[text()="Edit"])[<dynamicIndex>]';
    },

    get editDIDConfigurationLinksLocator() {
        return '//a[text()="<dynamicCampusPin>"]/parent::td/following-sibling::td/a[text()="Edit"]';
    },

    get duplicateDIDConfigurationLinkLocator() {
        return '(//a[text()="<dynamicCampusPin>"]/parent::td/following-sibling::td/a[text()="Duplicate"])[<dynamicIndex>]';
    },

    get duplicateDIDConfigurationLinksLocator() {
        return '//a[text()="<dynamicCampusPin>"]/parent::td/following-sibling::td/a[text()="Duplicate"]';
    },

    get campusNameLinkCampusConfigurationLocator() {
        return '(//a[text()="<dynamicCampusPin>"])[<dynamicIndex>]';
    },

    get campusNameLinksCampusConfigurationLocator() {
        return '//a[text()="<dynamicCampusPin>"]';
    },

    get campusNameLinkDIDConfigurationLocator() {
        return '(//a[text()="<dynamicCampusPin>"])[<dynamicIndex>]';
    },

    get campusNameLinksDIDConfigurationLocator() {
        return '//a[text()="<dynamicCampusPin>"]';
    },
}