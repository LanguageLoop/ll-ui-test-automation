
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

    get savedServiceLanguageAccordionDynamicLocator() {
        return '//div[contains(@id,"ServiceLanguageAccordion") and (contains(@id,"Title"))]/div[text()="<dynamicServiceLanguageAccordion>"]';
    },

    get savedContractRateInTableDynamicLocator() {
        return '//table[contains(@id,"ContractServiceRatesTable")]/tbody//a[text()="<dynamicContractRateName>"]';
    },

    get requiredFieldErrorMessageUnderNameField() {
        return $('//span[contains(@id,"DisplayName") and text()="Required field!"]');
    },

    get wholeMinutesWithNoDecimalsErrorMessage() {
        return $('//span[text()="Please enter whole minutes with no decimals."]');
    },

    get minPeriodValueInTable() {
        return $('//table[contains(@id,"ContractServiceRatesTable")]/tbody/tr[1]/td[2]');
    },

    get contractAddPreferenceLink() {
        return $('//a[contains(text(),"Add preference")]');
    },

    get contractPreferenceTypeDropdown() {
        return $('//select[contains(@id,"PreferenceTypeId")]');
    },

    get contractPreferenceTypeDropdownOptionLocator() {
        return '//select[contains(@id,"PreferenceTypeId")]/option[text()="<dynamicOption>"]';
    },

    get contractPreferenceTypeDropdownOptionSiblingLocator() {
        return '//select[contains(@id,"PreferenceTypeId")]/option[text()="<dynamicOption1>"]/following-sibling::option[text()="<dynamicOption2>"]';
    },

    get contractPreferenceDropdown() {
        return $('//label[text()="Preference"]/parent::div/span/select');
    },

    get contractPreferenceTypeRemoveIconLocator() {
        return '//span[text()="<dynamicOption>"]/ancestor::div[@class="PreferenceInfoBlock Card"]//span[@class="fa fa-fw fa-trash-o"]'
    },

    get contractAddPreferencePopupCloseButton() {
        return $('//span[text()="Add Preference"]/parent::div//span[@class="fa fa-fw fa-remove"]');
    },

    get saveContractPreferenceButton() {
        return $('//input[contains(@id,"btnSavePreference")]');
    },

    get contractGenderODTIPreferenceAdded() {
        return $('//span[text()="Gender (On-demand TI)"]/ancestor::div[@class="PreferenceInfoBlock Card"]');
    },

    get contractGenderODTIDropdownOptionLocator() {
        return '//span[text()="Gender (On-demand TI)"]/ancestor::div[@class="PreferenceInfoBlock Card"]//select[contains(@id,"Preference")]/option[text()="<dynamicOption>"]';
    },

    get addCustomizedFieldLink() {
        return $('//div[contains(text(),"Add customized field")]/parent::a');
    },

    get fieldNameTextBoxOnEditOptions() {
        return $('//label[text()="Field Name"]/following-sibling::input');
    },

    get freeTextRadioButton() {
        return $('//label[text()="Free text"]/parent::div/parent::div//input[@type="radio"]');
    },

    get audibleInODTICheckboxOnEditOptions() {
        return $('//label[text()="Audible in ODTI"]/preceding-sibling::input');
    },

    get addButtonOnEditOptions() {
        return $('//input[contains(@id,"SaveModal") and @value="Add"]');
    },

    get maxLengthTextBoxOnEditOptions() {
        return $('//input[contains(@id,"CustomizedFields_ODTIInputMaxlength")]');
    },

    get audioLabelTextBoxOnEditOptions() {
        return $('//input[contains(@id,"CustomizedFields_ODTIAudioName")]');
    },

    get customisedFieldToggleDynamicLocator() {
        return '//a[text()="<dynamic>"]/parent::div/parent::td/parent::tr//label[contains(@id,"Toggle")]'
    },

    get customisedFieldRemoveLinkDynamicLocator() {
        return '//a[text()="<dynamic>"]/parent::div/parent::td/parent::tr//label[contains(@id,"Toggle")]/following::a[text()="Remove"]'
    },

    get useMinimumRate2Checkbox() {
        return $('//input[contains(@id,"UseMinimumRate2") and (@type="checkbox")]');
    },

    get minimumPeriodHoursAssignmentTypeTextBox() {
        return $('//input[contains(@id,"AssignmentTypes_MinimumPeriod")]');
    },

    get ongoingMinimumPeriodHoursAssignmentTypeTextBox() {
        return $('//input[contains(@id,"AssignmentTypes_OngoingMinimumPeriod")]');
    },

    get serviceUsedByContractOptionCheckboxDynamicLocator() {
        return '//div[text()="<dynamic>"]/input[@type="checkbox"]';
    },

    get assignmentTypesPaginationNextLink() {
        return $('//span[text()="Assignment Types"]/parent::div/parent::div/parent::div//nav/a[text()="next"]');
    },

    get assignmentTypesAddedInTableText() {
        return $('//table[contains(@id,"ContractAssignTypeTable") and (not(contains(@class,"Empty")))]/tbody');
    },

    get toggleForAddedAssignmentTypeInTableDynamicLocator() {
        return '//a[text()="<dynamic>"]/parent::div/parent::td/parent::tr//label[contains(@id,"lblToggle")]';
    },

    get disableLinkForAddedAssignmentTypeInTableDynamicLocator() {
        return '//a[text()="<dynamic>"]/parent::div/parent::td/parent::tr//a[text()="Disable"]';
    },

    get useMinRate2TickedProvideNonZeroRatesErrorText() {
        return $('//span[text()="Use 2nd Minimum Rate is ticked on. Please provide a non-zero value for 2nd Minimum Rate and Period for these rate(s)"]');
    }
}