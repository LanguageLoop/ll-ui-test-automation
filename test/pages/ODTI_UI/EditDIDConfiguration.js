
module.exports = {

    get existingConfiguration() {
        return $('//div[contains(@id,"DIDConfigurationForm")]');
    },

    get xIconBesideLanguageOptionDynamicLocator() {
        return '//table[contains(@id,"TableLanguage")]/tbody/tr[<dynamic>]/td[4]//span'; //dynamic row number
    },

    get languageTextDynamicLocator() {
        return '//table[contains(@id,"TableLanguage")]/tbody/tr[<dynamic>]/td[2]/div'; //dynamic row number
    },

    get languageTableBodyRowsCount() {
        return $$('//table[contains(@id,"TableLanguage")]/tbody/tr').length;
    },

    get xIconBesideAssignedToNumericOptionDynamicLocator() {
        return '//table[contains(@id,"TableLanguage")]/tbody/tr//div[text()="<dynamic>"]/parent::td/following-sibling::td[3]//span'; //dynamic option number
    },

    get languageTextAssignedToNumericOptionDynamicLocator() {
        return '//table[contains(@id,"TableLanguage")]/tbody/tr//div[text()="<dynamic>"]/parent::td/following-sibling::td[1]/div'; //dynamic option number
    },

    get tiServiceTypeDropdownOptionDynamicLocator() {
        return '//select[contains(@id,"DIDConfiguration_TIServiceType")]/option[text()="<dynamic>"]'; //dynamic TI Service Type
    },

    get configurationToggleCheckboxLocator() {
        return '//label[text()="<dynamic>"]/parent::div//input';
    },
}