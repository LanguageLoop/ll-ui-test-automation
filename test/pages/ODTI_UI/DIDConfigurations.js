
module.exports = {

    get campusConfigurationTab() {
        return $('//div[@role="tab" and text()="Campus Configuration"]');
    },

    get newConfigurationButtonUnderCampusConfiguration() {
        return $('//input[@value="New Configuration" and contains(@onclick,"Campus")]');
    }
}