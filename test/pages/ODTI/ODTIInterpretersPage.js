module.exports = {

    get ODTIJobsSwitchDropdown() {
        return $('//select[contains(@class,"BorderlessShadowlessDropdown")]');
    },

    get ODTIJobsSwitchDropdownOptionLocator() {
        return '//select[contains(@class,"BorderlessShadowlessDropdown")]/option[text()="<dynamic>"]';
    },

    get ODTILanguageSwitchDropdown() {
        return $('//div[contains(@id,"Language")]');
    },

    get ODTILanguageDropdownLabel() {
        return '//span[text()="<dynamic>"]';
    },

    get ODTILogonStatusDropdown() {
        return $('//select[contains(@id,"LogOn")]');
    },

    get ODTILogonStatusDropdownLabel() {
        return $('//select[contains(@id,"LogOn")]/Option[text()="Any - LogOn Status"]');
    },

    get ODTILanguageSwitchDropdown() {
        return $('//span[text()="- Language -"]');
    },

    get languageDropdownSearchBox() {
        return $('//input[contains(@id,"s2id_autogen1_search")]')
    },

    get logonStatusDropdownOptionLabel() {
        return '//select[contains(@id,"LogOn")]/option[text()="<dynamic>"]';
    },

    get ODTIInterpretersResultsTable() {
        return $('//table[contains(@id,"ContractorODTITable")]');
    },

    get ODTIInterpretersResultsTableBody() {
        return $('//table[contains(@id,"ContractorODTITable")]/tbody');
    },

    get interpreterResultRowsCount() {
        return $$('//table[contains(@id,"ContractorODTITable")]/tbody/tr').length;
    },

    get interpreterResultsValueLocator() {
        return '//table[contains(@id,"ContractorODTITable")]/tbody/tr[<dynamicRowNumber>]/td[<dynamicColumnNumber>]';
    },

    get interpreterColumnHeaders() {
        return $('//table[contains(@id,"ContractorODTITable")]/thead/tr');
    },

    get interpreterColumnHeaders() {
        return $('//table[contains(@id,"ContractorODTITable")]/thead/tr');
    },

    get interpreterResultsLinkTextValueLocator() {
        return '//table[contains(@id,"ContractorODTITable")]/tbody//span[contains(text(),"<dynamicRowLinkText>")]/parent::a/parent::td/parent::tr/td[<dynamicColumnNumber>]'
    },

    get interpreterResultsValueLinkLocator() {
        return '//table[contains(@id,"ContractorODTITable")]/tbody/tr[<dynamicRowNumber>]/td[<dynamicColumnNumber>]/a';
    },

    get ODTIInterpretersResultsEmptyTable() {
        return $('//table[contains(@id,"ContractorODTITable") and contains(@class,"Empty")]');
    },

    get noItemsToShowText() {
        return $('//td[text()="No items to show..."]');
    },

    get interpreterResultsLinkTextLinkLocator() {
        return '//table[contains(@id,"ContractorODTITable")]/tbody//span[contains(text(),"<dynamicRowLinkText>")]/parent::a/parent::td/parent::tr/td[<dynamicColumnNumber>]/a'
    },

    get jobIDTextInODTIJobAllocationPage() {
        return $('//div[contains(text(),"Job ID #")]');
    },
}