
module.exports = {

    get existingConfiguration() {
        return $('//div[contains(@id,"DIDConfigurationForm")]');
    },

    get xIconBesideLanguageOptionDynamicLocator() {
        return '//table[contains(@id,"TableLanguage")]/tbody/tr[<dynamic>]/td[4]//span';
    },

    get languageTextDynamicLocator() {
        return '//table[contains(@id,"TableLanguage")]/tbody/tr[<dynamic>]/td[2]/div';
    },

    get languageTableBodyRowsCount() {
        return $$('//table[contains(@id,"TableLanguage")]/tbody/tr').length;
    },
}