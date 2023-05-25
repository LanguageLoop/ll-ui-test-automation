
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

    get cancelButton(){
        return $('//input[@value="Cancel"]')
    },

    get addMoreButtonUnderSchedule() {
        return $('//a[text()="Add More"]');
    },

    get scheduleTimePickerModal() {
        return $('//div[contains(@aria-labelledby,"TimePickerModal")]');
    },

    get scheduleStartTimeDropdown() {
        return $('//select[contains(@id,"ModalStartTimeInput")]');
    },

    get scheduleEndTimeDropdown() {
        return $('//select[contains(@id,"ModalEndTimeInput")]');
    },

    get saveButtonOnScheduleTimePickerModal() {
        return $('//input[contains(@id,"TimePickerModal") and @value="Save"]');
    },

    get cancelButtonOnScheduleTimePickerModal() {
        return $('//input[contains(@id,"TimePickerModal") and @value="Cancel"]');
    },
}