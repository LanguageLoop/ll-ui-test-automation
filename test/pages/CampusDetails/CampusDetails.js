
module.exports ={

    get campusNameText(){
        return $('//div[@class="Name"]')
    },

    get campusIDText(){
        return $('//div[@class="PreviewMapDetail"]/div')
    },

    get manageCampusLink(){
        return $('//a[contains(text(),"Manage campus")]')
    },

    get billToDetailsHeading(){
        return $('//*[text()="Bill-To Details"]')
    },

    get billToDetailsTable(){
        return $('//table[contains(@id,"wtCampusBillToTable")]')
    },

    get firstBillToDetailsLink(){
        return $('//table[contains(@id,"wtCampusBillToTable")]//td')
    },

    get contractRateSchedulesHeader(){
        return $('//*[text()="Contract Rates Schedules"]')
    },

    get contractRatesOnSiteHeader(){
        return $$('//*[@class="AccordionVertical___title" and text()="On Site"]')[0]
    },

    get contractRatesOnSiteTable(){
        return $$('//table[contains(@id,"wtContractServiceRatesTable")]')[0]
    },

    get contractRatesPrebookedTIHeader(){
        return $$('//*[@class="AccordionVertical___title" and text()="Pre-booked TI"]')[0]
    },

    get contractRatesPrebookedTITable(){
        return $$('//table[contains(@id,"wtContractServiceRatesTable")]')[1]
    },

    get contractRatesPrebookedVideoHeader(){
        return $$('//*[@class="AccordionVertical___title" and text()="Pre-booked Video"]')[0]
    },

    get contractRatesPrebookedVideoTable(){
        return $$('//table[contains(@id,"wtContractServiceRatesTable")]')[2]
    },

    get preferenceHeader(){
        return $('//*[text()="Preference" and @class="Heading3"]')
    },

    get addPreferenceButton(){
        return $('//a[contains(text(),"Add preference")]')
    },

    get preferenceTypeDropdown(){
        return $('//*[text()="Preference Type"]/..//select')
    },

    get savePreferenceButton(){
        return $('//*[text()="Add Preference"]/../..//input[@value="Save"]')
    },

    get genderPreferenceSection(){
        return $('//*[@class="SelectionTitle" and text()="Gender"]')
    },

    get policeCheckPreferenceSection(){
        return $('//*[@class="SelectionTitle" and text()="Police Check"]')
    },

    get workingWithChildrenPreferenceSection(){
        return $('//*[@class="SelectionTitle" and text()="Working With Children"]')
    },

    get addVaccinationButton(){
        return $('//a[contains(text(),"Add vaccination")]')
    },

    get diseaseDropdown(){
        return $('//*[text()="Add Vaccination"]/../..//select[contains(@id,"DiseaseId")]')
    },

    get validMonthsInput(){
        return $('//*[text()="Add Vaccination"]/../..//input[contains(@id,"ValidMonths")]')
    },

    get saveVaccinationButton(){
        return $('//*[text()="Add Vaccination"]/../..//input[contains(@id,"Save")]')
    },

    get hepatitisBVaccination(){
        return $('//*[@class="SelectionTitle" and text()="Hepatitis B"]')
    },

    get deleteVaccinationButtons(){
        return $$('//*[text()="Vaccinations Override"]/../../..//*[@class="fa fa-fw fa-trash-o"]')
    },

    get deletePreferenceButtons(){
        return $$('//*[text()="Preference" and @class="Heading3"]/../../..//*[@class="fa fa-fw fa-trash-o"]')
    },

    get addDimensionCloudButton(){
        return $('//*[text()="Dimension Tag Cloud"]/..//*[@class="fa fa-fw fa-plus"]')
    },

    get dimensionCloudHeader(){
        return $('//*[text()="Dimension Tag Cloud"]')
    },

    get dimensionCloudDropdown(){
        return $('//select[contains(@id,"DimensionTagging")]')
    },

    get dimensionCloudTags(){
        return $$('//div[contains(@id,"DimensionTagging")]/span/span')
    },

    get dimensionCloudDeleteButtons(){
        return $$('//div[contains(@id,"DimensionTagging")]/span//span//a')
    },

    get addNotesLink(){
        return $('//div[contains(text(),"Add note")]')
    },

    get noteTitleInput(){
        return $('//*[text()="Note"]/../..//input[contains(@name,"inpTitle")]')
    },

    get noteMessageInput(){
        return $('//*[text()="Note"]/../..//textarea[contains(@name,"inpMessage")]')
    },

    get saveNoteButton(){
        return $('//*[text()="Note"]/../..//input[contains(@name,"Save")]')
    },

    get noteTableRows(){
        return $$('//table[contains(@id,"ClientNote")]//tr')
    },

    get noteToggleButtons(){
        return $$('//*[text()="Notes"]/../../../..//label[contains(@name,"wtlblToggle")]')
    },

    get noteRemoveLink(){
        return $$('//*[text()="Notes"]/../../../..//a[text()="Remove"]')
    },

    get travelRatesHeader(){
        return $('//*[text()="Travel Rates"]')
    },

    get includedTravelHeader(){
        return $('//*[text()="Included Travel"]')
    },

    get hourlyFeeHeader(){
        return $('//*[text()="Hourly Fee"]')
    },

    get distanceFeeHeader(){
        return $('//*[text()="Distance Fee"]')
    },

    get addNAATIOverrideLevelLink(){
        return $('//a[contains(text(),"Add minimum NAATI level override")]')
    },

    get minimumNAATILevelOverrideHeader(){
        return $('//*[contains(text(),"Minimum NAATI Levels Override")]')
    },

    get serviceLanguageDropdown()
    {
        return $('//*[text()="Manage Service"]/../..//*[text()="Service Language"]/..//div')
    },

    get naatiLevelDropdown(){
        return $('//*[text()="Manage Service"]/../..//*[text()="NAATI Level"]/..//select')
    },

    get saveNAATIOverrideButton(){
        return $('//*[text()="Manage Service"]/../..//input[@value="Save"]')
    },

    get naatiLevelOverrideItems(){
        return $$('//*[text()="Minimum NAATI Levels Override"]/../../../..//*[contains(@class,"AccordionVertical___title")]')
    },

    get naatiLevelOverrideTables(){
        return $$('//*[contains(text(),"NAATI Levels")]/../../..//table[contains(@id,"ServiceLanguageTable")]')
    },

    get addCancellationFeeButton(){
        return $('//*[contains(text(),"Add cancellation fee")]')
    },

    get cancellationFeeRows(){
        return $$('//table[contains(@id,"CancellationPenalty")]//tr//td')
    },

    get cancellationFeeToggleButton(){
        return $('//table[contains(@id,"CancellationPenalty")]//label')
    },

    get cancellationFeeRemoveLink(){
        return $('//table[contains(@id,"CancellationPenalty")]//*[text()="Remove"]')
    },

    get cancellationFeeNameInput(){
        return $('//input[contains(@id,"CancellationPenalties_Name")]')
    },

    get cancellationFeeHoursBeforeInput(){
        return $('//input[contains(@id,"CancellationPenalties_HoursBefore")]')
    },

    get cancellationFeeDurationInput(){
        return $('//input[contains(@id,"CancellationPenalties_HoursDuration")]')
    },

    get cancellationFeeClientFeeInput(){
        return $('//*[text()="Client Fee"]/..//Input')
    },

    get cancellationFeeUnableToServiceFeeInput(){
        return $('//*[text()="Unable to Service"]/..//Input')
    },

    get cancellationFeeFailedToAttendFeeInput(){
        return $('//*[text()="Failed to Attend"]/..//Input')
    },

    get saveCancellationButton(){
        return $('//input[@value="Save Cancellation"]')
    },

    get nesHeader()
    {
        return $('//*[contains(text(),"Non English Speaking Message Templates")]')
    },

    get nesTableRows()
    {
        return $$('//*[text()="Non English Speaking Message Templates"]/../../..//table//tr')
    },

    get addNESButton()
    {
        return $('//*[contains(text(),"Add NES")]')
    },

    get nesLanguageDropdown()
    {
        return $('//*[contains(text(),"Service Language Message")]/../..//*[text()="Service Language"]/..//div')
    },

    get nesSaveButton()
    {
        return $('//*[contains(text(),"Service Language Message")]/../..//input[@value="Save"]')
    },

    get nesRemoveLinks()
    {
        return $$('//*[text()="Non English Speaking Message Templates"]/../../..//table//a[text()="Remove"]')
    },

    get addCommonInstructionLink()
    {
        return $('//*[contains(text(),"Add common instruction")]')
    },

    get commonInstructionTableRows()
    {
        return $$('//*[contains(text(),"Common Instructions")]/../../..//table//tr')
    },

    get removeCommonInstructionButton()
    {
        return $('//*[contains(text(),"Common Instructions Override")]/../../..//table//*[@class="fa fa-fw fa-trash-o fa-lg"]')
    },

    get commonInstructiontitleInput()
    {
        return $('//*[text()="Manage Common Instruction"]/../..//input[contains(@id,"Title")]')
    },

    get commonInstructionMessageInput()
    {
        return $('//*[text()="Manage Common Instruction"]/../..//textarea[contains(@id,"Message")]')
    },

    get commonInstructionAddButton()
    {
        return $('//*[text()="Manage Common Instruction"]/../..//input[@value="Add" or @value="Save"]')
    },

    get customizedFieldAddLink()
    {
        return $('//*[contains(text(),"Add customized field")]')
    },

    get fieldNameInput()
    {
        return $('//*[contains(text(),"Manage Customized Field")]/../..//*[text()="Field Name"]/..//input')
    },

    get customizedFieldAddButton()
    {
        return $('//*[contains(text(),"Manage Customized Field")]/../..//input[@value="Add"]')
    },

    get customizedFieldTableRows()
    {
        return $$('//table[contains(@id,"CustFieldOverride")]//tr')
    },

    get customizedFieldRemoveButton()
    {
        return $('//table[contains(@id,"CustFieldOverride")]//*[@class="fa fa-fw fa-trash-o fa-lg"]')
    },

    get manageCampusPopup(){
        return $('//div[contains(@class,"Campus DialogContainer")]');
    },

    get assignBookingOfficerLink(){
        return $('//span[text()="Assign booking officer"]/parent::a');
    },

    get addNewUserButton(){
        return $('//input[contains(@id,"BookingOfficerDialog")][@value="Add New User"]');
    },

    get firstNameFieldBookingOfficer(){
        return $('//input[contains(@id,"FirstName") and contains(@id,"BookingOfficerDialog")]')
    },

    get emailFieldBookingOfficer(){
        return $('//input[contains(@id,"UserEmail") and contains(@id,"BookingOfficerDialog")]')
    },

    get landLineNumberFieldBookingOfficer(){
        return $('//input[contains(@id,"LandlinePhoneNumber") and contains(@id,"BookingOfficerDialog")]')
    },

    get saveButtonBookingOfficer(){
        return $('//input[contains(@id,"btnSave") and contains(@id,"BookingOfficerDialog")]')
    },

    get bookingOfficerPopupCloseButton(){
        return $('//a[contains(@id,"dialogCampusForm_block_wtlbtnAltusDialogClose")]');
    },

    get campusPinBillToCodeLinkLocator() {
        return '//a[text()="<dynamic>"]';
    },

    get campusPreferenceSelectedOptionLocator() {
        return '//span[text()="Gender (On-demand TI)"]//ancestor::span[contains(@id,"ListPreferences")]//select[contains(@id,"GenderPreference")]/option[text()="<dynamic>"]';
    },

    get campusAddPreferenceLink() {
        return $('//a[contains(text(),"Add preference")]');
    },

    get campusPreferenceTypeDropdown() {
        return $('//select[contains(@id,"PreferenceTypeId")]');
    },

    get campusPreferenceTypeDropdownOptionLocator() {
        return '//select[contains(@id,"PreferenceTypeId")]/option[text()="<dynamicOption>"]';
    },

    get campusPreferenceTypeDropdownOptionSiblingLocator() {
        return '//select[contains(@id,"PreferenceTypeId")]/option[text()="<dynamicOption1>"]/following-sibling::option[text()="<dynamicOption2>"]';
    },

    get campusPreferenceDropdown() {
        return $('//label[text()="Preference"]/parent::div/span/select');
    },

    get campusPreferenceTypeRemoveIconLocator() {
        return '//span[text()="<dynamicOption>"]/ancestor::div[@class="PreferenceInfoBlock Card"]//span[@class="fa fa-fw fa-trash-o"]';
    },

    get saveCampusPreferenceButton() {
        return $('//input[contains(@id,"btnSavePreference")]');
    },

    get campusGenderODTIDropdown() {
        return $('//span[text()="Gender (On-demand TI)"]/ancestor::div[@class="PreferenceInfoBlock Card"]//select[contains(@id,"GenderPreference")]');
    },

    get campusGenderODTIDropdownOptionLocator() {
        return '//span[text()="Gender (On-demand TI)"]/ancestor::div[@class="PreferenceInfoBlock Card"]//select[contains(@id,"GenderPreference")]/option[text()="<dynamicOption>"]';
    }
}