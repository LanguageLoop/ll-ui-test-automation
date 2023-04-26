
module.exports = {

    get TIServiceTypeDropdown() {
        return $('//select[contains(@id,"TIServiceType")]');
    },

    get campusPinInputTextBox() {
        return $('//input[contains(@id,"DIDConfiguration_CampusBillToId")]');
    },

    get savedConfiguration() {
        return $('//div[contains(@id,"DIDConfigurationForm")]');
    }

}