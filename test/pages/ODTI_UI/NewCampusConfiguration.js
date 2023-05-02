
module.exports = {

    get TIServiceTypeDropdownDisabled() {
        return $('//select[contains(@id,"TIServiceType") and @disabled]');
    },

    get campusPinInputTextBox() {
        return $('//input[contains(@id,"DIDConfiguration_CampusBillToId")]');
    },

    get configurationSection() {
        return $('//div[text()="Configuration"]/parent::div[contains(@class,"card-sectioned-top")]');
    },

    get savedConfiguration() {
        return $('//div[contains(@id,"DIDConfigurationForm")]');
    },

    get campusNameBelowInputTextBox() {
        return $('//span[contains(@id,"IsWithCampus")]/a');
    },

    get configurationToggleCheckboxLocator() {
        return '//label[text()="<dynamic>"]/parent::div//input';
    },

    get cancelButton(){
        return $('//input[@value="Cancel"]')
    }

}