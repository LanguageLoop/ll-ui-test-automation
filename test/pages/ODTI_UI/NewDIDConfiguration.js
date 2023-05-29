
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

    get startEndTimeValueInScheduleTable() {
        return $('//table[contains(@id,"DIDAdvScheduleTable")]/tbody/tr[1]/td[1]');
    },

    get noSchedulesSetMessage() {
        return $('//td[text()="No schedules set..."]');
    },

    get xIconInScheduleTable() {
        return $('//table[contains(@id,"DIDAdvScheduleTable")]/tbody/tr[1]/td[4]//span');
    },

    get timeBlockDeletedFeedbackMessage() {
        return $('//span[@class="Feedback_Message_Text" and text()="Time block deleted"]');
    },

    get editIconBesideLanguageOption() {
        return $('//table[contains(@id,"TableLanguage")]/tbody/tr[1]/td[3]//span');
    },

    get editLanguageModalPopup() {
        return $('//div[contains(@aria-labelledby,"LanguageModal")]');
    },

    get languageDropdownOnEditLanguageModal() {
        return $('//select[contains(@id,"NewLanguageInput")]');
    },

    get saveButtonOnEditLanguageModal() {
        return $('//input[contains(@name,"LanguageModal") and @value="Save"]');
    },

    get cancelButtonOnEditLanguageModal() {
        return $('//input[contains(@name,"LanguageModal") and @value="Cancel"]');
    },
}