
module.exports = {
    
    get contractTitleInput(){
        return $('//input[contains(@id,"Contract_Title")]')
    },

    get contractNumberInput(){
        return $('//input[contains(@id,"Contract_Number")]')
    },

    get paymentTermsInput(){
        return $('//textarea[contains(@id,"PaymentTerms")]')
    },

    get contractCommencementDateInput(){
        return $('//input[contains(@id,"Contract_CommencementDate")]')
    },

    get contractCompletionDateInput(){
        return $('//input[contains(@id,"Contract_CompletionDate")]')
    },

    get contractExtensionDateInput(){
        return $('//input[contains(@id,"Contract_ExtensionDate")]')
    },

    get paymentFrequencyDropdown(){
        return $('//select[contains(@id,"PaymentFrequency")]')
    },

    get invoiceFrequencyDropdown(){
        return $('//select[contains(@id,"Contract_InvoiceFrequency")]')
    },

    get contractFileUploadControl(){
        return $('//*[text()="Manage Contract"]/../..//*[@type="file"]')
    },

    get saveContractButton(){
        return $('//*[text()="Manage Contract"]/../..//input[@value="Save"]')
    },

    get contractHeadingText(){
        return $('//div[contains(@id,"ContractTitle")]//span')
    },

    get copyContractButton(){
        return $('//div[@title="copy contract"]')
    },

    get addNAATIMinimumLevelLink(){
        return $('//*[contains(text(),"Add minimum NAATI level")]')
    },

    get naatiMinimumLevelItems(){
        return $$('//*[text()="Minimum NAATI Levels"]/../../../..//*[contains(@class,"AccordionVertical___title")]')
    },

    get naatiMinimumLevelTables(){
       // return $$('//*[text()="Minimum NAATI Levels"]/../../../..//*[contains(@class,"AccordionVertical___title")]')
        return $$('//*[contains(text(),"Minimum NAATI Levels")]/../../..//table[contains(@id,"ServiceLanguageTable")]')
    },

    get addContractRateButton(){
        return $('//*[contains(text(),"Add contract rates")]')
    },

    get contractNameInput(){
        return $('//*[contains(text(),"Manage Rate")]/../..//*[contains(text(),"Name")]/..//input')
    },

    get contractBusinessHour(){
        return $('//*[contains(text(),"Manage Rate")]/../..//*[contains(text(),"Hour Type")]/..//select')
    },

    get contractLanguageDropdown(){
        return $('//*[contains(text(),"Manage Rate")]/../..//*[contains(text(),"Service Language")]/..//div')
    },

    get saveContractRateButton(){
        return $('//*[contains(text(),"Manage Rate")]/../..//input[@value="Save Rate"]')
    },

    get minimumPeriodContract(){
        return $('//*[contains(text(),"Manage Rate")]/../..//*[contains(text(),"Minimum Period 1")]/..//input')
    },

    get minimumRateContract(){
        return $('//*[contains(text(),"Manage Rate")]/../..//*[contains(text(),"Minimum Rate 1")]/..//input')
    },

    get ongoingPeriodContract(){
        return $$('//*[contains(text(),"Manage Rate")]/../..//*[contains(text(),"Ongoing Period")]/..//input')[0]
    },

    get minimumPeriodContractor(){
        return $$('//*[contains(text(),"Manage Rate")]/../..//*[contains(text(),"Minimum Period 1")]/..//input')[1]
    },

    get minimumRateContractor(){
        return $$('//*[contains(text(),"Manage Rate")]/../..//*[contains(text(),"Minimum Rate 1")]/..//input')[1]
    },

    get ongoingPeriodContractor(){
        return $$('//*[contains(text(),"Manage Rate")]/../..//*[contains(text(),"Ongoing Period")]/..//input')[1]
    },

    get scheduleSegment(){
        return $$('//*[contains(text(),"Manage Rate")]/../..//td[@class="fc-widget-content"]')[1]
    },

    get prebookedVideoContractRates(){
        return $('//*[contains(text(),"Contract Rates Schedules")]/../../..//*[contains(text(),"Pre-booked Video")]')
    },

    get addAssignmentTypeLink(){
        return $('//*[contains(text(),"Add assignment type")]')
    },

    get assignmentLabelInput(){
        return $('//*[contains(text(),"Add Assignment Type")]/../..//*[contains(text(),"Label")]/..//input')
    },

    get addAssignmentTypeButton(){
        return $('//*[contains(text(),"Add Assignment Type")]/../..//input[@value="Add"]')
    },

    get assignmentTypeTableRows(){
        return $$('//*[contains(text(),"Assignment Type")]/../../..//tr')
    },

    get disableLink(){
        return $$('//*[text()="Assignment Types"]/../../..//div[@class="dotButton OSInline"]')
    },

    get manageRatePopup() {
        return $('//span[text()="Manage Rate" and (contains(@id,"ContractRateModal"))]');
    },

    get manageRateServiceLanguageDropdownLink() {
        return $('//label[text()="Service Language"]/parent::div//span[text()="ACHOLI - On Site"]');
    },

    get manageRateNAATILevelDropdown() {
        return $('//select[contains(@id,"NaatiLevel")]');
    },

    get manageRateNameTextBox() {
        return $('//input[contains(@name,"DisplayName")]');
    },

    get manageRateHourTypeDropdown() {
        return $('//select[contains(@id,"HourType")]');
    },

    get contractRatesDynamicFieldLocator() {
        return '//span[text()="Contract Rates"]/parent::div//label[text()="<dynamicFieldName>"]/parent::div/input';
    },

    get contractorRatesDynamicFieldLocator() {
        return '//span[text()="Contractor Rates"]/parent::div//label[text()="<dynamicFieldName>"]/parent::div/input';
    },

    get fieldNameCommonLocator() {
        return '//label[text()="<dynamicFieldName>"]';
    },

    get scheduleSegmentSection() {
        return $('//span[text()="Schedule Segment"]');
    },

}