
module.exports = {

    get didNumberInputTextBox() {
        return $('//input[contains(@id,"DIDConfiguration_PhoneNumber")]');
    },

    get existingDIDConfiguration() {
        return $('//div[contains(@id,"DIDConfigurationForm")]');
    },

    get tiServiceTypeDropdown() {
        return $('//select[contains(@id,"DIDConfiguration_TIServiceType")]')
    },

    get campusPinInputTextBox() {
        return $('//input[contains(@id,"DIDConfiguration_CampusBillToId")]');
    },

    get campusNameBelowInputTextBox() {
        return $('//span[contains(@id,"IsWithCampus")]/a');
    },

    get milsConfigurationSection() {
        return $('//div[contains(text(),"MILS") and (contains(text(),"Configuration"))]/parent::div');
    },

    get tixpConfigurationSection() {
        return $('//div[contains(text(),"TIXP") and (contains(text(),"Configuration"))]/parent::div');
    },
}