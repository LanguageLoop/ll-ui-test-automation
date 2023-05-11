
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
}