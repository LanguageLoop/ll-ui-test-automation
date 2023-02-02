
module.exports ={

    get titleDropdown(){
        return $('//select[contains(@id,"Title")]');
    },

    get campusDropdown(){
        return $('//select[contains(@id,"Campus")]');
    },

    get startDateTextBox(){
        return $('//span[text()="Start Date"]/parent::div/parent::div/child::input');
    },

    get endDateTextBox(){
        return $('//span[text()="End Date"]/parent::div/parent::div/child::input');
    },

    get recordsCountText(){
        return $('//div[@class="Counter_Message"]');
    },

    get callStartHeader(){
        return $('//div[text()="Call Start"]');
    },

    get totalRowCount(){
        return $$('//tbody/child::tr/child::td[1]/child::div//child::span').length;
    },

    get odtiServiceChargeIDTextLocator(){
        return '//tbody/child::tr[<dynamic>]/child::td[1]/child::div//child::span[1]';
    },

    get recordStatusSelectedOption(){
        return $('//select[contains(@id,"Field")]/option[text()="RecordStatus"][@selected]');
    },

    get advancedSearchLink(){
        return $('//a[contains(text(),"Advanced search")]');
    },

    get filterFieldDropdownLocator(){
        return '(//select[contains(@id,"Field")])[<dynamic>]';
    },

    get filterFieldDropdownOptionLocator(){
        return '(//select[contains(@id,"Field")])[<dynamic1>]/child::option[text()="<dynamic2>"]';
    },

    get filterComparisonDropdownLocator(){
        return '(//select[contains(@id,"Comparison")])[<dynamic>]';
    },

    get filterComparisonDropdownOptionLocator(){
        return '(//select[contains(@id,"Comparison")])[<dynamic1>]/child::option[text()="<dynamic2>"]';
    },

    get filterValueDropdown(){
        return $('//select[contains(@id,"dropdown")]');
    },

    get filterValueTextBoxLocator(){
        return '(//input[contains(@id,"ListAdvanceSearchRule")])[<dynamic>]';
    },

    get callStartDateTimeTextLocator(){
        return '//tbody/child::tr[<dynamic>]/child::td[2]/child::div//child::span[1]';
    },

    get odtiJobTableColumnHeaders(){
        return $('//th[contains(@class,"TableRecords_Header")]/parent::tr');
    },

    get campusNameValueTextLocator(){
        return '//tbody/child::tr[<dynamic>]/child::td[4]/child::span[1]';
    },

    get interpreterNameValueTextLocator(){
        return '//tbody/child::tr[<dynamic>]/child::td[6]/child::div//child::span[1]';
    },

    get noBillingsMessageText(){
        return $('//td[text()="No odti billings to show..."]');
    },

    get exportToExcelLink(){
        return $('//a[contains(text(),"Export ") and contains (text(),"Excel")]');
    },

    get actualCountArrowButton(){
        return $('//div[contains(@id,"GetCount")]/child::span');
    },

    get actualCountRecordsValueText(){
        return $('//div[contains(@id,"CounterClaim")]');
    },

    get searchByTextBox(){
        return $('//input[contains(@id,"SearchInput")]')
    },

    get columnHeaderLocator(){
        return '//tr//*[text()="<dynamic>"]';
    },

    get columnValueTextLocator(){
        return '//tbody/child::tr[<dynamic1>]/child::td[<dynamic2>]//child::*[1]';
    },

    get paginationPageNumberLinkLocator(){
        return '//*[contains(@class,"ListNavigation") and contains (text(),"<dynamic>")]'
    },

    get nextPageArrowLink(){
        return $('//a[text()="next"]');
    },

    get previousPageArrowLink(){
        return $('//a[text()="previous"]');
    },

    get currentPageNumberLink(){
        return $('//span[@class="ListNavigation_CurrentPageNumber"]');
    },

    get availableJobRecordsTable() {
        return $('//div[@class="TableRecords_Wrapper"]');
    },

    get titleDropdownOption(){
        return '//select[contains(@id,"Title")]/child::option[text()="<dynamic>"]';
    }
}