
module.exports={

    get campusPinInput(){
        return $('//input[contains(@id,"CampusPIN")]')
    },

    get requesterNameDropdown(){
        return $('//*[text()="Requester Name"]/..//input/..')
    },
    get languageDropdown(){
        return $('//label[text()="Language"]/../div/div')
    },

    get assignmentTypeDropdown(){
        return $('//label[text()="Assigment Type"]/../div')
    },

    get dateInput(){
        return $('//input[@placeholder="DD-MM-YYYY"]')
    },

    get timeInput(){
        return $('//input[@placeholder="HH:mm"]')
    },

    get durationDropdown(){
        return $('//label[text()="Duration"]/..//select')
    },

    get natureOfRequestInput(){
        return $('//label[text()="Nature Of Request"]/..//select')
    },

    get naatiLevelDropdown(){
        return $('//label[text()="NAATI Level"]/..//select')
    },

    get confirmEmailInput(){
       if ( $('//label[text()="Confirmation Email"]/..//input').isExisting())
      {
            // cso page
         return $('//label[text()="Confirmation Email"]/..//input')
      }
         else
         {
            return $('//label[text()="Confirmation Email"]/../..//input')
         }
        
        
    },

    get confirmModeDropdown(){
        return $('//*[text()="Confirmation Mode"]/..//select')
    },

    get confirmPhoneNumberInput(){
        return $('//input[contains(@id,"wttxtConfPhone")]')
    },

    get saveAndProceedToSummaryButton(){
        return $('//input[@value="Save & Proceed to Summary"]')
    },

    get submitButton(){
        return $('//a[text()="Submit"]')
    },

    get submitAndSummaryButton(){
        return $('//input[@value="Submit & Summary"]')
    },

    get continueButton(){
        return $('//*[text()="Duplication Job Request"]/../..//input[@value="Continue"]')
    },

    get nextButton(){

        if($('//input[@value="Next"]').isExisting())
        {
            //CSO
        return $('//input[@value="Next"]')
        }
        else
        {
            //CBO
        return $('//span[text()="Next"]/..')
        }
    },

    get successMessage() { 
        return $('//*[@class="Feedback_Message_Success"]')
    },

    get requesterNameSearchInput(){
        return $('//*[text()="Requester Name"]/..//input')
    },

    get manualAllocationCheckBox(){
        return $('//*[contains(text(),"This Job Requires Manual Allocation")]/..//input[@type="checkbox"]')
    },

    get manualAllocationReasonInput(){
        return $('//textarea[@placeholder="Manual Allocation Reason"]')
    },

    get genderPreferenceCheckBox(){
        return $('//*[text()="Gender"]/..//*[text()="Must"]//input')
    },

    get genderDropdown(){
        return $('//*[text()="Gender"]/..//select')
    },

    get ancestryPreferenceCheckBox(){
        return $('//*[text()="Heritage / Ancestry"]/..//*[text()="Must"]//input')
    },

    get ancestryDropdown(){
        return $('//*[text()="Heritage / Ancestry"]/..//div[contains(@class,"select2-container")]')
    },

    get religionPreferenceCheckBox(){
        return $('//*[text()="Religion"]/..//*[text()="Must"]//input')
    },

    get religionDropdown()
    {
        return $('//*[text()="Religion"]/..//div[contains(@class,"select2-container")]')
    },

    get addInterpreterLink(){
        return $('//a[text()="Add Interpreter"]')
    },

    get preferredInterpreterMustCheckBox(){
        return $('//*[text()="Preferred Interpreter"]/..//input[@type="checkbox"]')
    },

    get addExcludedInterpreterLink(){
        return $('//a[text()="Add Excluded Interpreter"]')
    },

    get searchForInterpreterInput(){
        return $('//input[contains(@placeholder,"Search by Interpreter")]')
    },

    get addInterpretersButton(){
        return $('//input[@value="Add Interpreter(s)"]')
    },

    get interpreterSearchResultsCheckBox(){
        return $('//*[text()="Find Interpreter"]/../..//table//input')
    },

    get interpreterSearchResultsCheckBoxes(){
        return $$('//*[text()="Find Interpreter"]/../..//table//input')
    },

    get successMessageText(){
        return $('//span[@class="Feedback_Message_Text"]')
    },

    get editJobConfirmationYesButton(){
        return $('//input[@value="Yes" and contains(@name,"dialogModal")]')
    },

    get confirmationDate(){
        return $('//*[contains(@id,"confirmDate")]')
    },

    get confirmationTime(){
        return $('//input[contains(@id,"ConfirmationTime")]')
    },

    get backLink(){
        return $('//a[text()="Back"]')
    },

    get locationInput(){
        return $('//input[contains(@id,"wtInput_wttxtAddress")]')
    },

    get departmentInput(){
        return $('//*[text()="Department"]/../../..//input[contains(@id,"txtInputStd")]')
    },

    get yourReferenceInput(){
        return $('//*[text()="Your reference"]/../../..//input[contains(@id,"txtInputStd")]')
    },

    get POInput(){
        return $('//*[text()="PO Number"]/../../..//input[contains(@id,"txtInputStd")]')
    },

    get nesLink(){
        return $('//a[contains(text(),"Add NES")]')
    },

    get nesFirstNameInput(){
        return $('//*[text()="Manage NES"]/../..//input[contains(@id,"FirstName")]')
    },

    get nesSaveButton(){
        return $('//*[text()="Manage NES"]/../..//input[contains(@id,"Save")]')
    },

    get reportToLocationInput(){
        return $('//*[text()="Location"]/../../..//input')
    },

    get reportToNameInput(){
        return $('//input[contains(@id,"wtinFirstName")]')
    },

    get reportToPhoneNumberInput(){
        return $('//input[contains(@id,"wtinPhoneNumber")]')
    },

    get commonInstructionCheckBox(){
        return $('//*[text()="Common Instructions & Language Notes"]/..//input')
    },

    get addJobFileLink(){
        return $('//a[contains(text(),"Add ") and contains(text(),"job") and contains(text(),"file")]')
    },

    get addJobFileControl(){
        return $('//*[text()="Upload Job File"]/../..//input[@type="file"]')
    },

    get uploadAllFilesButton(){
        return $('//*[text()="Upload Job File"]/../..//input[@value="Upload All File/s"]')
    },

    get homeVisitTab(){
        return $('//*[text()="Home Visit"]')
    },

    get prebookedTelephoneTab(){
        return $('//label[text()="Pre-Booked Telephone"]')
    },

    get prebookedVideoTab(){
        return $('//label[text()="Pre-booked Video"]')
    },

    get onsiteTab(){
        return $('//label[text()="On Site"]')
    },

    get interpreterInstructionsInput(){
        return $('//*[contains(text(),"Instructions for Interpreter")]/..//textarea')
    },

    get videoLinkEditorInput(){
        return $$('//div[@role="presentation"]')[1]
    },

    get noChangeRequiredButton(){
        return $('//*[contains(@value,"No change required")]')
    },

    get campusPINComboBox(){
        return $('//*[contains(text(),"Campus PIN")]/..//select')
    },

    get jobGotUpdatedWarningMessage(){
        return $('//span[text()="This job got updated. Please refresh your browser and try it again."]')
    },

    get newRequesterPlusButton(){
        return $('//div[@class="ButtonFindBookingOfficer OSInline"][not(@style)]');
    },

    get addNewUserButton(){
        return $('//input[@value="Add New User"][not(contains(@id,"FindCBO"))]');
    },

    get firstNameFieldBookingOfficer(){
        return $('//input[contains(@id,"FirstName") and not (contains(@id,"FindCBO"))]');
    },

    get emailFieldBookingOfficer(){
        return $('//input[contains(@id,"UserEmail") and not (contains(@id,"FindCBO"))]');
    },

    get landLineNumberFieldBookingOfficer(){
        return $('//input[contains(@id,"LandlinePhoneNumber") and not (contains(@id,"FindCBO"))]');
    },

    get saveButtonBookingOfficer(){
        return $('//input[contains(@id,"btnSave") and not (contains(@id,"FindCBO"))]');
    },

    get requesterNameTextValueLocator(){
        return '//span[normalize-space()="<dynamic>"]';
    },

    get interpreterInstructionsText() {
        return $('//*[contains(text(),"Instructions for Interpreter")]');
    },

    get jobTypeOptionLocator() {
        return '//span[text()="<dynamic>"]//parent::label';
    },

    get contractorSearchBoxJobAllocation() {
        return $('//input[@placeholder="Search by Name or Contractor ID"]');
    },

    get contractorJobStatusLinkLocator() {
        return '//a[contains(text(),"<dynamic>")]/parent::div/parent::div//a[contains(@id,"JobStatus")]';
    },

    get resetAutoNotificationsLink() {
        return $('//span[text()="Reset auto notifications"]/parent::a');
    },

    get travelApprovedTextBox() {
        return $('//span[contains(text(),"Travel Approved")]/parent::div/parent::div/parent::div//input[@type="text"]');
    },

    get acceptMetroServiceCheckbox() {
        return $('//input[contains(@id,"JobMetro") and (@type="checkbox")]')
    },

    get contractorDistanceLocator() {
        return '//a[contains(text(),"<dynamic>")]/parent::div/parent::div//div[contains(text(),"KM")]';
    },

    get jobStatusLink() {
        return $('//span[contains(@id,"JobStatusCont")]/a[contains(@id,"JobStatus")]');
    },

    get jobStatusDropdown() {
        return $('//span[contains(@id,"JobStatusCont")]/select');
    },

    get jobCancelConfirmationPopupText() {
        return $('//div[text()="Are you sure, you want to cancel?" or (contains(text(),"Would you like to cancel?"))]');
    },

    get cancelConfirmationYesButton() {
        return $('//input[contains(@id,"BtnYes")]');
    },

    get cancelReasonDropdown() {
        return $('//select[contains(@id,"ReasonCmb")]');
    },

    get cancelOnBehalfDropdown() {
        return $('//select[contains(@id,"CboCmb")]');
    },

    get submitButtonConfirmationPopup() {
        return $('//input[@value="Submit" and contains(@id,"ContModal_Modal_wtConfirmationModal")]');
    },

    get searchByJobIdTextBox() {
        return $('//input[@placeholder="Search by Job Id, campus name, and job address"]');
    },

    get organisationCampusBlocksContractorText() {
        return $('//span[text()="1. Organisation/Campus blocks Contractor"]');
    },

    get instructionsForInterpreterLabelText() {
        return $('//div[contains(text(),"Instructions for Interpreter")]');
    },

    get campusPinDropDown() {
        return $('//select[contains(@id,"PINSingle")]');
    },

    get timePickerTextBox() {
        return $('//input[contains(@id,"EarliestStartTime")]');
    },

    get timePickerList() {
        return $('//div[contains(@class,"EarliestStartTime") and not(contains(@class,"top"))]');
    },

    get timePickerListOptionElements() {
        return '(//div[contains(@class,"EarliestStartTime")]//li[text()="<dynamic>"])';
    },

    get timePickerListOptionLocator() {
        return '(//div[contains(@class,"EarliestStartTime")]//li[text()="<dynamic1>"])[<dynamic2>]';
    },

    get campusTimeText() {
        return $('//span[text()="Campus time:"]')
    },

    get jobContinueConfirmationPopupTextElements() {
        return $$('//div[contains(text(),"continue?")]');
    },

    get continueButtonElements() {
        return $$('//input[@value="Continue"]');
    },

    get cfOnSiteTextBox(){
        return $('//*[text()="CF_OnSite"]/../../..//input[contains(@id,"txtInputStd")]')
    },

    get requesterModePhoneActive() {
        return $('//label[contains(@class,"active") and text()="Phone"]');
    },

    get jobRequesterDetailsForm() {
        return $('//div[text()="Job Requester Details"]/parent::div');
    },

    get noCampusPinFoundMessage() {
        return $('//span[@class="Feedback_Message_Text" and text()="No Campus PIN found"]');
    },

    get campusInactiveMessage() {
        return $('//span[@class="Feedback_Message_Text" and text()="The Campus is Inactive"]');
    },

    get campusPinDropDownOption() {
        return '//select[contains(@id,"PINSingle")]/option[contains(text(),"<dynamic>")]';
    },

    get locationAddressValueField() {
        return $('//input[contains(@id,"wtInput_wttxtAddress") and @value]');
    },

    get hoursConfirmationContinueButton() {
        return $('//input[@value="Continue" and contains(@id,"HoursConfirmation")]');
    }
}