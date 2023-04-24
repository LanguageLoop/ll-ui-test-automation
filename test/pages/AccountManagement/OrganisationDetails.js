
module.exports ={

    get addABlockLink() {
        return $('//a[text()="Add a block"]');
    },

    get searchByContractorNameAndIdTextBox() {
        return $('//input[contains(@id,"SearchContr")]');
    },

    get contractorResultCheckboxLocator() {
        return '//span[contains(text(),"<dynamic>")]/parent::div/parent::div//input[@type="checkbox"]';
    },

    get contractorSeverityDropdown() {
        return $('//select[contains(@id,"SeverityContr")]');
    },

    get startDateContractor() {
        return $('//input[contains(@id,"StartDateContr")]');
    },

    get endDateContractor() {
        return $('//input[contains(@id,"EndDateContr")]');
    },

    get addBlockButton() {
        return $('//input[@value="Add Block"][@type="submit"]');
    },

    get newBlockRuleLinksToggleIcon() {
        return $('//table[contains(@id,"Blockings")]/child::tbody/child::tr//child::label[contains(@id,"Toggle")]');
    },

    get newBlockRuleLinksRemove() {
        return $('//table[contains(@id,"Blockings")]/child::tbody/child::tr//child::a[(text()="Remove")]');
    },

    get activeBlockerLinkLocator() {
        return '//a[contains(@id,"Blockings") and contains(text(),"<dynamic>")]';
    },

    get saveButtonOnBlockingPopup() {
        return $('//input[contains(@id,"blockingDialog") and (@value="Save")]')
    },

    get showExpiredBlocksToggleCheck() {
        return $('//label[contains(@id,"wt25_block_wtCheckbox")]');
    },
}