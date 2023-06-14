
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

    get languageSelectedTextInLanguageOptionsTable() {
        return $('//table[contains(@id,"TableLanguage")]/tbody/tr[1]/td[2]/div');
    },

    get welcomeAudioFileNameTextBox() {
        return $('//input[contains(@id,"DIDConfiguration_WelcomeAudioFilename")]');
    },

    get closedAudioFileNameTextBox() {
        return $('//input[contains(@id,"DIDConfiguration_CloseAudioFilename")]');
    },

    get languageAudioFileNameTextBox() {
        return $('//input[contains(@id,"DIDConfiguration_LanguageAudioFilename")]');
    },

    get timezoneDropdown() {
        return $('//select[contains(@id,"Timezone")]');
    },

    get saveButtonOnNewDIDConfiguration() {
        return $('//input[@value="Save" and (contains(@id,"Actions")) and not(contains(@id,"Modal"))]');
    },

    get duplicatePhoneNumberExistsErrorMessage() {
        return $('//span[@class="ValidationMessage" and text()="Duplicate phone number exists!"]');
    },

    get weekdaysCheckboxOnTimePickerModalDynamicLocator() {
        return '//input[@type="checkbox" and (contains(@id,"<dynamic>"))]';
    },

    get blockOverlapsErrorFeedbackMessage() {
        return $('//span[@class="Feedback_Message_Text" and text()="Time block overlaps with another time block"]');
    },

    get scheduleTableHeader() {
        return $('//table[contains(@id,"DIDAdvScheduleTable")]/thead');
    },

    get thirtyMinMinimumTimeBlockError() {
        return $('//span[@class="ValidationMessage" and text()="30min Minimum time block"]');
    },

    get businessHoursCheckbox() {
        return $('//span[text()="Business hours"]/preceding-sibling::input[@type="checkbox"]');
    },

    get scheduleTableBody() {
        return $('//table[contains(@id,"DIDAdvScheduleTable")]/tbody');
    },

    get scheduleTableBodyRowsCount() {
        return $$('//table[contains(@id,"DIDAdvScheduleTable")]/tbody/tr').length;
    },

    get isBusinessHoursCheckedDynamicLocator() {
        return '//table[contains(@id,"DIDAdvScheduleTable")]/tbody/tr[<dynamic>]/td[2]//input[@checked="checked"]';
    },

    get startEndTimeDynamicLocator() {
        return '//table[contains(@id,"DIDAdvScheduleTable")]/tbody/tr[<dynamic>]/td[1]';
    },

    get defaultConfigurationSection() {
        return $('//div[contains(text(),"Default") and (contains(text(),"Configuration"))]/parent::div');
    },

    get configurationToggleCheckboxLocator() {
        return '//label[text()="<dynamic>"]/parent::div//input';
    },
}