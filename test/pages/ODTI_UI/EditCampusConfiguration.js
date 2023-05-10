
module.exports = {

    get TIServiceTypeDropdown() {
        return $('//select[contains(@id,"TIServiceType")]');
    },

    get campusPinInputTextBox() {
        return $('//input[contains(@id,"DIDConfiguration_CampusBillToId")]');
    },

    get savedConfiguration() {
        return $('//div[contains(@id,"DIDConfigurationForm")]');
    },

    get TIServiceTypeDropdownDisabled() {
        return $('//select[contains(@id,"TIServiceType") and @disabled]');
    },

    get campusPinInputTextBoxReadOnly() {
        return $('//input[contains(@id,"DIDConfiguration_CampusBillToId") and @readonly]');
    },

}