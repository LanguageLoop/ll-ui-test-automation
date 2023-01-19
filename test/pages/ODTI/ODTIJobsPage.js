
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
    }
}