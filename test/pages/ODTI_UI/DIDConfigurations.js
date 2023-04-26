
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
    }
}